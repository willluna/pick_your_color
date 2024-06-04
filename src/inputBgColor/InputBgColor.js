import {TextField} from "@mui/material";

const InputBgColor = ({placeholder,value,onChange}) => {
  return (
    <TextField
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputBgColor;