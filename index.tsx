import React, { Component } from 'react';
import { render } from 'react-dom';
import { observer, useObserver } from 'mobx-react-lite';
//import Hello from './Hello';
import './style.css';


const App = () => {

    return (
      <div>
      /*
        // <Hello name={this.state.name} />
        */
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
