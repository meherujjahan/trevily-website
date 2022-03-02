import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Pages/views/Home/Home';
import NotFound from './Pages/Common/NotFound/NotFound';
import Login from "./Pages/Login/Login";



function App() {
    return ( 
        <>
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
        </Switch>
        </BrowserRouter>
        
        
        </>
    );
}

export default App;