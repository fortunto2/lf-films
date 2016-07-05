import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/std:accounts-ui';
import { Modal} from 'react-bootstrap';
import { ContextPasser } from "meteor/nova:core";
import { LinkContainer } from 'react-router-bootstrap';

import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Chip from 'material-ui/Chip';


class CustomUsersMenu extends Component {

  render() {

    const user = this.props.user;

    const styles = {
      chip: {
        margin: 4,
      }
    };

    return (

      <IconMenu
        iconButtonElement={
          <Chip
            style={styles.chip}
          >
            <Telescope.components.UsersAvatar size="small" user={user} link={false} />
            {Users.getDisplayName(user)}
          </Chip>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem
              linkButton
              containerElement={<Link to={`/users/${user.telescope.slug}`} />}
              >
              <FormattedMessage id="users.profile"/>

            </MenuItem>
            
            <MenuItem
              linkButton
              containerElement={<Link to={`/account`} />}
              >
              <FormattedMessage id="users.edit_account"/>
            </MenuItem>

          <MenuItem  onTouchTap={() => Meteor.logout(Accounts.ui._options.onSignedOutHook())}>
            <FormattedMessage id="users.log_out"/>
          </MenuItem>

      </IconMenu>


    )
  }

}

CustomUsersMenu.propTypes = {
  user: React.PropTypes.object
}

CustomUsersMenu.contextTypes = {
  messages: React.PropTypes.object
}

module.exports = CustomUsersMenu;
export default CustomUsersMenu;
