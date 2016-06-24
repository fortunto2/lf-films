import React, { PropTypes, Component } from 'react';
// import Avatar from 'meteor-avatar-core';
import { Avatar } from 'meteor/nova:core';

const CustomUsersAvatar = ({user, size, link}) => {



  // const avatarUrl = Avatar.getUrl(user);

  const img = <img alt={Users.getDisplayName(user)} className="img-circle pull-xs-left card-avatar" src={Avatar.getUrl(user)}/>;
  // const initials = <span className="img-circle pull-xs-left avatar-initials"><span>{Avatar.getInitials(user)}</span></span>;

  // const avatar = avatarUrl ? img : initials;

  return <a href={Users.getProfileUrl(user)}>{img}</a>;

}

// CustomUsersAvatar.propTypes = {
//   user: React.PropTypes.object.isRequired,
//   size: React.PropTypes.string,
//   link: React.PropTypes.bool
// }

// CustomUsersAvatar.defaultProps = {
//   size: "medium",
//   link: true
// }

CustomUsersAvatar.displayName = "CustomUsersAvatar";

module.exports = CustomUsersAvatar;
export default CustomUsersAvatar;