import './button.scss';

function Button(props) {
  return (
    <button type={props.type || 'button'} className={`button${props.className ? ' ' + props.className : '' }`}>
      { props.children || 'Submit' }
    </button>
  );
}

export default Button;
