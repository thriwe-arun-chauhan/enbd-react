
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import AirBooking from '../pages/airport-transfer/Booking';
import GolfBooking from '../pages/golf-booking/Booking';
import Localcourier from '../pages/local-courier/Booking';
import CarRegistration from '../pages/car-registration/Booking';
import CarServicing from '../pages/car-servicing/Booking';

import Contact from '../pages/contact';
import Faqs from '../pages/Faqs';
import Tandc from '../pages/Tandc';
import Manageprofile from '../pages/Manageprofile';
import BookingHistory from '../pages/BookingHistory';
import Paynow from '../pages/pay-now';




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
      'path':'/booking/airport-transfer',
      'component': AirBooking,
      exact:true,
      private:true
   },
   {
      'path':'/booking/golf-booking',
      'component': GolfBooking,
      exact:true,
      private:true
   },
   {
      'path':'/booking/local-courier',
      'component': Localcourier,
      exact:true,
      private:true
   },
   {
      'path':'/contact',
      'component': Contact,
      exact:true,
      private:true
   },
   {
      'path':'/faqs',
      'component': Faqs,
      exact:true,
      private:true
   },
   {
      'path':'/tems-and-conditions',
      'component': Tandc,
      exact:true,
      private:true  
   },
   {
      'path':'/manage-profile',
      'component': Manageprofile,
      exact:true,
      private:true
   },
   {
      'path':'/booking-history',
      'component': BookingHistory,
      exact:true,
      private:true
   },
   {
      
      'path':'/booking/car-Registration',
      'component': CarRegistration,
      exact:true,
      private:true
      
       

   },
   {
      'path':'/pay-now',
      'component': Paynow,
      exact:true,
      private:true
   },
   {
      'path':'/booking/car-servicing',
      'component': CarServicing,
      exact:true,
      private:true
   }

   


]