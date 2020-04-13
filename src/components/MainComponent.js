//main component is a container and all these objects rendered here are children presentational component

import React, {Component}  from 'react';
import Directory from './DirectoryComponents';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { postComment, fetchCampsites, fetchComments, fetchPromotions, fetchPartners, postFeedback } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux';
//transferring state to the redux store; no longer here
// import { CAMPSITES } from '../shared/campsites';
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';


//imported react router dom. brains of our router









//these mapping functions create a new state to pass.....//


//imported above, sent to page components; the action creators are in => and are now available to Main as props

const mapDispatchToProps = {
    postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    fetchCampsites: () => (fetchCampsites()),
    //i think actions.reset saves state and then resets on submission
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions()),
    fetchPartners: () => (fetchPartners()),
    postFeedback: (firstName, lastName, phoneNum, email, agree, contactType, message, feedback) => (postFeedback(firstName, lastName, phoneNum, email, agree, contactType, message, feedback))
};

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
    //react method part of lifecycle. loaded, updates, and removed from DOM a good place to load at. these three are good
    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

  render() {
        const HomePage = () => {
            return (
                <Home        //campsites holds more than an array now. loading
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}

                    partnersLoading={this.props.partners.isLoading}
                    partnersErrMess={this.props.partners.errMess}
                    partner={this.props.partners.partners.filter(partner => partner.featured)[0]}

                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}


                   
                 />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    isLoading={this.props.campsites.isLoading} //why need these 2
                    errMess={this.props.campsites.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                    //passed props with mapDispatch below to CampsiteInfo
                />
            );
        };

        // these paths are either components with props(contact, aboutus) or just functions such as {homepage}. pass the information accordingly
      return (
          <div>
              <Header />
              <TransitionGroup>
                  {/* the key is for route's key and className'S' looks to apply transitions with whatever word is its value 'page' in CSS its a link*/}
                  <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path ='/directory' render={() => <Directory campsites={this.props.campsites} /> } />
                            {/* this colon stores what comes after directory as a parameter in an object called campsiteId..it's like a tracker. part of the route components state "match". Match's object gets passed as a prop for the object CampsiteWithId line:40*/}
                            <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                            <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} /> } />


                            <Route exact path='/aboutus' render ={() => <About partners={this.props.partners} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
              <Footer />
          </div>
      );
  }
}

//react router to work with changes to the export?
//withRouter is routing; connect is state mapping + action mapping as a prop on this page where it doesn't exist as local state. I made both of these here up above. these changes go to the redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
