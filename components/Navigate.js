export default function Navigate({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'Navigate';
  $page.innerHTML = `<div>
  <a href="/">home</a>
  <a href="/post">post</a>
  <a href="/upload">upload</a>
</div>`;

  this.render = () => {
    $target.appendChild($page);
  };
}
