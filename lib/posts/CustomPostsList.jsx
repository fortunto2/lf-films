import React from 'react';

import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';

const CustomPostsList = ({results, currentUser, hasMore, ready, count, totalCount, loadMore, showHeader = true}) => {

  // console.log(results);
  // console.log(ready);
  // console.log(hasMore);
  // console.log(totalCount);
  // console.log(count);


  if (!!results.length) {
    return (
      <Grid style={{margin: '0 auto'}}>
        <Row>
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
        </Row>
        <Row>
          {results.map(post => <Col xs={12} md={6} key={post._id}><Telescope.components.PostsItem post={post} currentUser={currentUser} key={post._id}/></Col>)}
          {hasMore ? (ready ? <Telescope.components.PostsLoadMore loadMore={loadMore} count={count} totalCount={totalCount} /> : <Telescope.components.PostsLoading/>) : <Telescope.components.PostsNoMore/>}
        </Row>
    </Grid>
    )
  } else if (!ready) {
    return (
      <Grid style={{margin: '0 auto'}}>
        <Row>
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
        </Row>
        <Row>
          <Col xs >
              <Telescope.components.PostsLoading/>
            </Col>
          </Row>
      </Grid>
    )
  } else {
    return (
      <Grid style={{margin: '0 auto'}}>
        <Row>
          {showHeader ? <Telescope.components.PostsListHeader /> : null}
        </Row>
        <Row>
          <Col xs >
            <Telescope.components.PostsNoResults/>
          </Col>
        </Row>
      </Grid>
    )
  }

};

CustomPostsList.displayName = "CustomPostsList";

module.exports = CustomPostsList;
