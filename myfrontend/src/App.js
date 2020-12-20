import SignIn from './pages/SignIn';
import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom'
// import ChatRooms from './components/ChatRooms'
import ChatRooms from './pages/AvailableRooms';
import CreateChatRoom from './pages/CreateChatRoom';


// these are all your typical imports from react router dom
// Wrap components that you want routing functionality in with BrowseRouter (gives them ability to route but do not have any routes)

function App() {
 // fetch('chatRooms').then(data => data.text()).then(res => document.getElementById('title').innerHTML = res);;
  return (
    <div className="App">
      <Router> 
        <section>
          <Route path='/' exact component={SignIn}></Route>
        </section>

        <section>
          <Route component={ChatRooms} path='/chatRooms'></Route>
        </section>

        <section>
          <Route component={CreateChatRoom} path = '/createChatRoom'></Route>
        </section>
        {/* <ChatRooms></ChatRooms> */}
        {/* <Route path='/ChatRoom' component={ChatRooms}></Route> */}
      </Router>    
    </div>
  );
}

export default App;
