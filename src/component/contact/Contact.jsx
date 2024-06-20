import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""
  });

  const inputEvent=(e)=>{
    const {value,name}=e.target;

    setData((v)=>{
      return {
        ...v,
        [name]:value,
      }
    })
  }


  const forSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname}.My phone Numbar is ${data.phone} and Email is ${data.email}, Here is what I want to say ${data.msg} `)
  }

  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact US</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto">
            <form onSubmit={forSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name.." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Number.." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
