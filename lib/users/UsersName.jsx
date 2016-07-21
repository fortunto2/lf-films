import React, { PropTypes, Component } from 'react';
import Users from 'meteor/nova:users';
import { Link } from 'react-router';

// import {grey500} from 'material-ui/styles/colors';

const subtitle = {
    color: '#9e9e9e'
};

const UsersName = ({user}) => (

    <Link 
      style={subtitle}
      to={Users.getProfileUrl(user)}
      className='subTitleStyle'
      >
      {Users.getDisplayName(user)}
    </Link>

)

UsersName.propTypes = {
  user: React.PropTypes.object.isRequired,
}

UsersName.displayName = "UsersName";

module.exports = UsersName;
export default UsersName;
