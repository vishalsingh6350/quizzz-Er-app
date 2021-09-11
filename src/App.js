import './App.css';
import Header from './components/Header';
import StartScreen from './components/StartScreen';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
import Choice from './components/Choice';
import Questions from './components/Questions';
import EachQuestion from './components/EachQuestion';
import {StatesProvider} from './components/helpers/contexts/GlobalStates'
import Scores from './components/Scores';
import ErrorPage404 from './components/ErrorPage404';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
            <StatesProvider>
            <Switch>
                <Route path='/choice'>
                  <Choice/>
                </Route>
                <Route exact path='/choice/computer/:index'>
                  <EachQuestion category='computer'/>
                </Route>
                {/* <Route exact path='/choice/computer'>
                  <Questions category='computer'/>
                </Route> */}
                {/* <Route exact path='/choice/mathematics'>
                  <Questions category='mathematics'/>
                </Route> */}
                <Route path='/choice/mathematics/:index'>
                  <EachQuestion category='mathematics'/>
                </Route>
                {/* <Route exact path='/choice/sports'>
                  <Questions category='sports'/>
                </Route> */}
                <Route path='/choice/sports/:index'>
                  <EachQuestion category='sports'/>
                </Route>
                {/* <Route exact path='/choice/random'>
                  <Questions category='random'/>
                </Route> */}
                <Route path='/choice/random/:index'>
                  <EachQuestion category='random' />
                </Route>
                <Route exact path='/scores'>
                  <Scores/>
                </Route>
                <Route exact path='/'>
                  <StartScreen/>
                </Route>
                <Route>
                  <ErrorPage404/>
                </Route>
            </Switch>
            </StatesProvider>
      </div>
    </Router>
  );
}

export default App;
