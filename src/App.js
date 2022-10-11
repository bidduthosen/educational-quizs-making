import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
