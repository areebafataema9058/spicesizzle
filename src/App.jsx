import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import GalleryCards from "./pages/GalleryCards";
import Service from "./components/Service";
import ServiceDetail from "./pages/ServiceDetail";
import MainDish from "./components/MainDish";
import AllDishes from "./pages/AllDishes";
import MenuCategories from "./components/MenuCategories";
import MenuCategory from "./components/MenuCategory";
import Footer from "./components/Footer";
import Location from "./components/Location"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainDish />} />
        <Route path="/all-dishes" element={<AllDishes />} />
        <Route path="/menucategories" element={<MenuCategories />} />
        <Route path="/menu/:category" element={<MenuCategory />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<GalleryCards />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Location />
      <Footer />
    </>
  );
};

export default App;
