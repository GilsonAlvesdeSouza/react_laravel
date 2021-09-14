import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'
import {green} from '@material-ui/core/colors'

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
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

class Login extends Component {
    render() {
        return (
            <div>
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
                                       label={"E-mail"}/>
                            <TextField variant={"outlined"} margin={"normal"} required
                                       fullWidth id={"Senha"} name={"senha"} type={"password"}
                                       label={"Senha"}/>
                            <Button type={"button"} variant={"contained"} fullWidth color={"primary"}
                                    size={"large"} className={"mb-3 mb-md-4 mt-4"}>Entrar
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