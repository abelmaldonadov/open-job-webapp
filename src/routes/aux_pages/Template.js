import { useDispatch } from "react-redux"
import { signOut } from "../../stores/features/userSlice"
import css from "./Template.module.css"
import { Link, useLocation } from "react-router-dom"

export const Template = ({ children }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const isActive = (path) => ({
    route: location.pathname === path ? css.activeRoute : "",
    link: location.pathname === path ? css.activeLink : "",
  })

  const logOut = () => {
    dispatch(signOut())
  }

  return (
    <div className={css.page}>
      <div className={css.navbar}>
        <div className={`${css.route} ${isActive("/").route}`}>
          <Link className={`${css.link} ${isActive("/").link}`} to="/">
            Home
          </Link>
        </div>
        <div className={`${css.route} ${isActive("/asd").route}`}>
          <Link className={`${css.link} ${isActive("/asd").link}`} to="/asd">
            Route 1
          </Link>
        </div>
        <div className={css.route}>
          <button onClick={logOut}>Logout</button>
        </div>
      </div>
      <div className={css.body}>{children}</div>
    </div>
  )
}
