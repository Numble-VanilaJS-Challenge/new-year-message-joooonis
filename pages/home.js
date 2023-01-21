import MessageList from '../components/MessageList';
import { request } from '../libs/api';

export default function Home({ target }) {
  const page = document.createElement('div');
  page.className = 'home';

  page.innerHTML = `<button>새 글 작성하기</button>`;
  page.querySelector('button').addEventListener('click', () => {
    window.location.href = '/post';
  });

  this.render = () => {
    const messageList = new MessageList({
      target: page,
      initialState: this.state,
    });
    target.appendChild(page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const fetchPost = async () => {
    const { posts } = await request('posts');
    this.setState(posts);
  };

  fetchPost();
}
