import { useCallback } from 'react';
import MessagesContext from '../messages-context';

function MessagesProvider(props) {
  const { messages, setMessages } = props.messagesData;

  const messagesProvider = {
    messages,
    setMessages: useCallback((newMessage) => {
      setMessages(oldMessages => [...oldMessages, newMessage]);
    }, [messages])
  };

  return (
    <MessagesContext.Provider value={messagesProvider}>
      { props.children }
    </MessagesContext.Provider>
  );
}

export default MessagesProvider;
