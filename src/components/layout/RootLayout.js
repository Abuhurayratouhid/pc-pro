import Footer from "../Footer";
import Navbar from "../Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
