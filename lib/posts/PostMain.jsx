import React from 'react';
//import { Messages } from "meteor/nova:core";
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { ModalTrigger } from "meteor/nova:core";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
// import Badge from 'material-ui/Badge';
// import Chip from 'material-ui/Chip';
// import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Share from 'material-ui/svg-icons/social/share';
import MusicVideo from 'material-ui/svg-icons/av/music-video';
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const styles = {
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  }
};

const PostMain = ({document,currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.body};


  let UsersName = <Telescope.components.UsersName user={post.user}/>;
  let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
  let postedAt = <FormattedRelative value={post.postedAt}/>;


  let musicName= post.music.musicArtist + ' - ' + post.music.musicTitle;



  return (

      <div>

            <div className="row">
              <div className="col-sm-8">
                <CardTitle
                  title={post.title}
                  subtitle={musicName}
                  >

                </CardTitle>
              </div>
              <div className="col-sm-4 v-align">
                <Telescope.components.Vote post={post} currentUser={currentUser}/>

                <FlatButton
                  label={post.clickCount}
                  className='pull-right'
                  linkButton={false}
                  icon={<Favorite color={blue500} style={styles.medium} />}
                  />

                <FlatButton
                  label={post.viewCount}
                  className='pull-right'
                  linkButton={false}
                  icon={<Eye color={blue500} style={styles.medium} />}
                  />
              </div>
            </div>


            <CardText>
              <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
              <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>
                {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}
            </CardText>

        </div>


  )
  };


PostMain.displayName = "PostMain";

module.exports = PostMain;
