import Home from './pages/home';
import Upload from './pages/upload';
import Detail from './pages/detail';
import { init } from './libs/router';

export default function App({ target }) {
  this.route = () => {
    const { pathname } = location;
    target.innerHTML = '';

    if (pathname === '/') {
      new Home({ target }).render();
    } else if (pathname.indexOf('/post/') === 0) {
      const messageId = pathname.split('/')[2];
      if (messageId) {
        new Detail({ target, messageId }).render();
      }
    } else if (pathname === '/upload') {
      new Upload({ target }).render();
    }
  };

  init(this.route);
  this.route();

  window.addEventListener('popstate', this.route);
}
