import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Pages/views/Home/Home';
import NotFound from './Pages/Common/NotFound/NotFound';



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
        </Switch>
        </BrowserRouter>
        
        
        </>
    );
}

export default App;