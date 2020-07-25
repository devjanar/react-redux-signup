import React from 'react';
import Signup from './components/Signup'
import {connect} from "react-redux";

const App = () => {
  return (
      <React.Fragment>
        <Signup/>
      </React.Fragment>
  );
};

function mapState(){
  return {}
}

export default connect(mapState)(App);