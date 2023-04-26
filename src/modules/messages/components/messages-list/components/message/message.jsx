import './message.scss';

function Message(props) {
  return (
    <div className="message">
      { props.description }
    </div>
  );
}

export default Message;
