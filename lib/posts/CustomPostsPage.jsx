import React from 'react';
import { Link } from 'react-router';

import { ModalTrigger } from "meteor/nova:core";
// import Posts from "meteor/nova:posts";

import { FormattedMessage, FormattedRelative } from 'react-intl';

import Video from 'react-videojs';
import {Card, CardActions, CardMedia,CardText } from 'material-ui/Card';

import PostToolbar from './PostToolbar.jsx';
import PostsRecomendations from './PostsRecomendations.jsx';

import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';


const PostsPage = ({document, currentUser}) => {

  const post = document;
  const htmlBody = {__html: post.body};

  const renderEditPage = (
    <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
      <Telescope.components.PostsEditForm post={post}/>
    </ModalTrigger>
  );

  // {(currentUser) ?<CardActions>{renderEditPage}</CardActions>:null}




  let tUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.thumbnailUrl;
  let fUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.filmUrl;


  const styles = {
    card:{
      textAlign: 'center',
      position: 'relative',
      // backgroundColor: 'rgba(46, 62, 73, 0.23)',
      marginBottom: 16,
      // backgroundColor: 'none',
      // boxShadow: 'none',
    },
    backgroundImage:{
      backgroundImage: 'url('+tUrl+')',
      backgroundSize: 'cover',
      display: 'block',
      filter: 'blur(25px)',
      WebkitFilter: 'blur(25px)',
      height: '100%',
      left: 0,
      position: 'absolute',
      right: 0,
      zIndex: -1,
      opacity: 0.6,
    }
  };

  // const vData = '{ "aspectRatio":"640:360", "playbackRates": [1, 1.5, 2, 4], "poster": "'+{tUrl}+'"}'

  return (
    <div>
      <div style={styles.backgroundImage} className='hidden-xs'></div>

    <Grid  style={{margin: '0 auto'}}>
    <Row>
    <Col xs={12} md={8} style={{padding: 0}}>

      <Card>

        <CardMedia>
          <Video
              src={fUrl}
              type="video/mp4"
              onPlay={this.handlePlay}
              preload="auto"
              width="640px"
              height="360px"
              controls
              data-setup='{
                "aspectRatio":"640:360",
                "playbackRates": [1, 1.5, 2, 4],
                "autoplay": "true",
                "preload": "auto"
              }'
            />

        </CardMedia>

      </Card>


      <PostToolbar document={post} currentUser={currentUser}/>

      <Card
        style={styles.card}>
        <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>
      </Card>

    </Col>
    <Col xs={12} md={4}>
        <PostsRecomendations document={post} currentUser={currentUser}/>
    </Col>
    </Row>
    </Grid>
  </div>
  )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;
