import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
    <section id='header' className='d-flex align-items-center'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> {props.name} <strong className="brand-name">WebSites</strong></h1>
                <h2 className='my-3'>We are the team of talented developer making websites</h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className='btn btn-outline-primary btn-lg'>{props.btname}</NavLink>
                </div>
              </div>
              <div className="col-md-6 order-2 order-lg-1 header-img mt-5 ml-5">
                <img src={props.img} className='img-fluid animated' alt="Common img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Common;
