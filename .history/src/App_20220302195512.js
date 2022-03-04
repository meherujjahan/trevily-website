import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Pages/views/Home/Home';
import AuthProvider from "./Context/AuthProvider";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import NotFound from './Pages/Common/NotFound/NotFound';
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Services from "./Pages/Services/Services";



function App() {
    return ( 
        <>
        <AuthProvider>
        <BrowserRouter>
        <Header/>
        <Switch>
           
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/home'>
                <Home/>
            </Route>
            <PrivateRoute path='/services'>
                <Services/>
            </PrivateRoute>
            <PrivateRoute path='/services/:id'>
                <Services/>
            </PrivateRoute>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
            
        </Switch>
        <Footer/>
        </BrowserRouter>
        </AuthProvider>
        
        
        </>
    );
}

export default App;