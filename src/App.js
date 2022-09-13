import './App.css';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <section id='data'>
        <Card>
          <Form />
        </Card>
        <Card />
      </section>
    </div>
  );
}

export default App;
