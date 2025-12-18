import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import type { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/user/userThunks";

const linkBase = "text-sm font-medium transition-colors pb-1";
const linkActive = "text-gray-900 border-b-2 border-gray-900";
const linkInactive = "text-gray-700 hover:text-gray-900";

const Navigation = () => {
  const dispatch = useAppDispatch();

  const registrationsClosed = useSelector(
    (state: RootState) => state.settings.registrationsClosed
  );
  const isLogged = useSelector((state: RootState) => state.user.isLogged);
  const isAdmin = useSelector(
    (state: RootState) => state.user.user?.role === "admin"
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="flex items-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }
      >
        Accueil
      </NavLink>

      {isLogged && isAdmin && (
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          Admin
        </NavLink>
      )}

      {!isLogged && (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Login
          </NavLink>

          {!registrationsClosed && (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Register
            </NavLink>
          )}
        </>
      )}

      {isLogged && (
        <button
          onClick={handleLogout}
          className="ml-4 rounded-md bg-red-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navigation;
