export default function Upload({ target }) {
  const page = document.createElement('div');
  page.className = 'Upload';

  page.innerHTML = `<h1>Upload</h1>`;
  this.render = () => {
    target.appendChild(page);
  };
}
