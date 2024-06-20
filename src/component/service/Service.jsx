import React from 'react'
import Card from '../card/Card';
import ApiData from '../api/Api';

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Our Service</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              { ApiData.map((val,index)=>{
                return <Card img={val.img} title={val.title} key={index}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
