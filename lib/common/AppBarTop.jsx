// http://stackoverflow.com/questions/37286351/toggle-drawer-from-appbar-lefticon

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router';

import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Navigation from 'material-ui/svg-icons/navigation/menu';

// import DrawerLeft from './DrawerLeft.jsx';
import LogInDialog from './LogInDialog.jsx';

import {grey50, grey300} from 'material-ui/styles/colors';

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

      // const logoUrl = Telescope.settings.get("logoUrl");
      const siteTitle = Telescope.settings.get("title", "LIFE.FILM");
      // const tagline = Telescope.settings.get("tagline");

      const currentUser=this.props.currentUser;

      // function handleTouchTap() {
      //   alert('onTouchTap triggered on the title component');
      // }

      const styles = {
        title: {
          cursor: 'pointer',
          color: '#ffffff',
        },
        card:{
          backgroundColor: 'none',
          boxShadow: 'none',
        },
      };

        return (
            <div>
                <AppBar
                    style={styles.card}
                    title={
                      <Link to={`/`}
                        style={styles.title}>
                        {siteTitle}
                      </Link>
                    }
                    iconElementLeft={
                      <IconButton
                        onTouchTap={this.handleToggle.bind(this)}>
                        <Navigation color={grey300} hoverColor={grey50}/>
                    </IconButton>}

                    iconElementRight={
                      <div className="fixFlex">
                        <Telescope.components.PostsNewButton />
                        <IconButton tooltip="Search" touch={true} tooltipPosition="bottom-left">
                          <ActionSearch />
                        </IconButton>
                        {currentUser ? <Telescope.components.UsersMenu user={currentUser}/> : <LogInDialog />}

                      </div>
                    }
                    className="appbar"
                />
                  <Drawer
                      docked={false}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}
                  >
                      <MenuItem onTouchTap={this.handleClose.bind(this)}><Link to={`/`}>Home</Link></MenuItem>
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
                        <MenuItem primaryText="Help" onTouchTap={this.handleClose.bind(this)}/>

                  </Drawer>
           </div>
        );
    }
}
