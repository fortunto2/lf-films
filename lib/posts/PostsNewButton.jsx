import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { ModalTrigger } from "meteor/nova:core";

import IconButton from 'material-ui/IconButton';
import MovieFilter from 'material-ui/svg-icons/image/movie-filter';

const CustomPostsNewButton = (props, context) => {

  const size = context.currentUser ? "large" : "small";
  const button = (
    <IconButton tooltip={<FormattedMessage id="posts.new_post"/>} touch={true} tooltipPosition="bottom-left">
      <MovieFilter />
    </IconButton>
  );

  return (
    <ModalTrigger size={size} title={context.intl.formatMessage({id: "posts.new_post"})} component={button}>
      <Telescope.components.PostsNewForm/>
    </ModalTrigger>
  );
};

CustomPostsNewButton.displayName = "CustomPostsNewButton";

CustomPostsNewButton.contextTypes = {
  currentUser: React.PropTypes.object,
  messages: React.PropTypes.object,
  intl: intlShape
};

module.exports = CustomPostsNewButton;
export default CustomPostsNewButton;
