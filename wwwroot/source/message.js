import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Leaderboard extends React.Component {
   constructor(props) {
      super(props);
      this.state = { numHighscores: 0 };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({numHighscores: event.target.value});
   }

   render() {
      return <div>
        <h3>Top {this.state.numHighscores} Highscores</h3>
        <span className="text-primary">Num Highscores</span>: <input type="text" value={this.state.message} onChange={this.handleChange} />
      </div>;
   }
}