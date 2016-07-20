import React, { PropTypes, Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { intlShape } from 'react-intl';
import Formsy from 'formsy-react';
// import FRC from 'formsy-react-components';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import { withRouter } from 'react-router'

import { Grid, Row, Col } from 'meteor/lifefilm:react-flexbox-grid';

const Input = FormsyText;

// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay
const delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

class SearchForm extends Component{

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      search: props.router.location.query.query || ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      search: this.props.router.location.query.query || ''
    });
  }

  search(data) {

    const router = this.props.router;
    const query = data.searchQuery === '' ? {} : {query: data.searchQuery};

    delay(() => {
      router.push({pathname: "/", query: query});
    }, 700 );

  }

  render() {
    return (
      <Col xs>
        <Formsy.Form onChange={this.search}>
          <Input
            name="searchQuery"
            value={this.state.search}
            type="text"
            layout="elementOnly"
            hintText={<FormattedMessage id="posts.searc_hint"/>}
            floatingLabelText={<FormattedMessage id="posts.search"/>}
          />
        </Formsy.Form>
      </Col>
    );
  }
}

SearchForm.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
};

module.exports = withRouter(SearchForm);
export default withRouter(SearchForm);
