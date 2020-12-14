import SignIn from './components/SignIn';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ChatRooms from './components/ChatRooms'


// these are all your typical imports from react router dom
// Wrap components that you want routing functionality in with BrowseRouter (gives them ability to route but do not have any routes)

function App() {
 // fetch('chatRooms').then(data => data.text()).then(res => document.getElementById('title').innerHTML = res);;
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <SignIn></SignIn>
          <Route path='/ChatRoom' component={ChatRooms}></Route>
          
        </Router>
      </header>
    </div>
  );
}

export default App;
