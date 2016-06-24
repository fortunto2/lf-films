import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Button } from 'react-bootstrap';
import moment from 'moment';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';

class CustomPostsItem extends Telescope.components.PostsItem {

  render() {

    const post = this.props.post;


    let postClass = "card "; 
    if (post.sticky) postClass += " posts-sticky";

    if (post.color) {
      postClass += " post-"+post.color;
    }

    return (
          <div className={postClass}>

              <div className="card-block text-xs-center">
                  <h5 className="card-title">            
                      <Link to={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
                      {post.title}
                      </Link>
                        {this.renderCategories()}
                  </h5>
              </div>

              
                  <div className="card-thumbnail">

                      <Telescope.components.PostsThumbnail post={post}/> 

                      <div className="card-img-overlay">
                            
                          <span className="duration">10:00</span>

                      </div>

                  </div>


              <div className="card-block">                 

                  <Telescope.components.UsersAvatar user={post.user} size="small"/>
                  <Telescope.components.UsersName user={post.user}/>
                  <br />
                  <span className="text-muted"><small>
                    {post.hits} | <FormattedRelative value={post.postedAt}/>                      
                  </small></span>


                  {/* {(this.context.currentUser.isAdmin) ?<Telescope.components.PostsStats post={post} />:null}
                   {this.renderActions()}
                   */}

              </div>

          </div>
    )
  }
};
  
CustomPostsItem.propTypes = {
  post: React.PropTypes.object.isRequired
}

CustomPostsItem.contextTypes = {
  currentUser: React.PropTypes.object
};

export default CustomPostsItem;