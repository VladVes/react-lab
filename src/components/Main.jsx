import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';

import Ref from './Ref.jsx';
import ParentAndChildren from './ParentAndChildren.jsx';
import NameSpace from './NameSpace.jsx';
import ComponentInContainer from '../redux/containers/containers.js';
import DropDown from './select/Dropdown';

const options = [
  { label: 'AAA', options: [{ label: 'a1', value: 'a1'}, { label: 'a2', value: 'a2'}, { label: 'a3', value: 'a3'} ] },
  { label: 'BBB', options: [{ label: 'b1', value: 'b1'}, { label: 'b2', value: 'b2'}, { label: 'b3', value: 'b3'} ] },
  { label: 'CCC', options: [{ label: 'c1', value: 'c1'}, { label: 'c2', value: 'c2'}, { label: 'c3', value: 'c3'} ] },
  { label: 'DDD', options: [{ label: 'd1', value: 'd1'}, { label: 'd2', value: 'd2'}, { label: 'd3', value: 'd3'} ] },
];

function Main() {
  return (
    <div className="App">
      <h1>React stuff playground</h1>

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

      <hr />
      <h3>React-select</h3>
        <DropDown requestsCompleted options={options} /> 

      <hr />

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
