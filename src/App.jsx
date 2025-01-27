import './App.css'

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
        <div className={""}>
            <Navigator />
            <Router />
        </div>
    </>
  )
}

export default App;
