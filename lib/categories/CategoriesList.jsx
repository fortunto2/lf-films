import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { withRouter } from 'react-router';
import Users from 'meteor/nova:users';

import { Link } from 'react-router';
import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';


const styles = {
  button: {
    margin: 12,
  }
};


class CategoriesList extends Component {

  constructor(props) {
      super(props);
      this.state = {open: false};
  }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }


  renderCategoryNewButton() {

    return (
      <div>
        <RaisedButton
          label={<FormattedMessage id="categories.new"/>}
          primary={true}
          onTouchTap={this.handleOpen.bind(this)}
          style={styles.button}
        />
        <Dialog
              title={<FormattedMessage id="categories.new"/>}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose.bind(this)}
            >
              <Telescope.components.CategoriesNewForm/>
        </Dialog>
      </div>
  );
  }


  render() {

    const categories = this.props.categories;
    const context = this.context;
    const currentQuery = _.clone(this.props.router.location.query);
    delete currentQuery.cat;

    return (
      <Row>
        <Col xs>

          <RaisedButton
            linkbutton
            containerElement={<Link to={{pathname:"/", query: currentQuery}} activeClassName="category-active" />}
            label={<FormattedMessage id="categories.all"/>}
            style={styles.button}
          />

          {categories && categories.length > 0 ? categories.map((category, index) => <Telescope.components.Category key={index} category={category} index={index} />) : null}

      </Col>
    </Row>
    );

  }
}

CategoriesList.propTypes = {
  categories: React.PropTypes.array
}

CategoriesList.contextTypes = {
  currentUser: React.PropTypes.object,
  messages: React.PropTypes.object,
};

module.exports = withRouter(CategoriesList);
export default withRouter(CategoriesList);
