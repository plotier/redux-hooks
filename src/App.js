import logo from './logo.svg';
import './App.css';
import List from './components/List';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <List/  >
      <AddTodo/>
    </div>
    </Provider>
  );
}

export default App;
