import React, {Component}  from 'react';
import Directory from './DirectoryComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
//imported react router dom. brains of our router
import { Switch, Route, Redirect } from 'react-router-dom';


//now we have local state in App not the child Directory

//directory is now presentational component

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
                campsites: CAMPSITES,
                comments: COMMENTS,
                partners: PARTNERS,
                promotions: PROMOTIONS,
        };
    }

  render() {
        const HomePage = () => {
            return (
                <Home           
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                 />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
                />
            );
        };


      return (
          <div>
              <Header />
              <Switch>
                  <Route path='/home' component={HomePage} />
                  <Route exact path ='/directory' render={() => <Directory campsites={this.state.campsites} /> } />
                  {/* this colon stores what comes after directory as a parameter in an object called campsiteId..it's like a tracker. part of the route components state "match". Match's object gets passed as a prop for the object CampsiteWithId line:40*/}
                  <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                  <Route exact path='/contactus' component={Contact} />
                  <Route to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;