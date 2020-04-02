import React, {Component}  from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

//callback the redux store
const store = ConfigureStore();

//now we have local state in App not the child Directory
class App extends Component {

  render() {
      return (
        //here <Provider> returns the redux sore to all children of App
        <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Main />  
            </div>
          </BrowserRouter>
        </Provider>  
      );
  }
}

export default App;
