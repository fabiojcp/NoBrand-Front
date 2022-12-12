import { Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import ManagementLanding from "../pages/management";
import ManagementHome from "../pages/managementHome";

export default function Router() {
    return (
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/management" element={<ManagementLanding />} />
        <Route path="/management/home" element={<ManagementHome />} />
      </Routes>
    );
  }
  