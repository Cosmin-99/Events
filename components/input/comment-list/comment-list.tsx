import classes from './comment-list.module.scss';
import useSWR from "swr";
import { getComments } from '../../../services/comment';

export function CommentList() {

  const { data: comments } = useSWR("/api/comments", getComments)

  return (
    <ul className={classes.comments}>
     {comments?.map((el) => (
      <li key={el.id}>
        <p>{el.text}</p>
        <div>
          By <address>{el.name}</address>
        </div>
      </li>))}
    </ul>
  );
}