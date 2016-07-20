import React from 'react';

import { Grid, Row, Col } from 'meteor/jimmiebtlr:react-flexbox-grid';

const CustomPostsList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

  // console.log(results);
  // console.log(ready);
  // console.log(hasMore);
  // console.log(totalCount);
  // console.log(count);

  if (!!results.length) {
    return (
      <Grid style={{margin: '0 auto'}}>
        <div className="posts-list">
        {showHeader ? <Telescope.components.PostsListHeader /> : null}
        <Row>
          {results.map(post => <Col xs={12} md={6} key={post._id}><Telescope.components.PostsItem post={post} currentUser={currentUser} key={post._id}/></Col>)}
        </Row>
        {hasMore ? (ready ? <Telescope.components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount} /> : <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
        </div>
    </Grid>
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

CustomPostsList.displayName = "CustomPostsList";

module.exports = CustomPostsList;
