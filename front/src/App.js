import AppHeader from './components/AppHeader';
import ComponentMs1 from './components/ComponentMs1';
import ComponentMs2 from './components/ComponentMs2';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader logo={logo} />
      <div className="App-body">
        <ComponentMs1 />
        <ComponentMs2 />
      </div>
    </div>
  );
}

export default App;
