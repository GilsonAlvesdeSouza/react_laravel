export const initialState = {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: '',
        },
        isLoading: {
            active: false,
            msg: null,
        },
        success: false,
        error: null,
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