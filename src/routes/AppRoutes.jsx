import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Products from "../pages/Products/Products";
import Projects from "../pages/Projects/Projects";
import Industries from "../pages/Industries/ Industries";
import Resources from "../pages/Resources/Resources";
import Contact from "../pages/Contact/Contact";
import Quote from "../pages/Quote/Quote";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;