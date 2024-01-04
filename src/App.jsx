import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayOut from './layout/MainLayOut'
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import OrderList from "./pages/OrderList";
import Error from "./pages/Error"; 

const router = createBrowserRouter(
  createRoutesFromElements(

    <>
    <Route element={<MainLayOut/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/orderlist" element={<OrderList/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Route>
      <Route path='*' element={<Error/>}/>
    
    </>

    )
  )


function App() {
  

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
