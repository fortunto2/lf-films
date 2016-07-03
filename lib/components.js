/*
This file centralizes all our custom component overrides.
*/

// import CustomLogo from "./components/CustomLogo.jsx";
// import CustomNewsletter from "./components/CustomNewsletter.jsx";
import CustomPostsList from "./posts/CustomPostsList.jsx";
import CustomPostsItem from "./posts/CustomPostsItem.jsx";
import CustomUsersAvatar from "./posts/CustomUsersAvatar.jsx";
import CustomPostsThumbnail from "./posts/CustomPostsThumbnail.jsx";
import CustomPostsPage from "./posts/CustomPostsPage.jsx";
import CustomPostsCommentsThread from "./posts/PostsCommentsThread.jsx";
import CustomHeader from "./common/Header.jsx";
import CustomLayout from "./common/Layout.jsx";
import CustomVote from "./common/Vote.jsx";
import CustomUsersMenu from "./users/UsersMenu.jsx";
import CustomUsersAccountMenu from "./users/UsersAccountMenu.jsx";
import CustomUsersAccountForm from "./users/UsersAccountForm.jsx";
// import getFilmUrl from "./posts/helpers.js";

// Telescope.components.Logo = CustomLogo;
// Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.UsersAvatar = CustomUsersAvatar;
Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsThumbnail = CustomPostsThumbnail;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.PostsPage = CustomPostsPage;
Telescope.components.PostsCommentsThread = CustomPostsCommentsThread;
Telescope.components.Header = CustomHeader;
Telescope.components.Layout = CustomLayout;
Telescope.components.Vote = CustomVote;
Telescope.components.UsersAccountMenu = CustomUsersAccountMenu;
Telescope.components.UsersMenu = CustomUsersMenu;
Telescope.components.UsersAccountForm = CustomUsersAccountForm;
// Posts.getPageUrl = getFilmUrl;
