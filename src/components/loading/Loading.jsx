import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeLoading} from "../../store/actions/loadingAction";
import Modal from "@material-ui/core/Modal";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles"

const styles = {
    progress: {
        marginRight: '15px'
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    paper: {
        backgroundColor: '#fff',
        padding: '15px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        outline: 'none',
    }
};

function mapStateToProps(state) {
    return {
        loading: state.loadingReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeLoading: (value) => dispatch(changeLoading(value))
    };
}

class Loading extends Component {
    handleClose = () => {
        this.props.changeLoading({
            open: false,
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <Modal open={this.props.loading.open}
                   onClose={this.handleClose}
                   className={classes.modal}>
                <div className={classes.paper}>
                    <CircularProgress size={"20px"} className={classes.progress}/>
                    <Typography variant={"subtitle1"}>
                        {this.props.loading.msg}
                    </Typography>
                </div>
            </Modal>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Loading));