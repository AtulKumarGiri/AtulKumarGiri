import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';



function Index(props) {

  return (
    <>
    <Home mode={props.mode}/>
    <About mode={props.mode}/>
    <Services mode={props.mode}/>
    </>
  )
}

export default Index