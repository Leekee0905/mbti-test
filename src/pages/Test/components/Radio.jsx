import useRadio from "../hooks/useRadio";

const Radio = ({ children, value, name, defaultChecked, disabled }) => {
  const group = useRadio();

  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled || group.disabled}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {children}
    </label>
  );
};

export default Radio;
