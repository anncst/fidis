import './App.css';
import RecentlyPlayed from './components/RecentlyPlayed';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomeImg from "./components/HomeImg";
import TabsTable from "./components/TabsTable";
import Song from "./components/Song";
import Create from "./components/Create";
import Footer from "./components/Footer";
import ModalController from "./components/modals/ModalController";
import ModalContextProvider from './contexts/ModalContext';
import LoginBox from './components/LoginBox';

function App() {

  return (
    <Router>
    <ModalContextProvider>
        <div className="App max-w-screen-2xl mx-auto m-10 min-h-screen p-4">
          <Navbar />
          <Route exact path="/">
            <h1 className="text-5xl mt-10">Welcome to <span className="text-primary">fidis!</span></h1>
            <div className="flex justify-evenly items-center">
              <HomeImg />
              <div className="m-1">
                <RecentlyPlayed />
                <LoginBox />
              </div>
            </div>
            <h2 className="text-4xl">Find chords of your fav song, take guitar and play!</h2>
          </Route>
          <Route exact path="/tabs">
            <TabsTable />
          </Route>
          <Route path="/song/:id" render={(props) => (
            <Song id={props.match.params.id} />
          )} />
          <Route path="/create/">
            <Create />
          </Route>
        </div>
        <ModalController />
        <Footer />
      </ModalContextProvider>
    </Router>
  );
}

export default App;
