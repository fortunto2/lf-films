import React from 'react';
import { ListContainer } from "meteor/utilities:react-list-container";
import Categories from "meteor/nova:categories";

import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';


const PostsListHeader = () => {

  return (
    <div>
      <Row>
        <Col xs >
          <ListContainer
            collection={Categories}
            limit={0}
            resultsPropName="categories"
            component={Telescope.components.CategoriesList}
            listId="categories"
          />
        </Col>
      </Row>
      <Row>
        <Col xs >
          <Telescope.components.PostsViews />
        </Col>
      </Row>
      <Row>
        <Col xs >
          <Telescope.components.SearchForm/>
        </Col>
      </Row>
    </div>
  );
};

PostsListHeader.displayName = "PostsListHeader";

module.exports = PostsListHeader;
export default PostsListHeader;
