export default function Post({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'Post';

  $page.innerHTML = `<h1>Post</h1>`;
  this.render = () => {
    $target.appendChild($page);
  };
}
