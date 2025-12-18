// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PaymentGateway from "./pages/Services/PaymentGateway";
import POSAndTerminal from "./pages/Services/PosAndTerminal";
import EcommercePayments from "./pages/Services/EcomPayment";
import MerchantAccountSetup from "./pages/Services/MerchentAcc";
import FraudPrevention from "./pages/Services/FraudPrevention";
import MerchantSupport from "./pages/Services/Support";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <Navbar />

        <main className="min-h-screen">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/payment-gateway"
              element={<PaymentGateway />}
            />
            <Route
              path="/services/Pos-and-terminal"
              element={<POSAndTerminal />}
            />
            <Route
              path="/services/ecommerce-payments"
              element={<EcommercePayments />}
            />
            <Route
              path="/services/merchant-account-setup"
              element={<MerchantAccountSetup />}
            />
            {/* <Route
              path="/services/merchant-account-setup"
              element={<MerchantAccountSetup />}
            /> */}
            <Route
              path="/services/fraud-prevention"
              element={<FraudPrevention />}
            />
            <Route
              path="/services/merchant-support"
              element={<MerchantSupport />}
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
