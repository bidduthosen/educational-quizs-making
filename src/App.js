import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Quizs from './components/quizs/Quizs';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound';

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
        },
        {
          path: '/quizs/:quizeId',
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`) ,
          element: <Quizs></Quizs> 
        },
        { 
          path: '/statistics', 
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog>}
      ]
    },
    {path: '*', element: <NotFound></NotFound>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
