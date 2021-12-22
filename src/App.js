import "./index.scss";
import Navbar from "components/Navbar/Navbar";
import MainContent from "components/MainContent/MainContent";
import About from "components/About/About";
import Features from "components/Features/Features";
import Download from "components/Download/Download";
import Testimonials from "components/Testimonials/Testimonials";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_container">
        <MainContent />
        <About />
        <Features />
        <Download />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
