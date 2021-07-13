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

function App() {
  let list = [
    {title: "Shameless", artist:"Camila Cabello", chords:["C","G","D"]},
    {title: "Perfect Machine", artist:"Starset", chords:["C","G","D"]},
    {title: "Come home", artist:"OneRepublic", chords:["C","G","D"]},
    {title: "Lose you too", artist:"Shy Martin", chords:["C","Am","D"]},
    {title: "Ghost", artist:"Ryan Caraveo", chords:["C","G","D"]}
  ]
  let song = {
    title: "Shameless",
    artist:"Camila Cabello",
    chords:["C","G","D"],
    text: `
          Don't spe{C}ak, no, don't try
          It's been a secret for the longest time
          Don't run (oh), no, don't hide
          Been running from it for the longest time
          So many mornings{Am}, I woke up confused
          In my dreams, I do anything I want to you
          My emotions are naked, they're taking{D} me out of my mind
          Right now, I'm shameless
          Screamin' my lungs out for ya
          Not afraid to face it
          I need you more than I want to
          Need you more {G}than I want to
          Show me you're shameless
          Write it on my neck, why don't ya?
          And I won't erase it
          I need you more than I want to
          I need you more than I want to
          No, uh, uh, don't wanna do this now
          No, uh, uh, don't wanna do this now
          No, uh, uh, don't wanna do this now
          No, uh, uh, don't wanna do this now
          So we're there, now it's real
          Now that you have me, do you want me still?…`
  }
  let chordsImg = {
    C: "cdur.svg",
    G: "gdur.svg",
    D: "dmol.svg"
  }
  let chords = ["C","G","D","E","Am"]


  return (
    <Router>
    <ModalContextProvider>
        <div className="App max-w-screen-2xl mx-auto m-10 min-h-screen">
          <Navbar />
          <Route exact path="/">
            <h1 className="text-5xl mt-10">Welcome to <span className="text-primary">fidis!</span></h1>
            <div className="flex justify-evenly items-center">
              <HomeImg />
              <div className="m-1">
                {/* <MusicBox title = "Shameless" artist = "Camila Cabello"/> */}
                <RecentlyPlayed list = {list}/>
              </div>
            </div>
            <h2 className="text-4xl">Find chords of your fav song, take guitar and play!</h2>
          </Route>
          <Route exact path="/tabs">
            <TabsTable list = {list}/>
          </Route>
          <Route path="/song/:id" render={(props) => (
            <Song id={props.match.params.id} chordsImg = {chordsImg}/>
          )} />
          <Route path="/create/">
            <Create chords={chords}/>
          </Route>
        </div>
        <ModalController />
        <Footer />
      </ModalContextProvider>
    </Router>
  );
}

export default App;
