import React, { Component, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LikeDislike from '../LikeDislike/LikeDislike';
import { Tooltip } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import { Button, Row, Col } from 'reactstrap';
import '../../styles/main.css';

function Home () {
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
          <h1 className='how-it-started'>How it started </h1>
          <p className='thick'>Couple of years ago group of colleagues tried to realize idea on which they thought over for a long time. After months of discussions and considering both pros and cons they decided at last to come from idea to realization. Frankly speaking, it was not the only idea they thought over, but it was prospective, and they hoped it will give them a chance to get on the market with fresh idea and acquire some interesting clients.</p>
        </div>
        <div className='feedback'>
          <p><span data-tip=' ' data-for={'dataTip'}>Give us feedback</span></p>
          <ReactTooltip id={'dataTip'} className='tooltip' place='top'>
            Share with us your opinion
          </ReactTooltip>
          <LikeDislike />
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

export default Home;




