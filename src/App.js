import './App.css';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useState} from "react";
import InputBgColor from "./inputBgColor/InputBgColor";

function App() {
  const [r, setR] = useState("");
  const [g, setG] = useState("");
  const [b, setB] = useState("");
  const [a, setA] = useState("");
  const [bgColor, setBgColor] = useState('');

  const handleApply = () => {
    if (r === "" || g === "" || b === "" || a === "") {
      alert("Please enter all values");
    } else {
      setBgColor(`rgb(${r}, ${g}, ${b}, ${a})`);
    }
  }

  const handleChangeR = (e) => {
    let valueBgColor = parseInt(e.target.value);
    if (valueBgColor === "" || isNaN(valueBgColor)) {
      setR(valueBgColor);
      return ;
    } else if (valueBgColor < 0) {
      alert("Please enter a number more than 0");
      valueBgColor = 0;
    } else if (valueBgColor > 255) {
      alert("Please enter a number less than 255");
      valueBgColor = 255;
    }
    setR(valueBgColor);
  }

  const handleChangeG = (e) => {
    let valueBgColor = parseInt(e.target.value);
    if (valueBgColor === "" || isNaN(valueBgColor)) {
      setG(valueBgColor)
      return;
    } else if (valueBgColor < 0) {
      alert("Please enter a number more than 0");
      valueBgColor = 0;
    } else if (valueBgColor > 255) {
      alert("Please enter a number less than 255");
      valueBgColor = 255;
    }
    setG(valueBgColor);
  }
  const handleChangeB = (e) => {
    let valueBgColor = parseInt(e.target.value);
    if (valueBgColor === "" || isNaN(valueBgColor)) {
      setB(valueBgColor)
      return;
    } else if (valueBgColor < 0) {
      alert("Please enter a number more than 0");
      valueBgColor = 0;
    } else if (valueBgColor > 255) {
      alert("Please enter a number less than 255");
      valueBgColor = 255;
    }
    setB(valueBgColor);
  }

  const handleChangeA = (e) => {
    let valueBgColor = parseInt(e.target.value);
    if (valueBgColor === "" || isNaN(valueBgColor)) {
      setA(valueBgColor)
      return;
    } else if (valueBgColor < 0) {
      alert("Please enter a number more than 0");
      valueBgColor = 0;
    } else if (valueBgColor > 1) {
      alert("Please enter a number less than 1");
      valueBgColor = 1;
    }
    setA(valueBgColor);
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", paddingTop: "5rem"}}>
      <Card
        sx={{
          border: "1px solid black",
          width: "30rem",
          height: "30rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <CardContent sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h3">...Pick your color</Typography>
          <CardMedia
            component="div"
            sx={{ width: "100%", height: "10rem", backgroundColor: bgColor, marginTop: "1rem", border: "1px solid black", padding: "1rem" }}
            />
        </CardContent>
            <CardActions>
              <InputBgColor
                placeholder="R"
                value={r}
                onChange={handleChangeR}
              />
              <InputBgColor
                placeholder="G"
                value={g}
                onChange={handleChangeG}
              />
              <InputBgColor
                placeholder="B"
                value={b}
                onChange={handleChangeB}
              />
              <InputBgColor
                placeholder="A"
                value={a}
                onChange={handleChangeA}
              />
              <Button variant="outlined" size="large" onClick={handleApply}>Apply</Button>
        </CardActions>
    </Card>
</Box>
)
  ;
}

export default App;
