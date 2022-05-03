import { Route, Routes } from 'react-router-dom';

// import Pages
import Header from './Components/Layout/Header';
import Content from './Pages/MainPage/Content';
import Article from './Pages/Article/Article';
import LoginAndSignUp from './Pages/Login&SignUp/LoginAndSignUp';
import CreateArticle from './Pages/CreateArticle/CreateArticle';
import Blog from './Pages/Blog/Blog';
import Articles from './Pages/Articles/Articles';
import NotFound from './Pages/NotFound/NotFound';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/articles/page" element={<Articles />} />
                <Route path="/articles/page/:page" element={<Articles />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<p>About Page</p>} />
                <Route path="/team" element={<p>Team</p>} />
                <Route path="/contact" element={<p>Contact Page</p>} />
                <Route path="/Login&Signup" element={<LoginAndSignUp />} />
                <Route path="/CreateArticle" element={<CreateArticle />} />
                <Route path="/article/:slug" element={<Article />} />
                {["/not-found" , "*"].map((path , index) => <Route path={path} element={<NotFound />} key={index} />)}
            </Routes>
        </>
    )
}