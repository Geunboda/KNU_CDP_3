// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToExamine from './pages/ToExamine';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/ToExamine" component={ToExamine} />
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}
export default App;
