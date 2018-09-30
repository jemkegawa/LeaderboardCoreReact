import React, { Component } from 'react';
import Leaderboard from './Components/leaderboard';

import { PageHeader } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeader: 'Leaderboard'
        };

        this.UpdatePageHeader = this.UpdatePageHeader.bind(this);
    }

    UpdatePageHeader(newPageHeader) {
        this.setState({
            pageHeader: newPageHeader
        });
    }

    render() {
        return <div>
            <PageHeader>{this.state.pageHeader}</PageHeader>
            <Leaderboard />
        </div>
    }
}

module.hot.accept();
