import './App.css';
import Form from './components/Module-2-lessons/Form/Form';

function App() {
  return (
    <div className="App">
      <Form onSubmit={(e: any) => console.log(e)}/>
    </div>
  );
}

export default App;
