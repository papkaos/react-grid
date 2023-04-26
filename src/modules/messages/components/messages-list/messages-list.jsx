import { useContext } from 'react';
import { Message } from './components/message';
import MessagesContext from '../../../../store/messages-context';

import './messages-list.scss';

function MessagesList() {
  const hoverMessages = useContext(MessagesContext);

  return (
    <div className="messages-list">
      {hoverMessages.messages.map((message, index) => {
        return <Message description={message.text} key={`message-${index}`} />
      })}
    </div>
  );
}

export default MessagesList;
