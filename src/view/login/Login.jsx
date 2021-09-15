import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles, Container, Button, TextField, Typography, Link} from '@material-ui/core';
import {green} from '@material-ui/core/colors'
import {login, changeValue} from "../../store/actions/authAction";
import {Loading, Notify } from "../../components"

const ColorButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        }
    }
}))(Button);

const mapStateToProps = (state) => {
    return {
        credentials: state.authReducer.credentials,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials)),
        changeValue: (value) => dispatch(changeValue(value)),
    };
}

class Login extends Component {

    login = () => {
        const {credentials} = this.props;
        this.props.login(credentials).then(()=>{
            console.log("chamou");
        });
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
                                Criando uma aplicação com React e Laravel
                            </Typography>
                        </div>
                        <div className="mt-4">
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"email"} name={"username"} type={"email"}
                                       label={"E-mail"} value={this.props.credentials.username}
                                       onChange={(text) =>
                                           this.props.changeValue({username: text.target.value})}/>
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"Senha"} name={"senha"} type={"password"}
                                       label={"Senha"} value={this.props.credentials.password}
                                       onChange={(text) =>
                                           this.props.changeValue({password: text.target.value})}/>
                            <Button type={"button"} variant={"contained"} fullWidth color={"primary"}
                                    size={"large"} className={"mb-3 mb-md-4 mt-4"}
                                    onClick={() => this.login()}>Entrar
                            </Button>
                            <Link href={"/register"} style={{textDecoration: "none"}}>
                                <ColorButton type={"button"} fullWidth size={"large"}
                                             variant={"contained"} className={"mt-md-4"}>Cadastrar</ColorButton>
                            </Link>
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
)(Login);