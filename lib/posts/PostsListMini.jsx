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
      <Row>
          {results.map(post => <Col xs={12} sm={6} md={12} key={post._id}><Telescope.components.PostsItem post={post} currentUser={currentUser} /></Col>)}
      </Row>
    )
  } else if (!ready) {
    return (
      <Row>
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <Telescope.components.PostsLoading/>
      </Row>
    )
  } else {
    return (
      <Row>
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
          <Telescope.components.PostsNoResults/>
      </Row>
    )
  }

};

PostsListMini.displayName = "PostsListMini";

module.exports = PostsListMini;
