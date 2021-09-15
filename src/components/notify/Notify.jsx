import React, {Component} from 'react';
import {connect} from 'react-redux';
import Snackbar from "@material-ui/core/Snackbar";
import {changeNotify} from "../../store/actions/notifyAction";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function mapStateToProps(state) {
    return {
        notify: state.notifyReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeNotify: (value) => dispatch(changeNotify(value))
    };
}

class Notify extends Component {

    handClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.props.changeNotify({
            open: false
        });
    };

    render() {
        return (
            <Snackbar open={this.props.notify.open}
                      autoHideDuration={this.props.notify.time}
                      transitionDuration={this.props.notify.transitional}
                      anchorOrigin={{
                          horizontal: this.props.notify.horizontal,
                          vertical: this.props.notify.vertical
                      }}
                      onClose={this.handClose}>
                <Alert onClose={this.handClose}
                       severity={this.props.notify.class}>{this.props.notify.msg}
                </Alert>
            </Snackbar>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notify);