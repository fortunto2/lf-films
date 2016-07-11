import React from 'react';
//import { Messages } from "meteor/nova:core";

import AppBarTop from './AppBarTop.jsx';

const CustomHeader = ({currentUser}) => {


  return (

      <AppBarTop currentUser={currentUser}/>

  )
}

CustomHeader.displayName = "CustomHeader";

module.exports = CustomHeader;
