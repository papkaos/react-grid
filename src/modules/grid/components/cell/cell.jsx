import { useCallback, useState } from 'react';

import './cell.scss';

function Cell(props) {
  const [isActive, setIsActive] = useState(false);

  const cellOnMouseEnterHandler = useCallback(() => {
    setIsActive(isActive => !isActive);
    props.onCellHover(props.description);
  }, [props.description]);

  return (
    <div className={`cell${isActive ? ' cell--active' : ''}`} onMouseEnter={cellOnMouseEnterHandler}></div>
  );
}

export default Cell;
