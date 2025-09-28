import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/global";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					<h1>Hello World</h1>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
