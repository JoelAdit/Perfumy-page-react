import Navbar from "./components/Navbar";
import Search from "./components/Searchbar";
import Product from "./components/Product";
import Contacts from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar> </Navbar>
      <Search> </Search>
      <Product></Product>
      <About></About>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}
export default App;
