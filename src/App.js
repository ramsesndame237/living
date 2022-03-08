import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './services/requests';

function App() {
  return (
    <div className="App">
    <h1>
      Hey gar we are building our first react movies app basing on netflix film
    </h1>
    <Row title="NEXTFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
