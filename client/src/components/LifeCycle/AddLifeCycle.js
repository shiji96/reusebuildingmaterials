import { Button, FormLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";
import MaterialContext from "../../context/materialContext";

const AddLifeCycle = () => {
  const history = useNavigate();
  const { materialId, setMaterialId, lifeCycleId, setLifeCycleId } =
    useContext(MaterialContext);

  const [inputs, setInputs] = useState({
    lifecycleno: "",
    buildingname: "",
    location: "",
    dateinstall: "",
    dateremoval: "",
    height: "",
    width: "",
    length: "",
    weight: "",
    condition: "",
   /*  available: "", */
    owner: "",
    lifecyclenotes: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(inputs, checked);

    const fdata = {
      materialid: materialId,
      lifecycleno: inputs.lifecycleno,
      buildingname: inputs.buildingname,
      location: inputs.location,
      dateinstall: inputs.dateinstall,
      dateremoval: inputs.dateremoval,
      height: inputs.height,
      width: inputs.width,
      length: inputs.length,
      weight: inputs.weight,
      condition: inputs.condition,
      /* available: inputs.available, */
      owner: inputs.owner,
      lifecyclenotes: inputs.lifecyclenotes,
    };
    axios
      .put("http://localhost:5080/materials/savelifecycleinfo", fdata)
      .then((res) => {
        console.log(res);
        window.location = "/showmaterial/" + materialId;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <h2>Add Lifecycle:</h2>
          <FormLabel></FormLabel>
          <TextField
            placeholder="LifecycleNumber"
            value={inputs.lifecycleno}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="lifecycleno"
            label="Lifecycle No."
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Building Name"
            value={inputs.buildingname}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="buildingname"
            label="Building Name"
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Location"
            value={inputs.location}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="location"
            label="Location"
          />
          <FormLabel></FormLabel>
          <TextField
            value={inputs.dateinstall}
            onChange={handleChange}
            type="date"
            margin="normal"
            fullWidth
            variant="outlined"
            name="dateinstall"
            focused
            label="Date install"
          />
          <FormLabel></FormLabel>
          <TextField
            value={inputs.dateremoval}
            onChange={handleChange}
            type="date"
            margin="normal"
            fullWidth
            variant="outlined"
            name="dateremoval"
            focused
            label="Date removal"
          />

          <FormLabel></FormLabel>
          <TextField
            placeholder="Height"
            value={inputs.height}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="height"
            label="Height [m]"
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Width"
            value={inputs.width}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="width"
            label="Width [m]"
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Length"
            value={inputs.length}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="length"
            label="Length [m]"
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Weight"
            value={inputs.weight}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="weight"
            label="Weight [kg]"
          />

          <p></p>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              name="condition"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.condition}
              label="Condition"
              onChange={handleChange}
            >
              <MenuItem value={"Excellent"}>Excellent</MenuItem>
              <MenuItem value={"Great"}>Great</MenuItem>
              <MenuItem value={"Good"}>Good</MenuItem>
              <MenuItem value={"Bad"}>Bad</MenuItem>
              <MenuItem value={"Awful"}>Awful</MenuItem>
            </Select>
          </FormControl>

          <p></p>

          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Available</InputLabel>
            <Select
              name="available"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.available}
              label="Available"
              onChange={handleChange}
            >
              <MenuItem value={"Yes"}>Yes</MenuItem>
              <MenuItem value={"No"}>No</MenuItem>
            </Select>
          </FormControl> */}

          <FormLabel></FormLabel>
          <TextField
            placeholder="Owner"
            value={inputs.owner}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="owner"
            label="Owner"
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="Notes"
            value={inputs.lifecyclenotes}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="lifecyclenotes"
            label="Notes"
          />

          <Button variant="contained" type="submit">
            Add Lifecycle
          </Button>
        </Box>
      </form>

      <p></p>
      <Footer />
    </div>
  );
};

export default AddLifeCycle;
