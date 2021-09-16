export const initialState = {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: '',
        },
    },
    register: {
        data: {
            name: '',
            email: '',
            password: '',
        },
        error: {},
        success: false
    },
    loading: {
        open: false,
        msg: 'CARREGANDO...',
    },
    notify: {
        open: false,
        class: 'success',
        vertical: 'top',
        horizontal: 'right',
        time: 5000,
        transitional: 500,
        msg: ''
    }
}