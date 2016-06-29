import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';


import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;


    let postClass = "card ";
    if (post.sticky) postClass += " posts-sticky";

    if (post.color) {
      postClass += " post-"+post.color;
    }

    let UsersName = <Telescope.components.UsersName user={post.user}/>;
    let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
    let postedAt = <FormattedRelative value={post.postedAt}/>;

    return (
          <div className={postClass}>

              <Card>

                <CardMedia>
                  <Telescope.components.PostsThumbnail post={post}/>
                </CardMedia>

                <CardHeader
                  title={post.title}
                  subtitle={UsersName}
                  avatar={UsersAvatar}
                >              
              </CardHeader>

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
