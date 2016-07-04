// http://stackoverflow.com/questions/37286351/toggle-drawer-from-appbar-lefticon

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import DrawerLeft from './DrawerLeft.jsx';

export default class AppBarTop extends React.Component {

  constructor(props) {
      super(props);
      this.state = {open: false};
  }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {

      const logoUrl = Telescope.settings.get("logoUrl");
      const siteTitle = Telescope.settings.get("title", "LIFE.FILM");
      const tagline = Telescope.settings.get("tagline");

      const currentUser=this.props.currentUser

        return (
            <div>
                <AppBar
                    title={siteTitle}
                    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    iconElementRight={
                      <div>
                        {currentUser ? <Telescope.components.UsersMenu user={currentUser}/> : <Telescope.components.UsersAccountMenu/>}
                        <Telescope.components.PostsNewButton/>
                      </div>

                              }
                    className="appbar"
                />
                  <Drawer
                      docked={false}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}
                  >
                      <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item</MenuItem>
                      <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
                  </Drawer>
           </div>
        )
    }
}
