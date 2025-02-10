import React from 'react'
import '../index.css'
import Button from './Button'
const ContactForm = () => {
return (
<div className='form-container'>
    <div className="fields">
        <input type="text" className="form-control"  placeholder="Name"/>
    </div>
    <div className="fields">
        <input type="email" className="form-control"  placeholder="Email"/>
    </div>
    <div className="fields">
        <textarea className="form-control" rows="7" placeholder='Write message here.....'></textarea>
    </div>
    <div className="fields-btn">
        <Button>Submit</Button>
    </div>

</div>
)
}

export default ContactForm