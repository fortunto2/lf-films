import React from 'react';
// import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router';

import { Grid, Row, Col } from 'meteor/jimmiebtlr:react-flexbox-grid';
import {Card, CardTitle} from 'material-ui/Card';



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

        display: 'flex',            /* establish flex container */
        flexDirection: 'column',   /* stack flex items vertically */
        position: 'relative',      /* establish neares positioned ancenstor for absolute positioning */

      },

      text: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      },

      overlayImg: {
        position: 'relative',
        paddingBottom: '56.25%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: 'url('+tUrl+')',
        height: '100%',
        width: '100%',
        opacity: '0.6',

      },
      content: {
        padding: 16,
        position: 'absolute',
        bottom: '25%',
        textAlign: 'center',
        width: '100%',
        // fontSize: '1vw'
      },
      title : {
        color: '#ffffff'
      },
      margin : {
        marginBottom: 16,
        position: 'relative'

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

              <Card
                style={styles.margin}
                >

                    <Link to={Posts.getLink(post)}>
                        <div
                          style={styles.overlayImg}>
                        </div>
                    </Link>

                    <CardTitle
                      style={styles.text}
                      title={title}
                      subtitle={UsersName}
                    />


              </Card>

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
