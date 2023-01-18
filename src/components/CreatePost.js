import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import styled from 'styled-components';
// import classes from './Button.module.css';

const StyledButton = styled.button`
height: 33px;
    background: #4caf50;
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
`;

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <StyledButton>Create Post</StyledButton>
      </form>
    </div>
  );
}

export default CreatePost;
