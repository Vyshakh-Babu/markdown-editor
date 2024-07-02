import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Markdown Editor with Live Preview</h1>
			</header>
			<main>
				<MarkdownEditor />
			</main>
		</div>
	);
}

export default App;
