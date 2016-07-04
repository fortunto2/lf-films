import React, { PropTypes, Component } from 'react';
import { FlashContainer } from "meteor/nova:core";

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan500, cyan700,
  tealA200,
  grey100, grey300, grey400, grey500,grey700,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
// import {fade} from 'material-ui/utils/colorManipulator';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey500,
    primary2Color: grey700,
    // primary3Color: grey400,
    // accent1Color: tealA200,
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: grey500,
    // clockCircleColor: fade(darkBlack, 0.07),
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

            <Telescope.components.Newsletter />

            {this.props.children}

          </div>

          <Telescope.components.Footer {...this.props}/>

        </div>
      </MuiThemeProvider>
    )

  }
}

CustomLayout.displayName = "CustomLayout";

module.exports = CustomLayout;
