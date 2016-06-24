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

// Telescope.components.Logo = CustomLogo;
// Telescope.components.Newsletter = CustomNewsletter;
Telescope.components.UsersAvatar = CustomUsersAvatar;
Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsThumbnail = CustomPostsThumbnail;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.PostsPage = CustomPostsPage;
