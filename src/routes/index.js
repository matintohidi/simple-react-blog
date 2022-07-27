// import Pages
import Content from '../pages/Home/Content';
import Article from '../pages/Article/Article';
import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/SignUp'
import CreateArticle from '../pages/CreateArticle/CreateArticle';
import Blog from '../pages/Blog/Blog';
import Articles from '../pages/Articles/Articles';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Team from '../pages/Team/Team';

// import components
import ProtectedRoute from '../Components/ProtectedRoute';

const AppRoutes = [
  {
    path: '/articles',
    element: <Articles />,
  },
  {
    path: '/article/:slug',
    element: <Article />,
    private: true
  },
  {
    path: '/blog',
    element: <Blog />,
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
    path: '/:username',
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