import logo from './logo.svg';
import './App.css';
import Background from "./Background"
import Main from "./Main"
import Info from "./Info"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes
} from "react-router-dom";

function RouteWrapper()
{
  let routes = useRoutes([
    {path:"/", element:<Main/>},
    {path:"/Info", element:<Info/>},
  ])
  return routes; 
}

function App() {
  return (
    <>

<Background/>
    <Router>
        <RouteWrapper></RouteWrapper>
    </Router>

    </>
  );
}

export default App;
