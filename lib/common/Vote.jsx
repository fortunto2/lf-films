import React, { PropTypes, Component } from 'react';
//import Actions from "../actions.js";
//import { Messages } from "meteor/nova:core";
import classNames from 'classnames';
import Users from 'meteor/nova:users';
// import Events from 'meteor/nova:events';

import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';

class Vote extends Component {

  constructor() {
    super();
    this.upvote = this.upvote.bind(this);
  }

  upvote(e) {
    e.preventDefault();

    const post = this.props.post;
    const user = this.context.currentUser;

    if(!user){
      this.context.messages.flash("Please log in first");
    } else if (user.hasUpvoted(post)) {
      this.context.actions.call('posts.cancelUpvote', post._id, function(){
        this.context.events.track("post upvote cancelled", {'_id': post._id});
      });
    } else {
      this.context.actions.call('posts.upvote', post._id, function(){
        this.context.events.track("post upvoted", {'_id': post._id});
      });
    }

  }

  render() {

    const post = this.props.post;
    const user = this.context.currentUser;

    const hasUpvoted = Users.hasUpvoted(user, post);
    const hasDownvoted = Users.hasDownvoted(user, post);
    const actionsClass = classNames(
      "vote",
      {voted: hasUpvoted || hasDownvoted},
      {upvoted: hasUpvoted},
      {downvoted: hasDownvoted}
    );

    return (

        <div>
        <IconButton tooltip="likes" touch={true}
          primary={true}
          onClick={this.upvote}
          >
             <ActionFavorite />
           </IconButton>
           {post.baseScore || 0}
         </div>

    );
  }

}

Vote.propTypes = {
  post: React.PropTypes.object.isRequired, // the current post
  // currentUser: React.PropTypes.object, // the current user
};

Vote.contextTypes = {
  currentUser: React.PropTypes.object,
  actions: React.PropTypes.object,
  events: React.PropTypes.object,
  messages: React.PropTypes.object
};

module.exports = Vote;
export default Vote;
