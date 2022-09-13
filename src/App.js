import './App.css';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { User } from './components/User/User';

function App() {
  return (
    <div className="App">
      <section id='data'>
        <Card>
          <Form />
        </Card>
        <Card>
          <User name='Avishek' age='25' style={{ marginBottom: '1rem' }} />
          <User name='Avishek' age='25' />
        </Card>
      </section>
    </div>
  );
}

export default App;
