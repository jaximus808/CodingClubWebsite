import logo from './logo.svg';
import './App.css';
import Background from "./Background"
import Main from "./Main"
import Info from "./Info"
import AboutUs from "./AboutUs"
import Registration from "./Registration"
import Events from './Events';
import Resources from './Resources';
import Opening from './Opening';
import RoboticsMain from "./RoboticsMain"
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
    {path:"/", element:<Opening/>},
    {path:"/CodingClub", element:<Main/>},
    {path:"/CodingClub/Info", element:<Info/>},
    {path:"/CodingClub/AboutUs", element:<AboutUs/>},
    {path:"/CodingClub/Registration", element:<Registration/>},
    {path:"/CodingClub/Events", element:<Events/>},
    {path:"/CodingClub/Resources", element:<Resources/>},
    {path:"/RoboticsClub", element:<RoboticsMain/>}

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
