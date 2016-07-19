import React, { PropTypes, Component } from 'react';
import { ListContainer, DocumentContainer } from "meteor/utilities:react-list-container";
import Posts from "meteor/nova:posts";

import PostsListMini from './PostsListMini.jsx';


const PostsRecomendations = ({document,currentUser}) => {

  // getDefaultView() {
  //   return {view: 'top'}
  // }


    // /packages/nova-posts/lib/views.js

    const params = {view:"top"};
    const {selector, options} = Posts.parameters.get(params);

    return (
      <ListContainer
        collection={Posts}
        publication="posts.list"
        selector={selector}
        options={options}
        terms={params}
        joins={Posts.getJoins()}
        component={PostsListMini}
        cacheSubscription={false}
        componentProps={{showHeader: false, mini:true}}
        listId="posts.list.main"
      />
    )

};

PostsRecomendations.displayName = "PostsRecomendations";

module.exports = PostsRecomendations;
