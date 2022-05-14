// import Pages
import Content from '../Pages/Home/Content';
import Article from '../Pages/Article/Article';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/SignUp/SignUp'
import CreateArticle from '../Pages/CreateArticle/CreateArticle';
import Blog from '../Pages/Blog/Blog';
import Articles from '../Pages/Articles/Articles';
import NotFound from '../Pages/NotFound/NotFound';
import Profile from '../Pages/Profile/Profile';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Team from '../Pages/Team/Team';

// import components
import ProtectedRoute from '../Components/ProtectedRoute';

const AppRoutes = [
  {
    path: '/articles/page',
    element: <Articles />,
  },
  {
    path: '/articles/page/:page',
    element: <Articles />,
  },
  {
    path: '/article/:slug',
    element: <ProtectedRoute><Article /></ProtectedRoute>,
    private: true
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/team',
    element: <Team />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/createArticle',
    element: <ProtectedRoute><CreateArticle /></ProtectedRoute>,
    private: true
  },
  {
    path: '/:user',
    element: <ProtectedRoute><Profile /></ProtectedRoute>,
    private: true
  },
  { path: '/',
    element: <Content />
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
  { 
    path: '*',
    element: <NotFound />
  }
]

export default AppRoutes;