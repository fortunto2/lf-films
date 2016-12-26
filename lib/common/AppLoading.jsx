import React from 'react';
// import { FormattedMessage } from 'react-intl';
import Telescope from 'meteor/nova:lib';

const Loading = Telescope.components.Loading;

const AppLoading = () => <Loading/>;

AppLoading.displayName = "AppLoading";

module.exports = AppLoading;
export default AppLoading;
