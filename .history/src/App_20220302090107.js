import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Pages/views/Home/Home';
import AboutUs from "./Pages/Common/AboutUs/AboutUs";
import ContractUs from "./Pages/Common/ContractUs/ContractUs";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import NotFound from './Pages/Common/NotFound/NotFound';
import Login from "./Pages/Login/Login";
import Services from "./Pages/Services/Services";



function App() {
    return ( 
        <>
        <BrowserRouter>
        <Switch>
            <Header/>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/home'>
                <Home/>
            </Route>
            <Route path='/Services'>
                <Services/>
            </Route>
            <Route path='/AboutUs'>
                <AboutUs/>
            </Route>
            <Route path='/contractUs'>
                <ContractUs/>
            </Route>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
            <Footer/>
        </Switch>
        </BrowserRouter>
        
        
        </>
    );
}

export default App;