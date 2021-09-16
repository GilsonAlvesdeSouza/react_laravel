import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser, changeValue} from "../../store/actions/registerAction";
import {baseURL} from "../../config/globalConfig";
import {Container, Button, TextField, Typography, Link} from '@material-ui/core';
import {Loading, Notify} from "../../components"

const mapStateToProps = (state) => {
    const {data, success, error} = state.registerReducer;
    return {
        data,
        success,
        error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (value) => dispatch(changeValue(value)),
        registerUser: (data) => dispatch(registerUser(data))
    };
}

class Register extends Component {

    register = () => {
        this.props.registerUser(this.props.data)
            .then(() => {
                if (this.props.success) {
                    window.location.replace(baseURL + 'painel');
                }
            })
    }

    handleOnChange = (text, prop) => {
        this.props.changeValue({[prop]: text.target.value})
        if (this.props.error[prop]) {
            console.log((this.props.error[prop]), "&&&&&&&&&&&&&&&");
            delete this.props.error[prop];
        }
    }

    handleError = (prop) => {
        return (this.props.error[prop]) &&
            <span className={"text-danger"}>{this.props.error[prop][0]}</span>;
    }

    render() {
        return (
            <div>
                <Loading/>
                <Notify/>
                <Container component={"main"} maxWidth={"xs"}>
                    <div className={"mt-3 mt-md-5"}>
                        <div className={"text-center"}>
                            <img src={'logo192.png'} alt={'logo react'} width={"100px"}/>
                            <Typography className={"mt-3 font-weight-normal"} component={"h1"} variant={"h6"}>
                                Crie sua conta. Teste grátis!
                            </Typography>
                        </div>
                        <div className="mt-4">
                            <TextField variant={"outlined"}
                                       margin={"normal"}
                                       required
                                       fullWidth
                                       id={"name"}
                                       name={"name"}
                                       type={"text"}
                                       label={"Nome"}
                                       value={this.props.data.name}
                                       onChange={(text) =>
                                           this.handleOnChange(text, 'name')
                                       }/>
                            {this.handleError('name')}
                            <TextField variant={"outlined"}
                                       margin={"normal"}
                                       required
                                       fullWidth
                                       id={"email"}
                                       name={"email"}
                                       type={"email"}
                                       label={"E-mail"}
                                       value={this.props.data.email}
                                       onChange={(text) =>
                                           this.handleOnChange(text, 'email')
                                       }/>
                            {this.handleError('email')}
                            <TextField variant={"outlined"}
                                       margin={"normal"}
                                       required
                                       fullWidth
                                       id={"password"}
                                       name={"password"}
                                       type={"password"}
                                       label={"Senha"}
                                       value={this.props.data.password}
                                       onChange={(text) =>
                                           this.handleOnChange(text, 'password')
                                       }/>
                            {this.handleError('password')}
                            <Button type={"button"}
                                    variant={"contained"}
                                    fullWidth
                                    color={"primary"}
                                    size={"large"}
                                    className={"mb-3 mb-md-4 mt-4"}
                                    onClick={() => this.register()}>Cadastrar
                            </Button>
                            <div className={"text-center"}>
                                <Link href={"/login"}
                                      color={"secondary"}
                                      className={"mt-4 text-decoration-none"} variant={"body2"}>
                                    Fazer Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);