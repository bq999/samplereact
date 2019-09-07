import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
            <div className="container">
            <div className="well well-sm">
            <h3><strong>Our  Location</strong></h3>
                </div>
                <div className="row">
                <div className="col-md-7">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.87643364539!2d-79.33967028486646!3d43.77542377911727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2f7adaf0ca7%3A0x66686c8f5cb31f48!2s2015%20Sheppard%20Ave%20E%2C%20North%20York%2C%20ON%20M2J%201W6!5e0!3m2!1sen!2sca!4v1567833357687!5m2!1sen!2sca" 
                style= {{
                    border: '0',
                    width: '100%',
                    height: '315px',
                    frameborder: '0'
                }} allowFullScreen
                ></iframe>
                </div>
                
                <div className='col-md-5'>
                <h4><strong>Contact Us</strong></h4>
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control"
                    placeholder="Name" />
                    </div>
                    <div className="form-group">
                    <input type="email" className="form-control"
                    placeholder="Email" />
                    </div>
                    <div className="form-group">
                    <input type="tel" className="form-control"
                    placeholder="Phone" />
                    </div>
                    <textarea className="form-control" cols="30" rows="3" placeholder="Message" />
                    <br />
                    <Link className="btn btn-outline-primary text-uppercase">
                    <i className="fa-paper-plane-o" aria-hidden="true"></i>
                    <i className="fab fa-telegram-plane"/>&nbsp;Send
                    </Link>
                </form>
                </div>


                </div>
                </div>

            </section>
        )
    }
}

export default Contacts;