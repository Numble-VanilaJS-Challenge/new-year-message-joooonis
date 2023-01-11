import Home from './home';
import Post from './post';
import Upload from './upload';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = '';

    if (pathname === '/') {
      new Home({ $target }).render();
    }

    if (pathname === '/upload') {
      new Upload({ $target }).render();
    }

    if (pathname === '/post') {
      new Post({ $target }).render();
    }
  };

  this.route();
}
