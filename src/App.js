import "./App.css";

import Header from "./components/organisms/Header/Header";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import responsiveFontTheme from "./Theme/theme";

function App() {
	return (
		<ThemeProvider theme={responsiveFontTheme}>
			<Container maxWidth="md">
				<Header />
			</Container>
		</ThemeProvider>
	);
}

export default App;
