import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/layout";
import ErrorPage from "@/pages/error";
import NotFoundPage from "@/pages/not-found";
import ImpactPage from "@/pages/impact";
import DataPage from "@/pages/data";
import ReportPage from "@/pages/report";
import LearnPage from "@/pages/learn";
import DocsPage from "@/pages/docs";
import InteligencePage from "@/pages/inteligence";
import SurveysPage from "@/pages/surveys";
import FlowsPage from "@/pages/flows";
import TasksPage from "@/pages/tasks";
import ConfigurationPage from "@/pages/configuration";
import SupportPage from "@/pages/support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/surveys" replace />,
      },
      {
        path: "/impact",
        element: <ImpactPage />,
      },
      {
        path: "/data",
        element: <DataPage />,
      },
      {
        path: "/reporting",
        element: <ReportPage />,
      },
      {
        path: "/learn",
        element: <LearnPage />,
      },
      {
        path: "/docs",
        element: <DocsPage />,
      },
      {
        path: "/intelligence",
        element: <InteligencePage />,
      },
      {
        path: "/surveys",
        element: <SurveysPage />,
      },
      {
        path: "/flows",
        element: <FlowsPage />,
      },
      {
        path: "/task",
        element: <TasksPage />,
      },
      {
        path: "/configuration",
        element: <ConfigurationPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
