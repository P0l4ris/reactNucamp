import React, {Component}  from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//now we have local state in App not the child Directory
class App extends Component {

  render() {
      return (
        <BrowserRouter>
            <div className="App">
                <Main />  
            </div>
          </BrowserRouter>
      );
  }
}

export default App;
