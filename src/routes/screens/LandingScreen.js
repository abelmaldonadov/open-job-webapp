import css from "./Landing.module.css"
import { BiSearch } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const LandingScreen = () => {
  const [textToSearch, setTextToSearch] = useState("")
  const navigate = useNavigate()

  const handleTextForSearch = (e) => {
    setTextToSearch(e.target.value)
  }
  const findPosts = (e) => {
    e.preventDefault()
    if (textToSearch.length >= 3) {
      navigate(`/find-results/${textToSearch}`)
    }
  }

  return (
    <div className={css.page}>
      <div className={`${css.container} ${css.header}`}>
        <div className={css.content}>
          <span className={css.logo}>Open Job</span>
          <div className={css.nav}>
            <Link to="/sign-in" className={`${css.link}`}>
              Log In
            </Link>
            <Link to="/sign-up" className={`${css.link} ${css.outline}`}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className={`${css.container} ${css.slide}`}>
        <img className={css.bg} src="/images/bg-1.jpg" alt="..." />
        <div className={css.searchBar}>
          <h2 className={css.display}>
            Radically different{" "}
            <span className={css.colorfulText}>remote job search</span> where
            companies apply to you
          </h2>
          <div className={css.controls}>
            <form className={css.box} onSubmit={findPosts}>
              <input
                className={css.input}
                placeholder="my new job..."
                value={textToSearch}
                onChange={handleTextForSearch}
              />
              <button className={css.button} onClick={findPosts}>
                <BiSearch size={25} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`${css.container} ${css.categories}`}>
        <div className={`${css.content}`}>
          <h2 className={css.display}>
            Get featured to companies and land a remote job in 14 days
          </h2>
          <div className={css.list}>
            <li>For senior developers looking for permanent remote roles</li>
            <li>Remote jobs at fast-growing tech companies and startups</li>
          </div>
          <div className={css.categoryContainer}>
            <div className={css.categoryContent}>
              <span className={css.category}>Informática</span>
              <span className={css.category}>Administración</span>
              <span className={css.category}>Contabilidad</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Infraestructura</span>
              <span className={css.category}>Informática</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Administración</span>
              <span className={css.category}>Contabilidad</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Infraestructura</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Infraestructura</span>
              <span className={css.category}>Informática</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Administración</span>
              <span className={css.category}>Contabilidad</span>
              <span className={css.category}>Redes</span>
              <span className={css.category}>Infraestructura</span>
            </div>
          </div>
        </div>
      </div>
      {/*<div className={`${css.container} ${css.business}`}>*/}
      {/*  <div className={css.content}>business</div>*/}
      {/*</div>*/}
      {/*<div className={`${css.container} ${css.news}`}>*/}
      {/*  <div className={css.content}>news</div>*/}
      {/*</div>*/}
      <div className={`${css.container} ${css.footer}`}>
        <div className={css.content}></div>
      </div>
    </div>
  )
}
