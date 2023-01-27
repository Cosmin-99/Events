import { useState } from 'react';
import { Comment } from '../../../server/models/comment';
import { addComment } from '../../../services/comment';

import  { CommentList } from '../comment-list/comment-list';
import  { NewComment } from '../new-comment/new-comment';
import classes from './comments.module.scss';

export function Comments(props: {
  eventId?: string
}) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: Comment) {
    await addComment(commentData)
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}