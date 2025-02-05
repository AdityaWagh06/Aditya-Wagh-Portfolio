import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
// main.jsx or App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React is Working!</h1>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

