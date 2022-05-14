import { Route, Routes , Navigate } from 'react-router-dom';
import AppRoutes from './routes';

// import Components
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ProtectedRoute from './Components/ProtectedRoute';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                {
                    AppRoutes.map((prop, key) => {
                        if (prop.redirect) {
                            return <Navigate from={prop.path} to={prop.pathTo} key={key} />
                        } else {
                            return <Route {...prop} key={key} />
                        }
                    })
                }
            </Routes>
            <Footer />
        </>
    )
}