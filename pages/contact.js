import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:3000/aqpi/contact/',
      headers: {},
      data: formData
    }).then(res => {
      toast.success("Data submited Successfully !!!")
    }).catch(err => {
      toast.error(err.toString())
    })

  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <div className='mx-auto w-50 mt-5'>
        <h1 className='text-center'>Contact US</h1>
        <hr />
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control value={formData.name} onChange={handleChange} name='name' type="text" placeholder="Enter Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={formData.email} onChange={handleChange} name='email' type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={formData.phone} onChange={handleChange} name='phone' type="tel" placeholder="Enter phone" required />
          </Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            name='message'
            value={formData.message}
            onChange={handleChange}
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: '100px' }}
            required
          />


          <Button className='my-3' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Contact
