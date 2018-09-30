import React, { Component } from 'react';

import { Image, Badge } from 'react-bootstrap';

export default class LeaderboardRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Badge style={{fontSize: 2 + 'em'}}>{this.props.name}</Badge> <Badge style={{fontSize: 2 + 'em'}}>{this.props.points}</Badge>
        </div>
    }
}
