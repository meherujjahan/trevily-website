import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../src/Pages/views/Home/Home';
import AuthProvider from "./Context/AuthProvider";
import AddService from "./Pages/BookingServices/AddService/AddService";
import DetailsServices from "./Pages/BookingServices/DetailsService/DetailsServices";
import ManageOrder from "./Pages/BookingServices/ManageOrder/ManageOrder";
import MyOrder from "./Pages/BookingServices/MyOrder/MyOrder";
import Footer from "./Pages/Common/Footer/Footer";
import Header from "./Pages/Common/Header/Header";
import NotFound from './Pages/Common/NotFound/NotFound';
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Services from "./Pages/Services/Services";



function App() {
    return ( 
        
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
            <Route path='/myOrder'>
                <MyOrder/>
            </Route>
            <Route path='/detailsService'>
                <DetailsServices/>
            </Route>
            <Route path='/addService'>
                <AddService />
            </Route>
            <Route path='/manageOrder'>
                <ManageOrder/>
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
        
        
        
    );
}

export default App;