import css from "./JobAnnouncement.module.css"

export const JobAnnouncement = ({ post }) => {
  return (
    <div className={css.container}>
      <span>{post.editor}</span>
      <span>{post.location}</span>
      <span>{post.modality}</span>
      <h3>{post.title}</h3>
      <span>{post.content}</span>
    </div>
  )
}
