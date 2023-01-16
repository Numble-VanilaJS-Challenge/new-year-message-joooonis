import MessageList from '../components/MessageList';
import { request } from '../libs/api';

export default function Home({ target }) {
  const page = document.createElement('div');
  page.className = 'Home';

  page.innerHTML = `<button>새 글 작성하기</button>`;
  page.addEventListener('click', () => {
    window.location.href = '/post';
  });
  this.render = () => {
    target.appendChild(page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchPost = async () => {
    const { posts } = await request('posts');
    this.setState(posts);
  };

  fetchPost();

  setTimeout(() => {
    new MessageList({
      target: page,
      initialState: this.state,
    });
  }, 1000);
}
