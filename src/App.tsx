import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SignInForm from './components/sign-in/SignInForm'
import SignUpForm from './components/sign-up/SignUpForm'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import ResetPassword from './components/ForgotPassword/ResetPassword'
import OTPVerification from './components/ForgotPassword/OTPVerification'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Layout from './components/ui/Layouts'
import Checkout from './pages/Checkout'
import MyProfile from './pages/MyProfile/MyProfile'
import PaymentMethod from './pages/shop/PaymentMethod'
import ReviewOrder from './pages/shop/ReviewOrder'
import ShippingAddress from './pages/shop/ShippingAddress'
import Sidebar from './pages/MyProfile/Sidebar'
import MyOrders from './pages/MyProfile/MyOrders'
import Notifications from './pages/MyProfile/Notifications'
import Settings from './pages/MyProfile/Settings'
import MyWishlist from './pages/MyProfile/MyWishList'
import ManageAddress from './pages/MyProfile/ManageAddress'
import SavedCards from './pages/MyProfile/SavedCards'
import ProductListing from './pages/shop/ProductListing'
import ContactUs from './pages/contactUs/ContactUs'
import OurStory from './pages/ourSory/OurStory'
import TermsAndConditions from './pages/TermsConditions/TermsAndConditions'
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy'
import Careers from './pages/careers/Careers'
import DeliveryInformation from './pages/DeliveryInfo/DeliveryInformation'
import OrderTracking from './pages/OrderTracking'
import ReturnRefund from './pages/ReturnAndRefund'
import Chats from './pages/chats/Chats'

// import ShopSection from './pages/shop/ShopSection'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/otp-verify" element={<OTPVerification/>} />
          {/* <Route path="/shop-now" element={<ShopSection/>} /> */}
          <Route path="/product-details" element={<Layout><ProductDetailsPage /></Layout>} />
          <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
          <Route path="/shipping-address" element={<Layout><ShippingAddress /></Layout>} />
          <Route path="/payment" element={<Layout><PaymentMethod /></Layout>} />
          <Route path="/review-order" element={<Layout><ReviewOrder /></Layout>} />
          <Route path="/product-lists" element={<Layout><ProductListing /></Layout>} />
          <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
          <Route path="/about-us" element={<Layout><OurStory /></Layout>} />
          <Route path="/terms-and-conditions" element={<Layout><TermsAndConditions /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/delivery-info" element={<Layout><DeliveryInformation /></Layout>} />
          <Route path="/order-status" element={<Layout><OrderTracking /></Layout>} />
          <Route path="/return-refund" element={<Layout><ReturnRefund /></Layout>} />
          <Route path="/chats" element={<Layout><Chats /></Layout>} />
          {/* <Route path="/profile" element={<Layout><Sidebar /></Layout>} /> */}
          <Route path="/profile/my-order" element={<Layout><Sidebar><MyOrders /></Sidebar></Layout>} />
          <Route path="/myProfile" element={<Layout><Sidebar><MyProfile /></Sidebar></Layout>} />
          <Route path="/profile/notifications" element={<Layout><Sidebar><Notifications /></Sidebar></Layout>} />
          <Route path="/profile/settings" element={<Layout><Sidebar><Settings /></Sidebar></Layout>} />
          <Route path="/profile/wishlist" element={<Layout><Sidebar><MyWishlist /></Sidebar></Layout>} />
          <Route path="/profile/addresses" element={<Layout><Sidebar><ManageAddress /></Sidebar></Layout>} />
          <Route path="/profile/cards" element={<Layout><Sidebar><SavedCards /></Sidebar></Layout>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
