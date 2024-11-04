import React from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useProduction } from "hooks";

const GuestLayout: React.FC = () => {
  const isProduction = useProduction();

  return (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      {!isProduction && <TanStackRouterDevtools position="bottom-right" />}
    </>
  );
};

export default GuestLayout;
