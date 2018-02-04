import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';



export default class comment extends Component {
    static propTypes = {
        username: PropTypes.string,
        content: PropTypes.string
    }

    render() {
        return (
            <Card>
                <CardHeader title={`User: ${this.props.username}.`}/>
                <CardText >
                {
                    this.props.content
                }
                </CardText>          
            </Card>
        );
    }
}
