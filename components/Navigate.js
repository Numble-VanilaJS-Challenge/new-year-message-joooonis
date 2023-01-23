export default function Navigate({ target }) {
  const page = document.createElement('div');
  page.className = 'navigate';

  page.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="36" height="36">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  <span>HPNY 2023</span>
  `;

  this.render = () => {
    target.appendChild(page);
  };
}
