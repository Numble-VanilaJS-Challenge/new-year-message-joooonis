import { request } from '../libs/api';

export default function Detail({ target, messageId }) {
  this.state = {
    messageId,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const page = document.createElement('div');
  page.className = 'message-detail';

  page.innerHTML = `
    <h1>Detail</h1>
  `;

  const fetchPost = async () => {
    const { post } = await request(`post/${messageId}`);
    this.setState(post);
  };

  fetchPost();

  this.render = () => {
    target.appendChild(page);
  };
}
