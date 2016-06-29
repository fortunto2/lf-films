import React from 'react';
//import { Messages } from "meteor/nova:core";

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const CustomHeader = ({currentUser}) => {

  const logoUrl = Telescope.settings.get("logoUrl");
  const siteTitle = Telescope.settings.get("title", "LIFE.FILM");
  const tagline = Telescope.settings.get("tagline");

  return (

    <div className="header-wrapper">

      <AppBar
          title={siteTitle}
          iconElementRight={
            <div>
              {currentUser ? <Telescope.components.UsersMenu user={currentUser}/> : <Telescope.components.UsersAccountMenu/>}
            </div>
          }
          className="appbar"
        />


   </div>


  )
}

CustomHeader.displayName = "CustomHeader";

module.exports = CustomHeader;
