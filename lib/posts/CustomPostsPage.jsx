import React from 'react';
import { Link } from 'react-router';

import { ModalTrigger } from "meteor/nova:core";
import { FormattedMessage, FormattedRelative } from 'react-intl';

import Video from 'react-videojs';
import {Card, CardActions, CardMedia } from 'material-ui/Card';

import PostToolbar from './PostToolbar.jsx';
import PostMain from './PostMain.jsx';


const PostsPage = ({document, currentUser}) => {

  const post = document;

  const renderEditPage = (
    <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Telescope.components.PostsEditForm post={post}/>
    </ModalTrigger>
  );


  let tUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.thumbnailUrl;
  let fUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.filmUrl;



  return (
    <div className="posts-page">

      <Card>

        <CardMedia>
          <Video
              src={fUrl}
              type="video/mp4"
              onPlay={this.handlePlay}
              poster={tUrl}
              width="640px"
              height="360px"
              controls
              data-setup='{ "aspectRatio":"640:360", "playbackRates": [1, 1.5, 2] }'
            />

        </CardMedia>

          <PostToolbar document={post}/>
          <PostMain document={post}/>

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
