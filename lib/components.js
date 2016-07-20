
//Posts
import CustomPostsList from "./posts/CustomPostsList.jsx";
import CustomPostsItem from "./posts/CustomPostsItem.jsx";
import CustomUsersAvatar from "./posts/CustomUsersAvatar.jsx";
import CustomPostsThumbnail from "./posts/CustomPostsThumbnail.jsx";
import CustomPostsPage from "./posts/CustomPostsPage.jsx";
import CustomPostsCommentsThread from "./posts/PostsCommentsThread.jsx";
import CustomPostsNewButton from "./posts/PostsNewButton.jsx";
import PostsListMini from "./posts/PostsListMini.jsx";
import PostsViews from "./posts/PostsViews.jsx";
import PostsListHeader from "./posts/PostsListHeader.jsx";

Telescope.components.PostsList = CustomPostsList;
Telescope.components.PostsItem = CustomPostsItem;
Telescope.components.UsersAvatar = CustomUsersAvatar;
Telescope.components.PostsThumbnail = CustomPostsThumbnail;
Telescope.components.PostsPage = CustomPostsPage;
Telescope.components.PostsCommentsThread = CustomPostsCommentsThread;
Telescope.components.PostsNewButton = CustomPostsNewButton;
Telescope.components.PostsViews = PostsViews;
Telescope.components.PostsListHeader = PostsListHeader;


//users
import CustomUsersMenu from "./users/UsersMenu.jsx";
import UsersName from "./users/UsersName.jsx";
import CustomUsersAccountForm from "./users/UsersAccountForm.jsx";
import UsersEdit from "./users/UsersEdit.jsx";

Telescope.components.UsersMenu = CustomUsersMenu;
Telescope.components.UsersName = UsersName;
Telescope.components.UsersAccountForm = CustomUsersAccountForm;
Telescope.components.UsersEdit = UsersEdit;

//Common
import CustomHeader from "./common/Header.jsx";
import CustomLayout from "./common/Layout.jsx";
import CustomVote from "./common/Vote.jsx";
import Loading from "./common/Loading.jsx";
import AppLoading from "./common/AppLoading.jsx";
import SearchForm from "./common/SearchForm.jsx";

Telescope.components.Header = CustomHeader;
Telescope.components.Layout = CustomLayout;
Telescope.components.Vote = CustomVote;
Telescope.components.Loading = Loading;
Telescope.components.AppLoading = AppLoading;
Telescope.components.SearchForm = SearchForm;


//categories
import CategoriesList from "./categories/CategoriesList.jsx";
import Category from "./categories/Category.jsx";
import CategoriesEditForm from "./categories/CategoriesEditForm.jsx";
import CategoriesNewForm from "./categories/CategoriesNewForm.jsx";

Telescope.components.CategoriesList = CategoriesList;
Telescope.components.Category = Category;
Telescope.components.CategoriesEditForm = CategoriesEditForm;
Telescope.components.CategoriesNewForm = CategoriesNewForm;
