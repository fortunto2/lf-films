import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
// import { Button } from 'react-bootstrap';
import moment from 'moment';
// import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import PostMiniToolbar from './PostMiniToolbar.jsx';

// import {
//   cyan500, cyan700,
//   tealA200,
//   grey100, grey300, grey400, grey500,grey700,
//   white, darkBlack, fullBlack
// } from 'material-ui/styles/colors';


class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;
    const simple = true


    let postClass = "card ";
    if (post.sticky) postClass += " posts-sticky";

    if (post.color) {
      postClass += " post-"+post.color;
    }

    let UsersName = <Telescope.components.UsersName user={post.user}/>;
    // let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
    // let postedAt = <FormattedRelative value={post.postedAt}/>;


    const styles = {
      overlay: {
        height: '100%',
      },
      content: {
        padding: 16,
        position: 'absolute',
        bottom: 0,
      },
      title : {
        color: '#ffffff'
      }
    };

    let title = (
      <Link
        to={Posts.getLink(post)}
        style={styles.title}
      >{post.title}
      </Link>
    )

    return (
          <div className={postClass}>

              <Card>

                <CardMedia
                  overlayContentStyle={styles.overlay}
                  overlay={
                    <CardTitle
                      style={styles.content}
                      title={title}
                      subtitle={UsersName}
                    />}
                    >
                  <Telescope.components.PostsThumbnail post={post}/>
                </CardMedia>

              </Card>

          </div>
    )
  }
};

CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;
