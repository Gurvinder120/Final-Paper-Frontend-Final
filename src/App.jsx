import "./App.css";
import Nav from "./components/Navbar";
import Cards from "./components/cards";
import Categories from "./components/categories";
import FlashSales from "./components/flashSales";
import Footer from "./components/footer";
import KnowAboutUs from "./components/knowAboutUs";
import Options from "./components/options";
import Sales from "./components/sales";
import Trending from "./components/trending";
import Services from "./components/services and team";
import ContactUs from "./components/contact";
import Blog_1 from "./components/blog-1";
import Blog_Page_Nav from "./components/blog-page-nav";
import Blog_Cards from "./components/blog-cards";
import Sample_Blogs from "./components/sample-blog";
import Blog_Card_6 from "./components/card-6";
// import Blog_Footer from "./components/blogFooter";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Sign_in from "./components/signIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav />
                <Options />
                <Categories />
                <Sales />
                <FlashSales />
                <Trending />
                <Cards />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/index.html"
            element={
              <>
                <Nav />
                <Options />
                <Categories />
                <Sales />
                <FlashSales />
                <Trending />
                <Cards />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Nav />
                <KnowAboutUs />
                <Services />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog_Page_Nav />
                <Blog_1 />
                <Blog_Cards />
                <Sample_Blogs />
                <Blog_Card_6 />
                <Footer />
              </>
            }
          />
          <Route
            path="/signIn"
            element={
              <>
                <Nav />
                <Options />
                <Sign_in />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
