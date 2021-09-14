import {Provider} from 'react-redux';
import {store} from './store/store';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Routes from './routes';
import './css/dashBoard.css'

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
        }
    }
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Routes/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
