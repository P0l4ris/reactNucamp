import React, {Component}  from 'react';
import Directory from './DirectoryComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import { CAMPSITES } from '../shared/campsites';
//imported react router dom. brains of our router
import { Switch, Route, Redirect } from 'react-router-dom';


//now we have local state in App not the child Directory

//directory is now presentational component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
                campsites: CAMPSITES,
        };
    }

  render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
      return (
          <div>
              <Header />
              <Switch>
                  <Route path='/home' component={HomePage} />
                  {/* here we use the boolean exact and routes are like case in switch*/}
                  <Route exact path ='/directory' render={() => <Directory campsites={this.state.campsites} /> } />
                  <Route to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
