import Register from "./auth/Register";
import Login from "./auth/Login";

import ActivitiesPage from "./activities/ActivitiesPage.jsx";
import Error404 from "./Error404.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import ActivityDescription from "./activities/ActivityDescription.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<ActivitiesPage />}></Route>
        <Route path="/activities/:id" element={<ActivityDescription />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
