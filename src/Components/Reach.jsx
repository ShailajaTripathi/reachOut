import React from 'react'
import './reach.css'
import reachoutImage from './reachoutImage.jpg'
function Reach() {
  return (
    //   main container
    <div className="reachout-container">

     {/* form div starts */}
        <div className="reachout-form">
        <h1 className="reachout-title">Reach out to us</h1>
        <form>
            <input className="reachout-input" type="text" placeholder="Name"/>
            <input className="reachout-input" type="text" placeholder="Phone" />
            <input className="reachout-input" type="text" placeholder="Email"/>
            <textarea className="reachout-input"
              placeholder="Type your message here"
              style={{ height: "100px" }}
            ></textarea>
            <button className="reachout-btn" type="submit">Submit</button>
        </form>
        </div>
        {/* form div ends */}

        {/* image div starts */}
        <div className="reachout-image">
<img src={reachoutImage}/>
        </div>

    </div>
  )
}

export default Reach