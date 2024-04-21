import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import Store from './modules/store'
function App() {
  return (
    <Provider store={Store}>
      <Counter />
    </Provider>
  );
}

export default App;
