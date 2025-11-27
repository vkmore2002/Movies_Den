import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
