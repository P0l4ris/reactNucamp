import React, {Component}  from 'react';
import Main from './components/MainComponent';
import './App.css';

//now we have local state in App not the child Directory
class App extends Component {

  render() {
      return (
          <div className="App">
                <Main />  
          </div>
      );
  }
}

export default App;
