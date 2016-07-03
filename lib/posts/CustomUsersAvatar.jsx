import React, { PropTypes, Component } from 'react';
// import Avatar from 'meteor-avatar-core';
import { Avatar } from 'meteor/nova:core';

const CustomUsersAvatar = ({user, size, link}) => {

  const sizes = {
    small: "3rem",
    medium: "4rem",
    large: "5rem"
  }

  const aStyle = {
    borderRadius: "100%",
    display: "inline-block",
    height: sizes[size],
    width: sizes[size],
    marginRight: "1rem"

  };

  const imgStyle = {
    borderRadius: "100%",
    display: "block",
    height: sizes[size],
    width: sizes[size]
  };



    const avatarUrl = Avatar.getUrl(user);

    const img = <img alt={Users.getDisplayName(user)} style={imgStyle} className="avatar" src={Avatar.getUrl(user)}/>;
    const initials = <span className="avatar-initials"><span>{Avatar.getInitials(user)}</span></span>;

    const avatar = avatarUrl ? img : initials;

    return link ? <a style={aStyle} className="users-avatar" href={Users.getProfileUrl(user)}>{avatar}</a> : avatar;



}

CustomUsersAvatar.propTypes = {
  user: React.PropTypes.object.isRequired,
  size: React.PropTypes.string,
  link: React.PropTypes.bool
}

CustomUsersAvatar.defaultProps = {
  size: "medium",
  link: true
}

CustomUsersAvatar.displayName = "CustomUsersAvatar";

module.exports = CustomUsersAvatar;
export default CustomUsersAvatar;
