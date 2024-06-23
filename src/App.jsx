import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from './components/ListPage';
import Layout from "./components/Layout";
import Login from './components/pages/Login'
import SinglePage from './components/pages/SinglePage';
import ProfilePage from './components/ProfilePage';
import HomeLayout from './components/HomeLayout';
import SignUp from './components/pages/SignUp';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Discover from "./components/pages/Discover";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />
      , children: [
        {
          path: "/escape-and-explore/",
          element: <HomeLayout />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/discover",
          element: <Discover />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
