import './panel.scss';

function Panel(props) {
  return (
    <div className="panel">
      { props.children }
    </div>
  );
}

export default Panel;
