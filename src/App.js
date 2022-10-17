import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from './Login';
import {useStateValue} from './SatateProvider'

function App() {
  const[{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user?(
        <Login/>
      ):(
        <>
        <Header />

        {/* app body */}
        <div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widgets/>
        </div>
        </>
      )}
     
    </div>
  );
}

export default App;
