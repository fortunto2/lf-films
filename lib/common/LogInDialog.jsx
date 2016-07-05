import React from 'react';
import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

 const customContentStyle = {
   width: '50%',
   maxWidth: '1000',
   minWidth: '500',
 };

 const paddingTop = {
   paddingTop: '6px',
 };

export default class LogInDialog extends React.Component {

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


  render() {

    // добавить в диалог actions={actions}

    // const actions = [
    //   <FlatButton
    //     label="Cancel"
    //     primary={true}
    //     onTouchTap={this.handleClose.bind(this)}
    //   />,
    //   <FlatButton
    //     label="Submit"
    //     primary={true}
    //     keyboardFocused={true}
    //     onTouchTap={this.handleClose.bind(this)}
    //   />,
    // ];

    let log_in=<FormattedMessage id="users.log_in"/>;
    // let sign_up=<FormattedMessage id="users.sign_up"/>;

    return (
      <div style={paddingTop}>
        <FlatButton label={log_in} onTouchTap={this.handleOpen.bind(this)}/>
        <RaisedButton label="SIGN UP" primary={true} onTouchTap={this.handleOpen.bind(this)}/>

        <Dialog
          title="LOG IN"
          modal={false}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose.bind(this)}
        >
          <Telescope.components.UsersAccountForm />
        </Dialog>
      </div>
    );
  }
}
