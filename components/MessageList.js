import { push } from '../libs/router';

export default function MessageList({ target, initialState }) {
  const messageList = document.createElement('div');
  messageList.className = 'message-list';
  target.appendChild(messageList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;
    messageList.innerHTML = `${this.state
      .map(
        (
          message
        ) => `<li class='message-card' data-message-id='${message.postId}'>
          <img src="${message.image}" />
          <div class='message-card-content'>
            <h1>${message.title}</h1>
            <p>${message.content}</p>
          </div>
        </li>`
      )
      .join('')}`;
  };

  this.render();

  messageList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    const { messageId } = li.dataset;
    push(`/post/${messageId}`);
  });
}
