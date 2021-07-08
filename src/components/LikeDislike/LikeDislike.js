import React, { Component } from 'react';
import '../../styles/main.css';
import './LikeDislike.css';

const reduceOne = (prevState, groupName, otherGroupName) => {
  prevState[groupName].wasClicked
    ? prevState[groupName].count = prevState[groupName].count - 1
    : prevState[groupName].count = prevState[groupName].count + 1;
  prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
  
  if (prevState[otherGroupName].wasClicked) {
    prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
    prevState[otherGroupName].wasClicked = false;
  }
  return prevState;
};

const reducer = action =>
  (prevState, props) =>
    action.type === "TOGGLE_LIKE"
      ? reduceOne(prevState, "like", "dislike")
      : reduceOne(prevState, "dislike", "like");

class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: {
        count: 0,
        wasClicked: false,
        wasClickedLikeStyle: false
      },
      dislike: {
        count: 0,
        wasClicked: false,
        wasClickedDislikeStyle: false
      },
    };
  }

  handleToggleLike = () => { 
    this.setState(reducer({ type: "TOGGLE_LIKE" })); 
    this.setState({
      wasClickedLikeStyle: !this.state.wasClickedLikeStyle,
      wasClickedDislikeStyle: !this.state.wasClickedLikeStyle && this.state.wasClickedDislikeStyle &&
                               this.state.wasClickedLikeStyle && !this.state.wasClickedDislikeStyle })
  };
  handleToggleDislike = () => { 
    this.setState(reducer({ type: "TOGGLE_DISLIKE" })); 
    this.setState({
      wasClickedDislikeStyle: !this.state.wasClickedDislikeStyle,
      wasClickedLikeStyle: !this.state.wasClickedDislikeStyle && this.state.wasClickedLikeStyle &&
                            this.state.wasClickedDislikeStyle && !this.state.wasClickedLikeStyle })
  };

  render() {
    let likeButtonClass = this.state.wasClickedLikeStyle ? "button-activated" : "button-deactivated";
    let dislikeButtonClass = this.state.wasClickedDislikeStyle ? "button-activated" : "button-deactivated";
    return (       
      <div className='wrapper-icons'>
        {/* <button className={likeButtonClass} onClick={this.handleToggleLike}>Like | {this.state.like.count} </button>
        <button className={dislikeButtonClass} onClick={this.handleToggleDislike}>Dislike | {this.state.dislike.count}</button> */}
        <div className={likeButtonClass} style={{cursor: 'auto'}}>
          {this.state.wasClickedLikeStyle 
            ? <img className='resize-like' src={require('../../media/likeIconActive.jpg')} onClick={this.handleToggleLike} /> 
            : <img className='resize-like' src={require('../../media/likeIconDisactive.jpg')} onClick={this.handleToggleLike} />} 
          {this.state.like.count} 
        </div>
        <div className={dislikeButtonClass} style={{cursor: 'auto'}}>
          {this.state.wasClickedDislikeStyle 
            ? <img className='resize-dislike' src={require('../../media/likeIconActive.jpg')} onClick={this.handleToggleDislike} /> 
            : <img className='resize-dislike' src={require('../../media/likeIconDisactive.jpg')} onClick={this.handleToggleDislike} />} 
          {this.state.dislike.count}
        </div>
      </div>
    );
  }
}

export default LikeDislike;