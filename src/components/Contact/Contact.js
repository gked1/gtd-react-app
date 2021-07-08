import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LikeDislike from '../LikeDislike/LikeDislike';
import '../../styles/main.css';

function Contact () {
    return (
      <div>
        <div class="wrapper-up-footer">
          <img src={require('../../media/gtd_logo.png')}  alt="gtd."/>
        </div>
        <div class="wrapper-up">
          <h1>Hello, we’re gtd.</h1>
        </div>
        <div className='wrapper-middle'>
          <div>
            <h1 className='how-it-started'>Contact us </h1>
            <p className='thick'>To be updated</p>
            <p className='thick-opacity'>To be updated</p>
            <p className='thick-opacity-2'>To be updated</p>
          </div>
          <div className='feedback'>
           <p></p>
           {/* <LikeDislike /> */}
          </div>
        </div>
        <div className='wrapper-down'>
          <div>
            <h4 className='font-header'>Team</h4>
            <p className='thin'>Lisa</p>
            <p className='thin'>Danielle</p>
            <p className='thin'>Brian</p>
            <p className='thick-join-us'>Join us!</p>
          </div>
          <div>
            <h4 className='font-header'>Learn more</h4>
            <p className='thin'>Manifesto</p>
            <p className='thin'>Works</p>
            <p className='thin'>Stories</p>
          </div>
          <div>
            <h4 className='font-header'>Meet us</h4>
            <p className='thin'>Studio</p>
            <p className='thin'>Community</p>
            <p className='thin'>Workshops</p>
          </div>
          <div>
            <h4 className='font-header'>Contact</h4>
            <p className='thin'>Twitter</p>
            <p className='thin'>Facebook</p>
            <p className='thin'>Instagram</p>
          </div>
        </div>
      </div>
    );
}

export default Contact;
