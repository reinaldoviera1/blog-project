import React, { Component } from 'react';
import Blog from "./blog";
import CreateBlog from "./createBlog";
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import { createEntry } from "../actions/blogs";

export class Blogs extends Component {
    static propTypes = {
        saveBlog: PropTypes.func,
        blogs: PropTypes.array
    } 
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <CreateBlog saveBlog={this.props.saveBlog}/> 
                <Divider />              
                <br/>
                <h2>Recents blogs entries:</h2> 
                <br/>                              
                {
                    this.props.blogs.map((blog, index) => [(
                            <Blog key={`${blog.id}-${index}`} 
                                idBlog={blog.id}
                                username={blog.username} 
                                title={blog.title} 
                                date={blog.date} 
                                content={blog.content} comments={blog.comments}/>
                        ), <br key={`${blog.id}-${index}1`}/>,
                        <br key={`${blog.id}-${index}2`}/>]
                    )
                }                
            </div>
        );
    }
}

const connectState = state => ({
    blogs: Object.entries(state.blogs).map(a => a[1])
  });
  const connectDispatch = dispatch => ({
    saveBlog: ({title, content, username}) => dispatch(createEntry(username, content, title))
  });
  
export default connect(connectState, connectDispatch)(Blogs);
