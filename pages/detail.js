import MessageDetail from '../components/MessageDetail';
import { request } from '../libs/api';

export default function Detail({ target, messageId }) {
  this.state = {
    messageId,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const page = document.createElement('div');
  page.className = 'message-detail-container';

  const fetchPost = async () => {
    const { post, comments } = await request(`post/${messageId}`);
    this.setState({ post, comments });
  };

  fetchPost();

  this.render = () => {
    // 구조분해 되서 들어왔을때만 랜더링
    if (this.state.post && this.state.comments) {
      const messageDetail = new MessageDetail({
        target: page,
        initialState: this.state,
      });
    }
    target.appendChild(page);
  };
}
