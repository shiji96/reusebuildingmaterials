import { Button, FormLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AddMaterial = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    subtype: "",
    available: "",
    image: "",
    notes: "",
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
    owner: "",
    lifecyclenotes: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setInputs({ ...inputs, image: e.target.files[0] });
    console.log(inputs.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("type", inputs.type);
    formData.append("subtype", inputs.subtype);
    formData.append("available", inputs.available);
    formData.append("image", inputs.image);
    formData.append("notes", inputs.notes);
    formData.append("lifecycleno", inputs.lifecycleno);
    formData.append("buildingname", inputs.buildingname);
    formData.append("location", inputs.location);
    formData.append("dateinstall", inputs.dateinstall);
    formData.append("dateremoval", inputs.dateremoval);
    formData.append("height", inputs.height);
    formData.append("width", inputs.width);
    formData.append("length", inputs.length);
    formData.append("weight", inputs.weight);
    formData.append("condition", inputs.condition);
    formData.append("owner", inputs.owner);
    formData.append("lifecyclenotes", inputs.lifecyclenotes);
    axios
      .post("http://localhost:5080/materials", formData)
      .then((res) => {
        console.log(res);
        window.location = "/materials";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
          <h2>Add Material :</h2>
          <FormLabel></FormLabel>
          <TextField
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            label="Name"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              name="type"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.type}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value={"Wood"}>Wood</MenuItem>
              <MenuItem value={"Plastic"}>Plastic</MenuItem>
              <MenuItem value={"Metal"}>Metal</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>

          <FormLabel></FormLabel>
          <TextField
            value={inputs.subtype}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="subtype"
            label="Subtype"
          />

<FormControl fullWidth>
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
          </FormControl>
          
          <FormLabel>Image</FormLabel>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handleImage}
          />
          <FormLabel></FormLabel>
          <TextField
            placeholder="General Notes"
            value={inputs.notes}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="notes"
            label="General Notes"
          />
          <p></p>
          <h2>Lifecycle Info :</h2>
          <FormLabel></FormLabel>
          <TextField
            placeholder="Lifecycle No."
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

          <FormLabel></FormLabel>

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
            Add Material
          </Button>
        </Box>
      </form>
      <p></p>
      <Footer />
    </div>
  );
};

export default AddMaterial;
