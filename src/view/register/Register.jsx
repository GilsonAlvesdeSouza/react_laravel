import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser, changeValue} from "../../store/actions/registerAction";
import {rootUrl} from "../../config/globalConfig";
import {Container, Button, TextField, Typography, Link} from '@material-ui/core';
import {Loading, Notify } from "../../components"

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
            .then(() =>{
                if (this.props.success){
                    window.location.replace(rootUrl+'painel');
                }
            })
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
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"name"} name={"username"} type={"text"}
                                       label={"Nome"} value={this.props.data.username}
                                       onChange={(text) =>
                                           this.props.changeValue({username: text.target.value})}/>
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"email"} name={"email"} type={"email"}
                                       label={"E-mail"} value={this.props.data.email}
                                       onChange={(text) =>
                                           this.props.changeValue({email: text.target.value})}/>
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"password"} name={"password"} type={"password"}
                                       label={"Senha"} value={this.props.data.password}
                                       onChange={(text) =>
                                           this.props.changeValue({password: text.target.value})}/>
                            <Button type={"button"} variant={"contained"} fullWidth color={"primary"}
                                    size={"large"} className={"mb-3 mb-md-4 mt-4"}
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