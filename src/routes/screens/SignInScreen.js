import { useDispatch, useSelector } from "react-redux"
import { getUser, signIn } from "../../stores/features/userSlice"
import { useEffect, useState } from "react"
import css from "./SignIn.module.css"
import { Link, useNavigate } from "react-router-dom"

export const SignInScreen = () => {
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const { status: userStatus } = useSelector(getUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (userStatus === "succeeded") {
      navigate("/")
    }
  }, [userStatus])

  const login = () => {
    dispatch(signIn(credentials))
  }

  const handleCredential = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className={css.page}>
      <div className={css.left}>
        <img className={css.image} src="/images/bg-2.jpg" alt="..." />
      </div>
      <div className={css.right}>
        <div className={css.form}>
          <h2 className={css.display}>Open Job</h2>
          <input
            className={css.input}
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleCredential}
          />
          <input
            className={css.input}
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleCredential}
          />
          <button className={css.button} onClick={login}>
            Login
          </button>
          <Link className={css.link} to="/sign-up">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
