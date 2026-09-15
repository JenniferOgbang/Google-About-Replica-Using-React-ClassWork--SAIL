import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Header from "./static/header/Header.jsx";
import Footer from "./static/footer/Footer.jsx";
import Product from "./pages/Product/Product.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />

            <Routes>
                <Route path="/" element= {<About/>}/>
                <Route path="/Product" element= {<Product/>}/>
            </Routes>

                <Footer />
            </BrowserRouter>
            


           
        </div>
    );
};

export default App;