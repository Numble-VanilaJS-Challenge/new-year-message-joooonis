export default function MessageList({ target, initialState }) {
  const messageList = document.createElement('div');
  messageList.className = 'MessageList';
  target.appendChild(messageList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;
    messageList.innerHTML = this.state
      .map(
        (message) => `
      <div class='MessageCard'>
        <img src="${message.image}" />
        <div class='MessageCard__Content'>
          <h1>${message.title}</h1>
          <p>${message.content}</p>
        </div>
      </div>
    `
      )
      .join('');
  };

  this.render();
}
