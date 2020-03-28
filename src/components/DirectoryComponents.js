import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            {/* here we made a dynamic link for each object, giving it its directory path */}
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );

}

//this is the structure for a basic class component with constructor//
function Directory(props) {

        //an array of elements in here affected by map//
        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} />
                </div>
            );
        });

        //this is where we send data back to the parent component. top level return
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {directory} 
                </div>
                {/* <ExampleParentComponent /> */}

            </div>
        );

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