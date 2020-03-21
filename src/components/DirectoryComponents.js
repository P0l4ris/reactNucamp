import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

//this is the structure for a basic class component with constructor//
class Directory extends Component {
    constructor(props) {
        super(props);
        //importing array from another file in app.js this state was up to or "lifting state" from here Directory to App (parent)
        this.state = {
            //here we add an click event
            selectedCampsite: null
        };
    }
    //changes state of campsite to selectedCampsite?
    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }



    render() {
        //an array of elements in here affected by map//
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    {/* here we pass the campsiteSelect(campsite is every specific card) as a function when onclick */}
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        //this is where we send data back to the parent component. top level return
        return (
            <div className="container">
                <div className="row">
                    {directory} 
                </div>
                {/* <ExampleParentComponent /> */}
                <CampsiteInfo campsite= {this.state.selectedCampsite} />
            </div>
        );
    }
}

export default Directory;



// class ExampleParentComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             number: 333
//         }
//     }
//     render() {
//         //greeting here is an added state and prop is a read only in any child class
//         return <ExampleChildComponent number={this.state.number} greeting="Hello" />;
//     }
// }
// //this is going to not have a state or constructor as a child class. uses props to refer back to the parent class
// class ExampleChildComponent extends Component {
//     render() {
//         return <div>{this.props.number} {this.props.greeting}</div>
//     };
// }

// export default Directory;