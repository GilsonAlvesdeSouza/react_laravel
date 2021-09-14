import React, {Component} from 'react';
import {connect} from 'react-redux';

class Usuarios extends Component {


    render() {
        return (
            <div>
                <h2>Usuário: {this.props.usuarios.active}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {usuariosReducer} = state;
    return {
        usuarios: usuariosReducer
    };
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Usuarios);