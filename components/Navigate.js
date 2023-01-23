import { push } from '../libs/router';

export default function Navigate({ target }) {
  const page = document.createElement('div');
  page.className = 'navigate';

  const { pathname } = location;
  if (pathname === '/') {
    page.innerHTML = `<h1 class='navigate-logo'>HPNY 2023</h1>
  `;
  } else {
    page.innerHTML = `<svg class='navigate-back'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="36" height="36">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
  <h1 class='navigate-logo'>HPNY 2023</h1>
  `;
    const back = page.querySelector('.navigate-back');
    back.addEventListener('click', () => {
      history.back();
    });

    const logo = page.querySelector('.navigate-logo');
    logo.addEventListener('click', () => {
      push('/');
    });
  }

  this.render = () => {
    target.appendChild(page);
  };
}
