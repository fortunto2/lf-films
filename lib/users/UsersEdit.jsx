import React, { PropTypes, Component } from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';

import NovaForm from "meteor/nova:forms";
//import { Messages } from "meteor/nova:core";
import Users from 'meteor/nova:users';

const UsersEdit = (props, context) => {

  const user = props.user;
  const currentUser = props.currentUser;

  //const label = `Edit profile for ${Users.getDisplayName(user)}`;

  return (
    <Grid>
    <Row>
      <Col xs >

        <Telescope.components.CanEditUser user={currentUser} userToEdit={user}>
          <div className="users-edit-form">
            <h2 className="users-edit-form-title"><FormattedMessage id="users.edit_account"/></h2>
            <NovaForm
              currentUser={currentUser}
              collection={Meteor.users}
              document={user}
              methodName="users.edit"
              successCallback={(user)=>{
                context.messages.flash(this.context.intl.formatMessage({id: "users.edit_success"}, {name: Users.getUsername(user)}), 'success')
              }}
            />
          </div>
        </Telescope.components.CanEditUser>

      </Col>
    </Row>
    </Grid>

  );
};


UsersEdit.propTypes = {
  user: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired
};

UsersEdit.contextTypes = {
  messages: React.PropTypes.object,
  intl: intlShape
};

UsersEdit.displayName = "UsersEdit";

module.exports = UsersEdit;
export default UsersEdit;
