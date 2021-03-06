import logo from './logo.svg';
import './App.css';
import Background from "./Background"
import Main from "./Main"
import Info from "./Info"
import AboutUs from "./AboutUs"
import Registration from "./Registration"
import Events from './Events';
import Resources from './Resources';
import EventInfo from "./EventInfo"
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
    {path:"/AboutUs", element:<AboutUs/>},
    {path:"/Registration", element:<Registration/>},
    {path:"/Events", element:<Events/>},
    {path:"/Resources", element:<Resources/>},
    {path:"/api/event/:id", element:<EventInfo/>}

  ])
  return routes; 
}

function App() {
  return (
    <>

    <Router>
        <RouteWrapper></RouteWrapper>
    </Router>

    </>
  );
}

export default App;
