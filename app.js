import Navigate from './components/navigate';
import Home from './pages/home';
import Post from './pages/post';
import Upload from './pages/upload';

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

    // 공동 컴포넌트
    new Navigate({ $target }).render();
  };

  this.route();
}
