import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import type { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks";
import { logoutUser } from "../../store/user/userThunks";

const linkBase = "text-sm font-medium transition-colors pb-1";
const linkActive = "text-gray-900 border-b-2 border-gray-900";
const linkInactive = "text-gray-700 hover:text-gray-900";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { i18n, t } = useTranslation();

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

  const setLanguage = (lang: "fr" | "en") => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="flex items-center gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkInactive}`
        }
      >
        {t("nav.home")}
      </NavLink>

      {isLogged && isAdmin && (
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? linkActive : linkInactive}`
          }
        >
          {t("nav.admin")}
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
            {t("nav.login")}
          </NavLink>

          {!registrationsClosed && (
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              {t("nav.register")}
            </NavLink>
          )}
        </>
      )}

      {isLogged && (
        <button
          onClick={handleLogout}
          className="ml-4 rounded-md bg-red-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800"
        >
          {t("nav.logout")}
        </button>
      )}

      <div className="ml-auto flex items-center gap-4">
        <div className="h-5 border-l border-gray-300" />

        <button
          onClick={() => setLanguage("fr")}
          className={`${linkBase} ${
            i18n.language === "fr" ? linkActive : linkInactive
          }`}
        >
          FR
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`${linkBase} ${
            i18n.language === "en" ? linkActive : linkInactive
          }`}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
