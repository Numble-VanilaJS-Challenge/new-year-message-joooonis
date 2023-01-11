import Home from './home';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    console.log(pathname);
    $target.innerHTML = '';

    if (pathname === '/') {
      new Home({ $target }).render();
    }
  };

  this.route();
}
