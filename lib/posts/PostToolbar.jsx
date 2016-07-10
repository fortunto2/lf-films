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
  toolbar:{
    height:70,
  },
  button: {
    margin: 12,
  }
};


const PostToolbar = ({document,currentUser,tools}) => {

  const post = document;
  const htmlBody = {__html: post.body};

  const renderEditPage = (
    <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Telescope.components.PostsEditForm post={post}/>
    </ModalTrigger>
  );

  let UsersName = <Telescope.components.UsersName user={post.user}/>;
  let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
  let postedAt = <FormattedRelative value={post.postedAt}/>;

  let tUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.thumbnailUrl;
  let fUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.filmUrl;

  let musicName= post.music.musicArtist + ' - ' + post.music.musicTitle;


  var buyHD=<RaisedButton label="Улучшить качество"  primary={true} className="hidden-xs"/>;

  var downUrl = fUrl

  if (post.proHD==true ) {
    buyHD=''
    downUrl= fUrl+'_1080.mp4'

    var download=(
      <a
        href={downUrl}
        target='_blank'
        >
        <RaisedButton
          label="Скачать HD"
          className="hidden-xs"
          style={styles.button}
          icon={<Download color={blue500} />}
          />
      </a>
    )

  }


  return (

        <div className="toolbar">
          <Toolbar  style={styles.toolbar}>
              <ToolbarGroup  firstChild={true} float="left" >

                <CardHeader
                  className="CardHeader"
                  title={UsersName}
                  subtitle={postedAt}
                  avatar={UsersAvatar}
                  >
                </CardHeader>

              </ToolbarGroup>

              <ToolbarGroup  float="right">

                  {buyHD}
                  {download}

                  <IconMenu
                      iconButtonElement={<IconButton  touch={true}><MoreVertIcon /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="Share" leftIcon={<Share />}/>
                        <MenuItem primaryText="Download" leftIcon={<Download color={blue500} />} />
                        <MenuItem primaryText="Export to Youtube" />

                          <Divider />
                            <MenuItem primaryText="Edit Video" leftIcon={<MusicVideo color={blue500} />}/>
                            <MenuItem primaryText="Edit Page" leftIcon={<MusicVideo color={blue500} />} onTouchTap={renderEditPage} />
                            <MenuItem primaryText="Delete" leftIcon={<Delete />}/>

                    </IconMenu>

              </ToolbarGroup>

            </Toolbar>
          </div>



  )
  };


PostToolbar.displayName = "PostToolbar";

module.exports = PostToolbar;
