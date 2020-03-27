import React, {Component}  from 'react';
import Header from './HeaderComponents';
import Footer from './FooterComponent';
import Directory from './DirectoryComponents';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsiteInfoComponent';

//now we have local state in App not the child Directory

//directory is now presentational component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
                campsites: CAMPSITES,
                selectedCampsite: null
        };
    }

      onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

  render() {
      return (
          <div>
              <Header />
              <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}  />
              <CampsiteInfo campsite= {this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
              <Footer />
          </div>
      );
  }
}

export default Main;
