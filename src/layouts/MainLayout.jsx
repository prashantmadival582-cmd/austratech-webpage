import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = ({ children }) => {
  return (
    <>
      <a href="#main-content" className="skip-to-main">Skip to main content</a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
