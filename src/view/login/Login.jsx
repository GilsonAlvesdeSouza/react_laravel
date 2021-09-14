import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

class Login extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);