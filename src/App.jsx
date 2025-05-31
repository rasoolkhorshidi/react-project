import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import ArticlePage from "./pages/articlePage/Articlepage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/404/404";
function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="/createarticle" element={<CreateArticle />} />
    </Routes>
  );
}

export default App;
