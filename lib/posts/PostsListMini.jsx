import React from 'react';
import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';

const PostsListMini = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

  // console.log(results);
  // console.log(ready);
  // console.log(hasMore);
  // console.log(totalCount);
  // console.log(count);

  if (!!results.length) {
    return (
      <div className="posts-list">
          {results.map(post => <Col xs={6} md={12} style={{padding: 0}} key={post._id}><Telescope.components.PostsItem post={post} currentUser={currentUser} key={post._id}/></Col>)}
      </div>
    )
  } else if (!ready) {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <Telescope.components.PostsLoading/>
      </div>
    )
  } else {
    return (
      <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <Telescope.components.PostsNoResults/>
      </div>
    )
  }

};

PostsListMini.displayName = "PostsListMini";

module.exports = PostsListMini;
