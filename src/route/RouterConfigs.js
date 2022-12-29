import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AirBooking from "../pages/airport-transfer/Booking";
import GolfBooking from "../pages/golf-booking/Booking";
import Localcourier from "../pages/local-courier/Booking";
import CarRegistration from "../pages/car-registration/Booking";
import CarServicing from "../pages/car-servicing/Booking";

import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import ManageProfile from "../pages/ManageProfile";
import BookingHistory from "../pages/BookingHistory";
import PayNow from "../pages/PayNow";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const routes = [
  {
    path: "/Login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    path: "/Home",
    component: Home,
    exact: true,
    private: true,
  },
  {
    path: "/booking/airport-transfer",
    component: AirBooking,
    exact: true,
    private: true,
  },
  {
    path: "/booking/golf-booking",
    component: GolfBooking,
    exact: true,
    private: true,
  },
  {
    path: "/booking/local-courier",
    component: Localcourier,
    exact: true,
    private: true,
  },
  {
    path: "/Contact",
    component: Contact,
    exact: true,
    private: true,
  },
  {
    path: "/Faqs",
    component: Faqs,
    exact: true,
    private: true,
  },
  {
    path: "/ManageProfile",
    component: ManageProfile,
    exact: true,
    private: true,
  },
  {
    path: "/booking-history",
    component: BookingHistory,
    exact: true,
    private: true,
  },
  {
    path: "/booking/car-Registration",
    component: CarRegistration,
    exact: true,
    private: true,
  },
  {
    path: "/PayNow",
    component: PayNow,
    exact: true,
    private: true,
  },
  {
    path: "/booking/car-servicing",
    component: CarServicing,
    exact: true,
    private: true,
  },
  {
    path: "/TermsAndConditions",
    component: TermsAndConditions,
    exact: true,
    private: true,
  },
  {
    path: "/PrivacyPolicy",
    component: PrivacyPolicy,
    exact: true,
    private: true,
  },
];
