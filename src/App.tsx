import React from 'react';
import ExchangeRates from './components/ExchangeRates';
import Todo from './components/Todo';
import TodosList from './components/TodosList';

const App: React.FC = () => {
  return (
    <div className="App">
      {/*<ExchangeRates/>*/}
      {/*<Todo id={1} completed={false} text="My Todo"/>*/}
      <TodosList/>
    </div>
  );
};

export default App;
