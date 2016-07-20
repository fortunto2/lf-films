import React, { PropTypes, Component } from 'react';

import classNames from "classnames";
import { withRouter } from 'react-router';
import Users from 'meteor/nova:users';

import { Link } from 'react-router';
import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
// import Dialog from 'material-ui/Dialog';
// import modeEdit from 'material-ui/svg-icons/editor/mode-edit';

class Category extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {open: false};
  // }
  //
  //   handleOpen() {
  //       this.setState({open: true});
  //   }
  //
  //   handleClose() {
  //       this.setState({open: false});
  //   }
  //
  //
  // renderEdit() {
  //
  //   return (
  //     <div>
  //       <RaisedButton
  //         primary={true}
  //         onTouchTap={this.handleOpen.bind(this)}
  //         icon={<modeEdit />}
  //       />
  //       <Dialog
  //             title={<FormattedMessage id="categories.edit"/>}
  //             modal={false}
  //             open={this.state.open}
  //             onRequestClose={this.handleClose.bind(this)}
  //           >
  //             <Telescope.components.CategoriesEditForm />
  //       </Dialog>
  //     </div>
  //   );
  // }

  render() {

    const {category, index, router} = this.props;

    const currentQuery = router.location.query;
    const currentCategorySlug = router.location.query.cat;
    const newQuery = _.clone(router.location.query);
    newQuery.cat = category.slug;


    const styles = {
      button: {
        margin: 12,
      }
    };

    return (

        <RaisedButton
          linkbutton
          containerElement={<Link to={{pathname:"/", query: newQuery}} activeClassName="category-active" />}
          label={category.name}
          style={styles.button}
          backgroundColor={category.color}
          disabled={currentCategorySlug === category.slug ? true :  false}
        />
    );
  }
}

    // {Users.is.admin(this.context.currentUser) ? this.renderEdit() : null}

Category.propTypes = {
  category: React.PropTypes.object,
  index: React.PropTypes.number,
  currentCategorySlug: React.PropTypes.string,
  openModal: React.PropTypes.func
}

Category.contextTypes = {
  currentUser: React.PropTypes.object
};

module.exports = withRouter(Category);
export default withRouter(Category);
