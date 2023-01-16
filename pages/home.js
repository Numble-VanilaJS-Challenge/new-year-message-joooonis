import { request } from '../libs/api';

export default function Home({ target }) {
  const page = document.createElement('div');
  page.className = 'Home';

  page.innerHTML = `<h1>Home</h1>`;
  this.render = () => {
    target.appendChild(page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchPost = async () => {
    const posts = await request('posts');
    this.setState(posts);
  };

  fetchPost();

  if (this.state) {
    console.log('처음 랜더', this.state);
  }

  setTimeout(() => {
    console.log('1초뒤', this.state);
  }, 1000);
}
