import Navigate from './components/navigate';
import Home from './pages/home';
import Post from './pages/post';
import Detail from './pages/detail';

export default function App({ target }) {
  this.route = () => {
    const { pathname } = location;
    target.innerHTML = '';

    if (pathname === '/') {
      new Home({ target }).render();
    } else if (pathname.indexOf('/post') === 0) {
      const [, , messageId] = pathname.split('/');
      new Detail({ target, messageId }).render();
    } else if (pathname === '/post') {
      new Post({ target }).render();
    }

    // 공동 컴포넌트
    new Navigate({ target }).render();
  };

  this.route();
}
