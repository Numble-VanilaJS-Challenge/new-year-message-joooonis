import Home from './pages/home';
import Post from './pages/new';
import Detail from './pages/detail';
import { init } from './libs/router';
import Navigate from './components/Navigate';

export default function App({ target }) {
  this.route = () => {
    const { pathname } = location;
    target.innerHTML = '';

    new Navigate({ target }).render();

    if (pathname === '/') {
      new Home({ target }).render();
    } else if (pathname.indexOf('/post/') === 0) {
      const messageId = pathname.split('/')[2];
      if (messageId) {
        new Detail({ target, messageId }).render();
      }
    } else if (pathname === '/new') {
      new Post({ target }).render();
    }
  };

  init(this.route);
  this.route();

  window.addEventListener('popstate', this.route);
}
