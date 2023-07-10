import React from "react";
import { Outlet } from "react-router-dom";

export const Parent = () => {
  return (
    <>
      <main className="p-2 mt-4 pb-4 sm:pb-2">
        <Outlet />
      </main>
    </>
  );
};
