import RadioContext from "../context/RadioContext";

export const RadioGroup = ({ label, children, ...rest }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
