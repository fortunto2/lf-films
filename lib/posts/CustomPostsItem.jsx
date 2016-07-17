import React from 'react';
// import { FormattedMessage, FormattedRelative } from 'react-intl';
// import { Button } from 'react-bootstrap';
// import moment from 'moment';
// import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
// import Users from 'meteor/nova:users';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
//
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// import PostMiniToolbar from './PostMiniToolbar.jsx';

// import {
//   cyan500, cyan700,
//   tealA200,
//   grey100, grey300, grey400, grey500,grey700,
//   white, darkBlack, fullBlack
// } from 'material-ui/styles/colors';


class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;

    let postClass = "card ";
    if (post.sticky) postClass += " posts-sticky";

    if (post.color) {
      postClass += " post-"+post.color;
    }

    let UsersName = <Telescope.components.UsersName user={post.user}/>;
    // let UsersName = Users.getDisplayName(post.user);
    // let UsersAvatar = <Telescope.components.UsersAvatar user={post.user} size="small"/>;
    // let postedAt = <FormattedRelative value={post.postedAt}/>;

    let tUrl='http://dcr2ej3odfzos.cloudfront.net/'+post.thumbnailUrl;

    const styles = {
      overlay: {
        // height: '100%',
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: 'url('+tUrl+')',
        opacity: '0.6',

      },
      content: {
        padding: 16,
        position: 'absolute',
        bottom: '25%',
        textAlign: 'center',
        width: '100%',
      },
      title : {
        color: '#ffffff'
      }
    };

    let title = (
      <Link
        to={Posts.getLink(post)}
        style={styles.title}
      >{post.title}
      </Link>
    );

    return (
          <div className={postClass}>

              <Card>

                <Link to={Posts.getLink(post)}>
                    <div
                      style={styles.overlay}>
                    </div>
                </Link>

                <CardTitle
                  style={styles.content}
                  title={title}
                  subtitle={UsersName}
                />

              </Card>

          </div>
    );
  }
}

CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
};

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;
