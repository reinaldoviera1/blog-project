import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
const initial = {
    username: "",
    content: ""
  };

export default class commetForm extends Component {
    static propTypes = {
        saveBlog: PropTypes.func
    }
    constructor(){
        super();
        this.state = initial;
    }
    onChange(ev, nV) {
        switch (ev.target.id) {
            case "comment-username":
                this.setState({
                    username: nV
                });
                break;
            case "comment-content":
                this.setState({
                    content: nV
                });
                break;       
            default:
                break;
        }
    }
    setInitialState(){
        this.setState(initial);
    }
    onSave(){
        this.props.saveBlog(this.state);
        this.setInitialState();
    }
    render() {
        return (
            <Card>
                <CardHeader
                title="Add a comment"
                />
                <CardText>
                <TextField
                    id="comment-username"
                    hintText="Username"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                />
                <br />
                <TextField
                    id="comment-content"
                    hintText="Comment"
                    value={this.state.content}
                    fullWidth={true}
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    onChange={this.onChange.bind(this)}
                />
                </CardText>
                <CardActions>
                <FlatButton label="Comment" onClick={this.onSave.bind(this)}/>
                </CardActions>
            </Card>
        );
    }
}