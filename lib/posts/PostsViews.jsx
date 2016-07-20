import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { withRouter } from 'react-router';
import Users from 'meteor/nova:users';

import { Link } from 'react-router';
import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  button: {
    margin: 12,
  }
};

const PostsViews = (props, context) => {

  let views = ["top", "new", "best"];
  const adminViews = ["pending", "rejected", "scheduled"];

  if (Users.is.admin(context.currentUser)) {
    views = views.concat(adminViews);
  }

  // const {router} = this.props;
  // const currentViewSlug = router.location.query.view;
  // disabled={currentViewSlug === view ? true :  false}


  const query = _.clone(props.router.location.query);

  return (

    <Row>
      <Col xs>

        {views.map(view =>

          <RaisedButton
            key={view}
            linkbutton
            containerElement={
              <Link
                to={{pathname: "/", query: {...query, view: view}}} /*to={}*/
                activeClassName="posts-view-active"
                />
            }
            label={<FormattedMessage id={"posts."+view}/>}
            style={styles.button}
          />


      )}

        <RaisedButton
          linkbutton
          containerElement={
            <Link
              to={"/daily"} /*to={{name: "posts.daily"}}*/
              activeClassName="posts-view-active"
              />
          }
          label={<FormattedMessage id="posts.daily" />}
          style={styles.button}
        />


    </Col>
  </Row>


);
}

PostsViews.propTypes = {
  defaultView: React.PropTypes.string
}

PostsViews.defaultProps = {
  defaultView: "top"
}

PostsViews.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
};

PostsViews.displayName = "PostsViews";

module.exports = withRouter(PostsViews);
