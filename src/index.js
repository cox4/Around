import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   ,document.getElementById('root'));

serviceWorker.unregister();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' }
    //this.onClickBtn = this.onClickBtn.bind(this);
    //this.onInputChange = this.onInputChange.bind(this);
  }

  onClickBtn = () => {
    console.log(this.refs.inputs.value);
  }
  render() {
    return (
      <div>
        <input ref='inputs'/>
        <button onClick={this.onClickBtn}>Log Value</button>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
