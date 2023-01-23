import { imgRequest, postMessage } from '../libs/api';
import { push } from '../libs/router';

export default function New({ target }) {
  const page = document.createElement('div');
  page.className = 'new';

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  page.innerHTML = `<div class="new-preview">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#E2E2E2" width="60" height="60">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  </div>`;

  page.innerHTML += `<form class='new-form'>
    <input type="text" placeholder="제목을 입력하세요" />
    <textarea placeholder="내용을 입력하세요"></textarea>
    <button type="submit">작성하기</button>
  </form>`;

  const fetchImg = async () => {
    const urls = await imgRequest();
    this.setState(urls.raw);
    const preview = page.querySelector('.new-preview');
    preview.addEventListener('click', () => {
      const img = document.createElement('img');
      img.src = this.state;
      preview.innerHTML = '';
      preview.appendChild(img);
      preview.style.border = 'none';
    });
  };

  fetchImg();

  page.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.querySelector('input').value;
    const content = e.target.querySelector('textarea').value;
    const image = this.state;
    const post = { title, content, image };
    const postNewMesage = async () => {
      const data = await postMessage(post);
      if (data) {
        push(`/post/${data.postId}`);
      }
    };
    postNewMesage();
  });

  this.render = () => {
    target.appendChild(page);
  };
}
