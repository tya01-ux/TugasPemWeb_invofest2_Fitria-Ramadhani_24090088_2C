import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage";
import Seminar from "./pages/Seminar";
import Talkshow from "./pages/Talkshow";
import Workshop from "./pages/Workshop";
import Competition from "./pages/Competition";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import RegisterForm from "./pages/RegisterForm";

import Dashboardindex from "./pages/dashboard/Dashboardindex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";

import CategoryIndex from "./pages/dashboard/category/ChategoryIndex";
import SpeakerIndex from "./pages/dashboard/speaker/SpeakerIndex";
import EventIndex from "./pages/dashboard/event/EventIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>

        {/* PROTECTED */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>

            <Route path="/dashboard" element={<Dashboardindex />} />

            {/* CATEGORY */}
            <Route path="/dashboard/category" element={<CategoryIndex />} />

            {/* SPEAKER */}
            <Route path="/dashboard/speaker" element={<SpeakerIndex />} />

            {/* Event */}
            <Route path="/dashboard/event" element={<EventIndex />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;