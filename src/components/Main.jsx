import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';

import Ref from './Ref.jsx';
import ParentAndChildren from './ParentAndChildren.jsx';
import NameSpace from './NameSpace.jsx';
import ComponentInContainer from '../redux/containers/containers.js';

function Main() {
  return (
    <div className="App">

      {/* <hr> */}
      <h1>React stuff</h1>
      <h2>React + redux playground</h2>

      <Ref />

      <ParentAndChildren>
        <p>Child 01</p>
        <p>Child 02</p>
        <p>Child 03</p>
      </ParentAndChildren>

      <NameSpace>
        <NameSpace.Body>
          <NameSpace.Title>Title</NameSpace.Title>
        </NameSpace.Body>
      </NameSpace>

      <ComponentInContainer />
    </div>
  );

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> 

}

export default Main;
