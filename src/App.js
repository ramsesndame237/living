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
    <Row title="NEXTFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={requests.fethActionsMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.fethComdedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.fethHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.fethRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fethDocumentariesMovies} />
    </div>
  );
}

export default App;
