import "./home.css";
import FeData from "../../components/api/fetchData";
import Footer from "../../components/footer/Footer";
import Behnaz from "../../components/behnaz/behnaz";
import Navbar from "../../components/navbar/Navbar";
function Home() {
  return (
    <>
      <Navbar title="Hello, Its Behnaz :)" />
      <Behnaz />
      <FeData />
      <Footer />
    </>
  );
}

export default Home;
