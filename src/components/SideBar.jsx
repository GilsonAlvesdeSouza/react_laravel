import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selecionaUsuario} from '../store/actions/usuarios.action'

class SideBar extends Component {
    usuarios = this.props.usuarios.list;

    listaUsuarios = this.usuarios.map((usuario, key) => (
        <li key={`usuario ${key}`}>{usuario}
            <button onClick={() => this.props.selecionaUsuario(usuario)}>Selecionar</button>
        </li>
    ));

    render() {
        return (
            <ul>
                {this.listaUsuarios}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const {usuariosReducer} = state;
    return {usuarios: usuariosReducer};
}

const mapDispatchToProps = dispatch => ({
    selecionaUsuario: (usuario) => dispatch(dispatch(selecionaUsuario(usuario))),
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(SideBar);