export default function Detail({ target, messageId }) {
  const page = document.createElement('div');
  page.className = 'message-detail';

  page.innerHTML = `
    <h1>Detail</h1>
  `;

  this.render = () => {
    target.appendChild(page);
  };
}
