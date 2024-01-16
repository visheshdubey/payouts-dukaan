import App from "@/App";
import Payouts from "@/pages/Payouts";

export const dashboardRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Payouts />,
      },
    ],
  },
];
