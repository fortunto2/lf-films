// http://stackoverflow.com/questions/37286351/toggle-drawer-from-appbar-lefticon

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

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
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Create Film</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>New Video</MenuItem>
                  <MenuItem onTouchTap={this.handleClose.bind(this)}>Popular</MenuItem>
                  <MenuItem
                    primaryText="#Tags"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                      <MenuItem primaryText="Family"   onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Sport"  onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Frends"  onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Business"  onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Other"  onTouchTap={this.handleClose.bind(this)}/>,
                    ]}
                  />
                  <MenuItem
                    primaryText="@Users"
                    rightIcon={<ArrowDropRight />}
                    menuItems={[
                      <MenuItem primaryText="Grid lines"  onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Page breaks"   onTouchTap={this.handleClose.bind(this)}/>,
                      <MenuItem primaryText="Rules"   onTouchTap={this.handleClose.bind(this)}/>,
                    ]}
                  />
                    <Divider />
                    <MenuItem onTouchTap={this.handleClose.bind(this)}>Help</MenuItem>

                  </Drawer>
           </div>
        )
    }
}
