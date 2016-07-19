import React from 'react';
//import { Messages } from "meteor/nova:core";
import { FormattedMessage, FormattedRelative } from 'react-intl';
// import { ModalTrigger } from "meteor/nova:core";
// import { SocialShare } from "meteor/nova:share";
import Users from 'meteor/nova:users';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
// import Badge from 'material-ui/Badge';
// import Chip from 'material-ui/Chip';
import {Tabs, Tab} from 'material-ui/Tabs';

import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { Grid, Row, Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import Avatar from 'material-ui/Avatar';


// icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import Share from 'material-ui/svg-icons/social/share';
import MusicVideo from 'material-ui/svg-icons/av/music-video';
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

import Favorite from 'material-ui/svg-icons/action/favorite';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';


const styles = {
  toolbar:{
    textAlign: 'center',
    paddingBottom: 30,
    backgroundColor: 'rgba(41, 56, 65, 0.3)',
    position: 'relative',

    // display: 'inline'
    // height:70,
    // backgroundColor: 'none',
    // boxShadow: 'none',
  },
  card:{
    textAlign: 'center',
    position: 'relative',
    marginBottom: 16,
    // backgroundColor: 'none',
    // boxShadow: 'none',
  },

  button: {
    margin: 16,
  },
  margin16:{margin: 16},

  menuRight:{
    // margin: 8,
    // float: 'right',
    display: 'inline-block',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    zIndex: 1000,

  },

  blockquote: {
    fontSize: 24,
    fontStyle: 'italic',
    // marginLeft: '24px',
    // marginRight: '24px',
    position: 'relative',
    textAlign: 'left',
    margin: '0 34px',
    border: 'none'
  },
  favorite:{
    position: 'absolute',
    right: 20,
    bottom: -40,
    margin: 14,
  }

};


const PostToolbar = ({document,currentUser}) => {

  const post = document;
  // const htmlBody = {__html: post.body};

  // const renderEditPage = (
  //   <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
  //     <Telescope.components.PostsEditForm post={post}/>
  //   </ModalTrigger>
  // );

//for storybook
  // if (currentUser=='story') {
  //   console.log('story inter')
  //   var UsersName = 'StoryBook';
  //   var UsersAvatar = 'StoryBook';
  //   var postedAt = 'StoryBook';
  //
  // }

  const avatarUrl = Users.avatar.getUrl(post.user);

  var UsersName = <Telescope.components.UsersName user={post.user}/>;
  var UsersAvatar = (
      <Avatar
              src={avatarUrl}
              size={60}
              style={{marginTop:-46}}
              />
  )
  var postedAt = <FormattedRelative value={post.postedAt}/>;



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


  if (post.body) {

    var blockquoteBody = (
      <blockquote style={styles.blockquote} className='blockquote'>
        {post.body}
      </blockquote>
    )
  }


  return (

    <div>

        <Card
          style={styles.toolbar}>


          <Row>
            <Col xs={12} md={12}>

                <CardTitle
                  title={post.title}
                  subtitle={musicName}
                  className='cartTitle'
                  titleStyle={{fontSize:40}}
                  subtitleStyle={{fontSize:20}}
                  >

                </CardTitle>


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

                  </Col>
                </Row>
            </Card>


            <Card style={styles.card} >

                      <CardHeader
                        className="CardHeader"
                        title={UsersName}
                        subtitle={postedAt}
                        avatar={UsersAvatar}
                        textStyle={{display: 'block'}}
                        showExpandableButton={true}
                        actAsExpander={true}
                        >
                      </CardHeader>

                      <CardText actAsExpander={true}>
                      {blockquoteBody}
                        {/*
                          <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
                          */}
                      </CardText>

                      <CardActions expandable={true}>

                        <Telescope.components.Vote post={post}  currentUser={currentUser}/>

                        <CardTitle
                            title={post.viewCount}
                            subtitle="views"
                            >
                          </CardTitle>
                          {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}
                          {buyHD}
                          {download}
                      </CardActions>


        </Card>

    </div>

  )
  };


PostToolbar.displayName = "PostToolbar";

module.exports = PostToolbar;
