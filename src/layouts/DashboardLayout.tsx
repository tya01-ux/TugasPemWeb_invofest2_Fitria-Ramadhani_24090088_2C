import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-[#F8D7DA] flex flex-col justify-between py-6 px-4 rounded-r-3xl shadow-sm">

        {/* ATAS */}
        <div>
          <h1 className="text-xl font-semibold text-red-900 mb-8 px-2">
            Invofest
          </h1>

          {/* MENU */}
          <ul className="flex flex-col gap-2">

            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-red-900 text-white"
                      : "text-red-900 hover:bg-red-200"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/category"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-red-900 text-white"
                      : "text-red-900 hover:bg-red-200"
                  }`
                }
              >
                Category
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/speaker"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-red-900 text-white"
                      : "text-red-900 hover:bg-red-200"
                  }`
                }
              >
                Pembicara
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/event"
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-sm transition ${
                    isActive
                      ? "bg-red-900 text-white"
                      : "text-red-900 hover:bg-red-200"
                  }`
                }
              >
                Event
              </NavLink>
            </li>

          </ul>
        </div>

        {/* BAWAH */}
        <div className="px-2">
          <button
            onClick={handleLogout}
            className="w-full py-2 text-sm bg-red-900 text-white rounded-lg hover:bg-red-800 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
}