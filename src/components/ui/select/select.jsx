function Select(props) {
  return (
    <select name="mode">
      <option value="">Pick mode</option>
      {props.modes.length && props.modes.map((mode) => {
        return <option value={mode.field} key={`mode-${mode.id}`}>{ mode.name }</option>;
      })}
    </select>
  );
}

export default Select;
