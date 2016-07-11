import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan500, cyan700,
  tealA200,pinkA200,pinkA400,pinkA100,
  grey100, grey300, grey400, grey500,grey700,grey600,
  white, darkBlack, fullBlack,fullWhite
} from 'material-ui/styles/colors';
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
import {fade} from 'material-ui/utils/colorManipulator';
// import spacing from 'material-ui/spacing';


const muiTheme = getMuiTheme({
  spacing: {
      iconSize: 24,
      desktopGutter: 24,
      desktopGutterMore: 32,
      desktopGutterLess: 16,
      desktopGutterMini: 8,
      desktopKeylineIncrement: 64,
      desktopDropDownMenuItemHeight: 32,
      desktopDropDownMenuFontSize: 15,
      desktopDrawerMenuItemHeight: 48,
      desktopSubheaderHeight: 48,
      desktopToolbarHeight: 56,
    },
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: pinkA200,
    accent2Color: pinkA400,
    accent3Color: pinkA100,
    textColor: fullWhite,
    secondaryTextColor: fade(fullWhite, 0.7),
    alternateTextColor: '#2e3e49',
    canvasColor: '#2e3e49',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12),
    // shadowColor: fullBlack,
  }
});


class CustomLayout extends Component {

  render() {

    return (

      <MuiThemeProvider  muiTheme={muiTheme}>

        <div className="wrapper" id="wrapper">

          <Telescope.components.HeadTags />

          <Telescope.components.UsersProfileCheck {...this.props} />

          <Telescope.components.Header {...this.props}/>

          <div className="main">

            <FlashContainer component={Telescope.components.FlashMessages}/>

            {this.props.children}

          </div>

          <Telescope.components.Footer {...this.props}/>

        </div>
      </MuiThemeProvider>
    );

  }
}

// <Telescope.components.Newsletter />


CustomLayout.displayName = "CustomLayout";

module.exports = CustomLayout;
