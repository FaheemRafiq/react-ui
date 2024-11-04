import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
// Layouts
import GuestLayout from "@/layouts/GuestLayout";
// Pages
import HomePage from "@/pages/home";
import AboutPage from '@/pages/about';

const rootRoute = createRootRoute({
  component: GuestLayout,
});

// Home Page Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createRouter({ routeTree, defaultPreload: "intent" });

export default router;
