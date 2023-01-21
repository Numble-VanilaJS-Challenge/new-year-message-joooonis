export default function Navigate({ target }) {
  const page = document.createElement('div');
  page.className = 'navigate';

  const links = [
    { path: '/', text: 'home' },
    { path: '/post', text: 'post' },
    { path: '/upload', text: 'upload' },
  ];

  page.innerHTML = links.map(
    (link) => `<a href="${link.path}">${link.text}</a>`
  );

  this.render = () => {
    target.appendChild(page);
  };
}
