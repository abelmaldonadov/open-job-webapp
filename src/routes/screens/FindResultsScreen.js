import { useDispatch, useSelector } from "react-redux"
import {
  findPostsByTitleIsLike,
  getPosts,
} from "../../stores/features/postsSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import css from "./FindResults.module.css"
import { JobAnnouncement } from "../../components/job-announcement/JobAnnouncement"

export const FindResultsScreen = () => {
  const { textToSearch } = useParams()
  const dispatch = useDispatch()
  const {
    status: postsStatus,
    error: postsError,
    data: postsData,
  } = useSelector(getPosts)

  useEffect(() => {
    if (textToSearch) {
      dispatch(findPostsByTitleIsLike({ title: textToSearch }))
    }
  }, [])

  return (
    <div className={css.page}>
      <h2>Fast apply jobs ⚡️</h2>
      <p>
        Actively hiring now / Fast apply to receive hands on support from Arc
        recruiters
      </p>
      <div className={css.canvas}>
        {postsStatus === "idle" && <div>idle</div>}
        {postsStatus === "loading" && <div>loading</div>}
        {postsStatus === "succeeded" && (
          <div>
            {postsData.map((item) => (
              <JobAnnouncement key={item.id} post={item} />
            ))}
          </div>
        )}
        {postsStatus === "failed" && <div>{postsError}</div>}
      </div>
    </div>
  )
}
