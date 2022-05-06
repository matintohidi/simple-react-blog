import { Route, Routes } from 'react-router-dom';

// import Pages
import Header from './Components/Layout/Header';
import Content from './Pages/Home/Content';
import Article from './Pages/Article/Article';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp'
import CreateArticle from './Pages/CreateArticle/CreateArticle';
import Blog from './Pages/Blog/Blog';
import Articles from './Pages/Articles/Articles';
import NotFound from './Pages/NotFound/NotFound';
import Profile from './Pages/Profile/Profile';
import Footer from './Components/Layout/Footer';

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
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/CreateArticle" element={<CreateArticle />} />
                <Route path="/:user" element={<Profile />} />
                <Route path="/article/:slug" element={<Article />} />
                {["/not-found" , "*"].map((path , index) => <Route path={path} element={<NotFound />} key={index} />)}
            </Routes>
            <Footer />
        </>
    )
}