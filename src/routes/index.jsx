import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Footer, Loader, Navbar } from "../components";
import { Home, BlogList, BlogDetail } from "../pages";
import RequireAuth from "./PrivateRoute";

const LazyDashboard = React.lazy(() => import("../pages/Dashboard"));
const LazyNotFound = React.lazy(() => import("../pages/NotFound"));
const LazyLogin = React.lazy(() => import("../pages/Login"));
const LazySignup = React.lazy(() => import("../pages/Signup"));

const CustomRoutes = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/signup" element={<LazySignup />} />
          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <LazyDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/blog-list"
            element={
              <RequireAuth>
                <BlogList />
              </RequireAuth>
            }
          />
          <Route
            path="/blog-detail/:id"
            element={
              <RequireAuth>
                <BlogDetail />
              </RequireAuth>
            }
          />
          <Route path="*" element={<LazyNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default CustomRoutes;
