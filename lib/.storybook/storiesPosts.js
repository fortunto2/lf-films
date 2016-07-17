import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import WithContext from 'react-with-context'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
  cyan500, cyan700,
  tealA200,pinkA200,pinkA400,pinkA100,
  grey100, grey300, grey400, grey500,grey700,grey600,
  white, darkBlack, fullBlack,fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';


import Factory from '../storybook/factories'
// import '../components.js'

// import PostsLoadMore from './PostsLoadMore.jsx'
// import PostsNoMore from './PostsNoMore.jsx'
// import PostsNoResults from './PostsNoResults.jsx'
// import PostsThumbnail from './PostsThumbnail.jsx'
// import PostsLoading from './PostsLoading.jsx'
// import PostsViews from './PostsViews.jsx'
// import PostsCategories from './PostsCategories.jsx'
// import PostsCommenters from './PostsCommenters.jsx'
// import PostsStats from './PostsStats.jsx'
// import PostsItem from './PostsItem.jsx'

// import CustomPostsItem from "./CustomPostsItem.jsx";
// Telescope.components.PostsItem = CustomPostsItem;

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


import CustomPostsThumbnail from "./CustomPostsThumbnail.jsx";
// Telescope.components.PostsThumbnail = CustomPostsThumbnail;

storiesOf('CustomPostsThumbnail', module)
  .add('default', () => {
    return (
      <CustomPostsThumbnail post={Factory.build('post')}/>
    );
  });


import PostToolbar from "./PostToolbar.jsx";
// import UsersAvatar from "./CustomUsersAvatar.jsx";
// import UsersName from "../users/UsersName.jsx";
import Telescope from "../storybook/telescope.js";
import Vote from "../common/Vote.jsx";
Telescope.components.Vote = Vote;

storiesOf('PostToolbar', module)
  .add('default', () => {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <PostToolbar document={Factory.build('post')} currentUser='story'/>
      </MuiThemeProvider>
    );
  });


// storiesOf('PostsLoadMore', module)
//   .add('default', () => {
//     return (
//       <PostsLoadMore
//         loadMore={action('loadMore')}
//         count={10}
//         totalCount={15}
//       />
//     )
//   })
//
// storiesOf('PostsNoMore', module)
//   .add('default', () => <PostsNoMore />)
//
// storiesOf('PostsNoResults', module)
//   .add('default', () => <PostsNoResults />)
//
// storiesOf('PostsThumbnail', module)
//   .add('default', () => <PostsThumbnail post={Factory.build('post')} />)
//
// storiesOf('PostsLoading', module)
//   .add('default', () => <PostsLoading />)
//
// storiesOf('PostsViews', module)
//   .addDecorator((story) => {
//     const context = {
//       currentUser: Factory.build('user'),
//       currentRoute: Factory.build('route'),
//     }
//     return <WithContext context={context}>{story()}</WithContext>
//   })
//   .add('default', () => <PostsViews post={Factory.build('post')} />)
//
// storiesOf('PostsCategories', module)
//   .add('default', () => <PostsCategories post={Factory.build('post')} />)
//
// storiesOf('PostsCommenters', module)
//   .add('default', () => <PostsCommenters post={Factory.build('post')} />)
//
// storiesOf('PostsStats', module)
//   .add('default', () => <PostsStats post={Factory.build('post')} />)
//   .add('no score', () => <PostsStats post={Factory.build('post-no-score')} />)
//
// storiesOf('CustomPostsItem', module)
//   .addDecorator((story) => {
//     const context = { currentUser: Factory.build('user') }
//     return <WithContext context={context}>{story()}</WithContext>
//   })
//   .add('default', () => <CustomPostsItem post={Factory.build('post')} />)
