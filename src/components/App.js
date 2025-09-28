import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { Container } from "./styles/Container.styled";
import { GlobalStyles } from "./styles/Global";
import content from "../content";
import Card from "./Card";
import Footer from "./Footer";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
	mobile: "786px",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					{content.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
