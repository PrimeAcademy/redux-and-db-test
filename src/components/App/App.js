import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import FeedbackSubmitted from '../FeedbackSubmitted/FeedbackSubmitted';
import Admin from '../Admin/Admin';


class App extends Component {

  render() {
    // const { classes } = this.props;

    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/feedback-review" component={FeedbackReview} />
            <Route exact path="/submitted" component={FeedbackSubmitted} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>

        {/* <FeedbackReview /> */}
      </div>

    );
  }
}

export default App;

