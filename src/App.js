import './App.css';
import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import InputBgColor from "./inputBgColor/InputBgColor";
function App() {
  const [r, setR] = useState("");
  const [g, setG] = useState("");
  const [b, setB] = useState("");
  const [bgColor, setBgColor] = useState('');

  const handleApply = () => {
    if (r === "" || g === "" || b === "") {
      alert("Please enter all values");
    }else {
      setBgColor(`rgb(${r}, ${g}, ${b})`);
    }
  }

  const handleChangeRed = (e) => {
    let valueBgColor = parseInt(e.target.value);
    if (isNaN(valueBgColor)) {
      return;
    } else if (valueBgColor < 0) {
      alert("Please enter a number more than 0");
      valueBgColor = 0;
    } else if (valueBgColor > 255) {
      alert("Please enter a number less than 255");
      valueBgColor = 255;
    }
    setR(valueBgColor);
  }


  return (
    <Box sx={{display:"flex",  justifyContent:"center", paddingTop:"5rem"}}>
      <Box
        sx={{border:"1px solid black", width:"30rem", height:"30rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1rem"}}
      >
        <Typography variant="h3">...Pick your color</Typography>
        <Box sx={{width:"80%", height:"70%", border:bgColor, backgroundColor:bgColor}}></Box>
        <Box sx={{display:"flex", justifyContent:"center", gap:"1rem", padding:"1rem"}}>
          <InputBgColor
            placeholder="R"
            value={r}
            onChange={handleChangeRed}
            sx={{border:"1px solid black", width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"1rem"}}
          />
          <InputBgColor
            placeholder="G"
            value={g}
            onChange={handleChangeValueBgColor(e,setG)}
          />
          <InputBgColor
            placeholder="B"
            value={b}
            onChange={handleChangeValueBgColor(e,setB)}
          />
          <Button variant="outlined"  onClick={handleApply}>Apply</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
