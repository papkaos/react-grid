import { MessagesList } from './components/messages-list';

import './messages.scss';

function Messages() {
  return (
    <div className="messages">
      <h2 className="messages__title">Hovered Squares</h2>
      <MessagesList />
    </div>
  );
}

export default Messages;
