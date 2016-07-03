import React from 'react';

import { ModalTrigger } from "meteor/nova:core";
import { FormattedMessage, FormattedRelative } from 'react-intl';

import Video from 'react-videojs';

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
  },
};


const PostsPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.htmlBody};

  const renderEditPage = (
    <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Telescope.components.PostsEditForm post={post}/>
    </ModalTrigger>
  );


  let UsersName = <Telescope.components.UsersName user={post.user}/>;
  let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
  let postedAt = <FormattedRelative value={post.postedAt}/>;

  return (
    <div className="posts-page">

      <Card>

        <CardMedia>
          <Video
              src={post.filmUrl}
              type="video/mp4"
              onPlay={this.handlePlay}
              poster={post.thumbnailUrl}
              width="640px"
              height="360px"
              controls
              data-setup='{ "aspectRatio":"640:360", "playbackRates": [1, 1.5, 2] }'
            />

        </CardMedia>

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
                    <RaisedButton label="Улучшить качество" primary={true} />

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

            <div className="row">
              <div className="col-sm-8">
                <CardTitle
                  title={post.title}
                  subtitle="Music: Как хорошо жить на руси"
                  >

                </CardTitle>
              </div>
              <div className="col-sm-4 v-align">
                <Telescope.components.Vote post={post} currentUser={currentUser}/>

                <FlatButton
                  label="1 000 000"
                  className='pull-right'
                  linkButton={false}
                  icon={<Favorite color={blue500} style={styles.medium} />}
                  />

                <FlatButton
                  label="1 000 000"
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
              <CardActions>
                {(currentUser) ?<Telescope.components.PostsStats post={post} />:null}
                {renderEditPage}


              </CardActions>

      </Card>


      <Card>
        <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>
      </Card>

    </div>
  )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;
