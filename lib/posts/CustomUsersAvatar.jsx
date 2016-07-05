import React, { PropTypes, Component } from 'react';
// import Avatar from 'meteor-avatar-core';
import { Avatar } from 'meteor/nova:core';
import AvatarReact from 'material-ui/Avatar';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';


const CustomUsersAvatar = ({user, size, link}) => {

    const sizes = {
      small: "3rem",
      medium: "4rem",
      large: "5rem"
    }

    const aStyle = {
      marginRight: "1rem"
    };

    // const initials = <span className="avatar-initials"><span>{Avatar.getInitials(user)}</span></span>;
    // const avatar = avatarUrl ? img : initials;

    const avatarUrl = Avatar.getUrl(user);

    const ava = (
      <AvatarReact
          src={avatarUrl}
        />
    )

    const linkAva =(
      <Link 
        to={Users.getProfileUrl(user)}
        style={aStyle}
        >
        {ava}
      </Link>
    )

    return link ? linkAva : ava;



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
