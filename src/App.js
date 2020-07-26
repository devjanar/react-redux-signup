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

function mapStateToProps(state){
    return {
        state: state
    }
}

export default connect(mapStateToProps)(App);