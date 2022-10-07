import "./App.css"
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { SignInScreen } from "./routes/screens/SignInScreen"
import { ErrorPage } from "./routes/aux_pages/ErrorPage"
import { LandingScreen } from "./routes/screens/LandingScreen"
import { FindResultsScreen } from "./routes/screens/FindResultsScreen"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-in",
    element: <SignInScreen />,
    errorElement: <ErrorPage />,
  },
  // { path: "sign-up", element: <SignUpScreen />, errorElement: <ErrorPage /> },
  {
    path: "/find-results",
    element: <FindResultsScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/find-results/:textToSearch",
    element: <FindResultsScreen />,
    errorElement: <ErrorPage />,
  },
])

export const App = () => {
  return <RouterProvider router={Router} />
}
