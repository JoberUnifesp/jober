import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Enterprise from './pages/Enterprise';
import EnterpriseProfile from './pages/enterprise-profile';
import UserProfile from './pages/user-profile';
import JobVacancies from './pages/job-vacancies';
import ErrorPage from './pages/Error-page';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "jober/",
  element: <Login/> 
},
{
  path: "jober/SignUp",
  element: <SignUp />,
},
{
  path: "jober/enterprise",
  element: <Enterprise/>
},
{
  path: "jober/profile",
  element: <UserProfile/>
},
{
  path: "jober/enterprise-profile",
  element: <EnterpriseProfile/>
},
{
  path: "jober/job-vacancies",
  element: <JobVacancies/>,
},
{
  path: "jober/Erro",
  element: <ErrorPage/>
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();