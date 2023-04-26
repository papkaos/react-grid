import { useCallback, useContext } from 'react';
import { Cell } from './components/cell';
import MessagesContext from '../../store/messages-context';

import './grid.scss';

function Grid(props) {
  const hoverMessages = useContext(MessagesContext);

  const onCellHoverHandler = useCallback((description) => {
    hoverMessages.setMessages({
      text: description
    });
  }, [hoverMessages]);

  return (
    <div className="grid">
      { [...Array(props.gridSize)].map((cell, rowIndex) => {
        return (
          <div className="grid__row" key={`row-${rowIndex}`}>
            {[...Array(props.gridSize)].map((cell, columnIndex) => {
              return (
                <Cell
                  key={`cell-${rowIndex + 1}-${columnIndex + 1}`}
                  description={`row ${rowIndex + 1} col ${columnIndex + 1}`}
                  onCellHover={onCellHoverHandler}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
