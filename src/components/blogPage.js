import React, { Component } from 'react';
import Blog from "./blog";
import Comment from "./comment";
import CreateComment from "./createComment";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from "../actions/blogs";
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';


class blogPage extends Component {    
    static propTypes = {
        blogs: PropTypes.object,
        comments: PropTypes.object,
        addComment: PropTypes.func,
        match: PropTypes.object
    }    
    constructor(props){
        super(props);
        this.state = {
            blog: props.blogs[props.match.params.blogId],
            created: false
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            blog: nextProps.blogs[this.props.match.params.blogId]
        });
    }
    addComment({username, content}){        
        this.props.addComment(this.props.match.params.blogId, username, content);
        this.setState({
            created: true
        });
    }
    handleRequestClose(){
        this.setState({
            created: false,
          });
    }
    render() {
        return (            
                !this.state.blog ? <span> No blog exist with the "{this.props.match.params.blogId}" id</span> :
                    <div>
                        <Blog username={this.state.blog.username} 
                            title={this.state.blog.title} 
                            date={this.state.blog.date} 
                            content={this.state.blog.content} comments={this.state.blog.comments}/>
                        <Divider />              
                        <br/>
                        <CreateComment addComment={this.addComment.bind(this)}/>
                        <Snackbar
                            open={this.state.created}
                            message="Comment added!!!"
                            autoHideDuration={4000}
                            onRequestClose={this.handleRequestClose.bind(this)}
                            />
                        <Divider />  
                        <h2>Comments: </h2>            
                        <br/>
                        {
                            this.state.blog.comments.map(
                                idComment => (
                                    <Comment key={idComment}
                                        content={this.props.comments[idComment]["content"]}
                                        username={this.props.comments[idComment]["username"]}/>
                                )
                            )
                        }
                    </div>
        );
    }
}

const connectState = state => ({
    blogs: state.blogs,
    comments: state.comments
});
const connectDispatch = dispatch => ({
    addComment: (blogId, username, content) => dispatch(addComment(blogId, username, content))
  });
  
export default connect(connectState, connectDispatch)(blogPage);
