import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import NewsletterPage from "./pages/NewsLetterSignUpPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import EventRoot from "./pages/EventRoot";
import {loader as eventLoader } from "./pages/EventsPage";
import {loader as eventDetailsLoader, action as deleteEventAction } from "./pages/EventDetailPage";
import {action as updateEventAction } from "./pages/NewEventPage";
import {action as newsletterAction } from "./pages/NewsLetterSignUpPage";

function App() {
  const router = createBrowserRouter([
    { path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage />},
        { path: "events", 
          element: <EventRoot />, 
          children: [
            { index: true, 
              element: <EventsPage />,             loader: eventLoader},
            {
              path: ":id",
              id: "event-details",
              loader: eventDetailsLoader,
              children: [
                { index: true, 
                  element: <EventDetailPage />, 
                  loader: eventDetailsLoader, 
                  action: deleteEventAction
                },
                { path: "edit", 
                  element: <EditEventPage />, 
                  action: updateEventAction
                },
              ]
            },
            { path: "new", 
              element: <NewEventPage />, 
              action: updateEventAction
            },
        ]},        
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction
        }
      ]}
  ]);

  return <RouterProvider router={router} />;
}

export default App;
