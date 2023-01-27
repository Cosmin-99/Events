import { useRef, useState } from 'react';
import classes from './new-comment.module.scss';

export function NewComment(props: any) {
  const [isInvalid, setIsInvalid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  })

  function sendCommentHandler(event: any) {
    event.preventDefault();

    if (
      !formData.email ||
      formData.email.trim() === '' ||
      !formData.email.includes('@') ||
      !formData.name ||
      formData.name.trim() === '' ||
      !formData.comment ||
      formData.comment.trim() === ''
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: formData.email,
      name: formData.name,
      text: formData.comment,
    });
  }

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' onChange={(e) => setFormData({...formData, name: e.target.value})}/>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea id='comment' rows={5} onChange={(e) => setFormData({...formData, comment: e.target.value})}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  );
}