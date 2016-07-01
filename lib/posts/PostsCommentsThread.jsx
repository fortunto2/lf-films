import React from 'react';
import {FormattedMessage } from 'react-intl';
import { ListContainer } from "meteor/utilities:react-list-container";
import { ModalTrigger } from "meteor/nova:core";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const PostsCommentsThread = ({document, currentUser}) => {

  const post = document;

  return (
    <div className="posts-comments-thread">
      <CardTitle title={<FormattedMessage id="comments.comments"/>} />
      <CardText>

          <ListContainer
            collection={Comments}
            publication="comments.list"
            selector={{postId: post._id}}
            terms={{postId: post._id, view: "postComments"}}
            limit={0}
            parentProperty="parentCommentId"
            joins={Comments.getJoins()}
            component={Telescope.components.CommentsList}
            listId="comments.list"
          />
      </CardText>

      <CardText>

      { currentUser ?
        <div className="posts-comments-thread-new">
          <h4><FormattedMessage id="comments.new"/></h4>
          <Telescope.components.CommentsNew type="comment" postId={post._id} />
        </div> :
        <div>
          <ModalTrigger size="small" component={<a><FormattedMessage id="comments.please_log_in"/></a>}>
            <Telescope.components.UsersAccountForm/>
          </ModalTrigger>
        </div> }

      </CardText>

    </div>
  )
};

PostsCommentsThread.displayName = "PostsCommentsThread";

module.exports = PostsCommentsThread;
export default PostsCommentsThread;
