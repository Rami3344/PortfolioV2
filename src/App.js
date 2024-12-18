import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
