import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';


const initial = {
  username: "",
  title: "",
  content: ""
};
export default class CreateBlog extends Component {
  static propTypes = {
    saveBlog: PropTypes.func,
}
  constructor(props) {
    super(props);
    this.state = initial;
  }

  onChange(ev, nV) {
    switch (ev.target.id) {
      case "blog-title":
        this.setState({
          title: nV
        });
        break; 
      case "blog-username":
        this.setState({
          username: nV
        });
        break;
      case "blog-content":
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
          title="Create your blog entry"
        />
        <CardText>
          <TextField
            id="blog-title"
            value={this.state.title}
            fullWidth={true}
            hintText="Title"
            onChange={this.onChange.bind(this)}
          />
          <br />
          <br />
          <TextField
            id="blog-username"
            hintText="Username"
            value={this.state.username}
            onChange={this.onChange.bind(this)}
          />
          <br />
          <br />
          <TextField
            id="blog-content"
            hintText="Blogs content"
            value={this.state.content}
            fullWidth={true}
            multiLine={true}
            rows={2}
            rowsMax={4}
            onChange={this.onChange.bind(this)}
          />
        </CardText>
        <CardActions>
          <FlatButton label="Save" onClick={this.onSave.bind(this)} primary={true}/>
        </CardActions>
      </Card>
    );
  }
}
