import Todos from './components/Todos';

function App() {
	return (
		<main className='container'>
			<header className='h1 border-bottom mb-3'>
				Todo App - React, Redux, Jest
			</header>
			<Todos />
		</main>
	);
}

export default App;
