export default function MessageDetail({ target, initialState }) {
  const messageDetail = document.createElement('div');
  messageDetail.className = 'message-detail';
  target.appendChild(messageDetail);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;
    const message = this.state;
    messageDetail.innerHTML = `<li class='message-detail'>
          <img src="${message.image}" />
          <h1>${message.title}</h1>
          <p>${convertDate(message.createdAt)}</p>
          <h2>${message.content}</h2>
        </li>`;
  };

  this.render();
}

// 2023-01-15T14:50:55.642Z -> 2023. 01. 15.
function convertDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
