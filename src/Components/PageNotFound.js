import React from 'react'
import {Link} from 'react-router-dom'
export default function PageNotFound() {
  return (
    <>
        <div className="container text-center" style={{margin: "10%"}}> 
            <h2>404</h2>
            <h3>Oops, nothing here...</h3>
            <p>Please Check the URL</p>
            <p>Otherwise, <Link to="/crud">Click here</Link> to redirect to homepage.</p>
        </div>
    </>
  )
}
