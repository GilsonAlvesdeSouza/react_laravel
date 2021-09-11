import Button from '@material-ui/core/Button'
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2196f3',
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Button variant={"contained"} color={"primary"}>
                    Hello Word
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
