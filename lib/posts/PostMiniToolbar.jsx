import React from 'react';
import { Link } from 'react-router';

import { FormattedMessage, FormattedRelative } from 'react-intl';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';



const PostMiniToolbar = ({document,currentUser}) => {

  const post = document;

  const aStyle = {
    marginRight: "1rem",
    color: '#464646'
  };

  let UserName = <Telescope.components.UsersName user={post.user}/>;
  // let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
  // let postedAt = <FormattedRelative value={post.postedAt}/>;

  let title = (
    <Link
      to={Posts.getLink(post)}
      style={aStyle}
    >{post.title}
    </Link>
  )


  return (

    <CardHeader
      className="CardHeader"
      title={title}
      subtitle={UserName}
      >
    </CardHeader>



  )
  };


  //
  // <div className="toolbar">
  //   <Toolbar  style={styles.toolbar}>
  //       <ToolbarGroup  firstChild={true} float="left" >
  //
  //         <CardHeader
  //           className="CardHeader"
  //           title={UsersName}
  //           subtitle={postedAt}
  //           avatar={UsersAvatar}
  //           >
  //         </CardHeader>
  //
  //       </ToolbarGroup>
  //
  //       <ToolbarGroup  float="right">
  //
  //
  //       </ToolbarGroup>
  //
  //     </Toolbar>
  //   </div>


PostMiniToolbar.displayName = "PostMiniToolbar";

module.exports = PostMiniToolbar;
