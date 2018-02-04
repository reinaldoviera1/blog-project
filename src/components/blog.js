import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default class blog extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    static propTypes = {
        title: PropTypes.string,
        username: PropTypes.string,
        content: PropTypes.string,
        idBlog: PropTypes.number,
        date: PropTypes.string,
        comments: PropTypes.array
    } 
    onGo(){
        this.context.router.push(`/${this.props.idBlog}`);
    }
    render() {
    return (
        <Card>
            <CardHeader
                title={this.props.title}
                subtitle={`Written by: ${this.props.username}. ${this.props.comments.length} comments. (${this.props.date})`}
                />
            <CardText >
            {
                this.props.content
            }
            </CardText>
            <CardActions>
                {
                    this.props.idBlog && <Link to={`/blog/${this.props.idBlog}`}>
                                            <FlatButton label="SEE" />
                                        </Link>
                }
            
            </CardActions>            
        </Card>
    );
    }
}



