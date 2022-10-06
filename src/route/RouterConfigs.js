
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Booking from '../pages/airport-transfer/Booking';

export const routes = [
   {
      'path':'/',
      'component': Login,
      exact:true,
   },
   {
      'path':'/register',
      'component': Register,
      exact:true
   },
   {
      'path':'/home',
      'component': Home,
      exact:true,
      private:true
   },
   {
      'path':'/airport-transfer/booking',
      'component': Booking,
      exact:true,
      private:true
   }
]