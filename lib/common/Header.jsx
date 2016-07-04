import React from 'react';
//import { Messages } from "meteor/nova:core";

import AppBarTop from './AppBarTop.jsx';

const CustomHeader = ({currentUser}) => {

  return (

    <div className="header-wrapper">
      <AppBarTop />
   </div>

  )
}

CustomHeader.displayName = "CustomHeader";

module.exports = CustomHeader;
