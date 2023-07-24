import { 
  createBrowserRouter,
  RouterProvider, 
  ScrollRestoration,
  Outlet
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { productsData } from './api/Api';

const Layout = ()=>{
  return <div>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path: '/cart',
        element: <Cart/>
      },
    ]
  }
]) 

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
