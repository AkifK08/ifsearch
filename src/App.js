import logo from './logo.svg';
import './App.css';
import Dictaphone from './Dictaphone';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor:"white",
    }}>
      <Dictaphone/>
    </div>
  );
}

export default App;
