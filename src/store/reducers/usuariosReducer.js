const initialState = {
    usuarios:{
     active: null,
     list: [
         'pedro',
         'carlos',
         'jorge',
         'luciano',
         'alex',
     ],
    }
};

const usuariosReducer = (state= initialState.usuarios, action) => {
    if (action.type === 'USUARIO_SELECIONADO' ){
        return{
            ...state,
            active: action.payload,
        }
    }
    return state;
}

export default usuariosReducer;