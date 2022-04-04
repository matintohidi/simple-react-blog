import { Route, Routes } from 'react-router-dom';

// import Pages
import Header from './Layout/Header';
import SectionContent from '../Pages/MainPage/SectionContent';
import ArticleContnet from '../Pages/ArticlePage/Article';
import Login from '../Pages/Login/Login';
import CreateArticle from '../Pages/CreateArticle/CreateArticle';
import Blog from '../Pages/Blog/Blog';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<SectionContent />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<p>About Page</p>} />
                <Route path="/team" element={<p>Team</p>} />
                <Route path="/contact" element={<p>Contact Page</p>} />
                <Route path="/LoginSignup" element={<Login />} />
                <Route path="/CreateArticle" element={<CreateArticle />} />
                <Route path="/article/:id" element={<ArticleContnet />} />
            </Routes>
        </>
    )
}