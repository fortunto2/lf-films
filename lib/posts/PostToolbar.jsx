import React from 'react';
//import { Messages } from "meteor/nova:core";
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { ModalTrigger } from "meteor/nova:core";
// import { SocialShare } from "meteor/nova:share";

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
    // backgroundColor: 'none',
    // boxShadow: 'none',
    display: 'inline'
  },
  button: {
    margin: 16,
  },
  margin16:{margin: 16},
  menuRight:{
    margin: 8,
    float: 'right',
  },
  textRight:{
    textAlign: 'right'
  },

};


const PostToolbar = ({document,currentUser}) => {

  const post = document;
  // const htmlBody = {__html: post.body};

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


  var buyHD=<RaisedButton style={styles.button} label="Улучшить качество"  primary={true} className='hidden-xs'/>;

  var downUrl = fUrl

  if (post.proHD==true ) {
    buyHD=''
    downUrl= fUrl+'_1080.mp4'

    var download=(
      <a
        href={downUrl}
        target='_blank'
        className="hidden-xs"
        >
        <RaisedButton
          label="Скачать HD"

          style={styles.button}
          icon={<Download color={blue500} />}
          />
      </a>
    )

  }


  return (

        <Card
          style={styles.toolbar}>


          <div className="row">
            <div className="col-sm-8 col-md-8 col-xs-8">

              <CardTitle
                title={post.title}
                subtitle={musicName}
                >

              </CardTitle>

              </div>
              <div className="col-sm-4 col-md-4 col-xs-4" style={styles.textRight}>

                  {buyHD}
                  {download}

                  <IconMenu
                      style={styles.menuRight}
                      iconButtonElement={<IconButton  touch={true}><MoreVertIcon /></IconButton>}
                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                      targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="Share" leftIcon={<Share />}/>
                        <MenuItem primaryText="Download" leftIcon={<Download color={blue500} />} />
                        <MenuItem primaryText="Export to Youtube" />

                          <Divider />
                            <MenuItem primaryText="Edit Video" leftIcon={<MusicVideo color={blue500} />}/>
                            <MenuItem primaryText="Edit Page" leftIcon={<MusicVideo color={blue500} />}  />
                            <MenuItem primaryText="Delete" leftIcon={<Delete />}/>

                    </IconMenu>

                  </div>
              </div>



              <div className="row">
                <div className="col-sm-8 col-xs-8">

                      <CardHeader
                        className="CardHeader"
                        title={UsersName}
                        subtitle={postedAt}
                        avatar={UsersAvatar}
                        >
                      </CardHeader>

                      <CardText>
                        <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
                        {post.body}
                          {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}
                      </CardText>

                  </div>
                  <div className="col-sm-2 col-xs-2" style={styles.textRight}>

                    <Telescope.components.Vote post={post}  currentUser={currentUser}/>

                  </div>
                  <div className="col-sm-2 col-xs-2">

                      <CardTitle
                        style={styles.textRight}
                        title={post.viewCount}
                        subtitle="views"
                        >
                      </CardTitle>

                  </div>
                </div>


        </Card>

  )
  };


PostToolbar.displayName = "PostToolbar";

module.exports = PostToolbar;
