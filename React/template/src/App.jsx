import './App.css';
import P from './components/P/P';
import Button from './components/ButtonComponent/ButtonComponent';
function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<Button>-</Button>
			<P>0</P>
			<Button>+</Button>
		</>
	);
}

export default App;
