import React, {Component}  from 'react';
import Directory from './DirectoryComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
//transferring state to the redux store; no longer here
import { connect } from 'react-redux';
// import { CAMPSITES } from '../shared/campsites';
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';


//imported react router dom. brains of our router



//main component is a container and all these objects rendered here are children presentational component

//in here, we pass state from redux as props
const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

class Main extends Component {
  

  render() {
        const HomePage = () => {
            return (
                <Home           
                    campsite={this.props.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                 />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} 
                />
            );
        };


      return (
          <div>
              <Header />
              <Switch>
                  <Route path='/home' component={HomePage} />
                  <Route exact path ='/directory' render={() => <Directory campsites={this.props.campsites} /> } />
                  {/* this colon stores what comes after directory as a parameter in an object called campsiteId..it's like a tracker. part of the route components state "match". Match's object gets passed as a prop for the object CampsiteWithId line:40*/}
                  <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                  <Route exact path='/contactus' component={Contact} />
                  <Route exact path='/aboutus' render ={() => <About partners={this.props.partners} /> } />
                  <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

//react router to work with changes to the export?
export default withRouter(connect(mapStateToProps)(Main));
