import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { User } from './components/User/User';

function App() {

  let [data, setData] = useState([]);
  const handleInputData = event => {
    setData(prvState => { return [{ ...event, id: Math.random() }, ...prvState] });
  };

  return (
    <div className="App">
      <section id='data'>
        <Card>
          <Form addInput={handleInputData} />
        </Card>
        <Card>
          {
            data.map((user, i) => <User key={user.id} name={user.name} age={user.age} style={{ marginBottom: `${i < (data.length - 1) ? '1' : '0'}rem` }} />)
          }
        </Card>
      </section>
    </div>
  );
}

export default App;
