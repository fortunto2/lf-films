import React from 'react';
import Video from 'react-videojs';

const PostsPage = ({document, currentUser}) => {
  
  const post = document;
  const htmlBody = {__html: post.htmlBody};

  return (
    <div className="posts-page">

      

      <Video
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
          onPlay={this.handlePlay}
        />

      <Telescope.components.HeadTags url={Posts.getLink(post)} title={post.title} image={post.thumbnailUrl} />
      
      {/*<Telescope.components.PostsItem post={post}/>*/}

      <div className="posts-page-body" dangerouslySetInnerHTML={htmlBody}></div>

      {/*<SocialShare url={ Posts.getLink(post) } title={ post.title }/>*/}

      <Telescope.components.PostsCommentsThread document={post} currentUser={currentUser}/>

    </div>
  )
};

PostsPage.displayName = "PostsPage";

module.exports = PostsPage;
export default PostsPage;