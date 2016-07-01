import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';


const CustomUsersAccountMenu = () => {

  let log_in=<FormattedMessage id="users.log_in"/>;

  return (

    <Telescope.components.UsersAccountForm />

  )
};

CustomUsersAccountMenu.displayName = "CustomUsersAccountMenu";

module.exports = CustomUsersAccountMenu;
export default CustomUsersAccountMenu;



{/*        <Telescope.components.UsersAccountForm />
<RaisedButton label={log_in} primary={true}  />
*/}
