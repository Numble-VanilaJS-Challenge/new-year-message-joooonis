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
    const { post: message, comments } = this.state;
    messageDetail.innerHTML = `<li class='message-detail'>
          <img src="${message.image}" />
          <h1>${message.title}</h1>
          <p>${convertDate(message.createdAt)}</p>
          <h2>${message.content}</h2>
        </li>
        <div class='comment-list'>
          ${comments
            .map(
              (comment) => `<li class='comment'>              
              <p>${comment.content}</p>
            </li>`
            )
            .join('')}
        </div>
        `;
  };

  this.render();
}

function convertDate(date) {
  const d = new Date(date);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
