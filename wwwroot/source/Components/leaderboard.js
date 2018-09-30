import React, { Component } from 'react';
import LeaderboardRow from './LeaderboardRow';

import { PageHeader } from 'react-bootstrap';


export default class Leaderboard extends Component {
   constructor(props) {
      super(props);
      this.state = {
        leaderboardData30: [
          {id: 0, name: "Jem Kegawa", points: 1337},
          {id: 1, name: "Kellenceo", points: 1000}
        ]
       };
       
      this.Update = this.Update.bind(this);
   }

   Update(name, value, id) {
    let newScores = this.state.leaderboardData30;
    newScores.append({id: id, name: name, points: value});

      this.setState({
        leaderboardData30: newScores
      });
   }

   render() {
    return <div>
      <h3>Top {this.state.leaderboardData30.length} Highscore(s)</h3>
      
      {this.state.leaderboardData30.map((c, i) => <LeaderboardRow
        key={i}
        id={c.id}
        name={c.name}
        points={c.points} />)}
    </div>
   }
}