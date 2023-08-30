import React from 'react'

function Achievements(props) {
  let myStyle = {
    color: props.mode === 'dark'?'white':'#101010',
    backgroundColor: props.mode ==='dark'?'#101010':'white'
  }

  return (
    <div className="container about-page-container d-flex align-items-center justify-content-center">
        <div className="aboutPageContainer text-center">
            <div className="heading">
                <h1 style={myStyle}>Achievements</h1>
                <span></span>
            </div>
            <div className="container">

            </div>
        </div>
    </div>
  )
}

export default Achievements