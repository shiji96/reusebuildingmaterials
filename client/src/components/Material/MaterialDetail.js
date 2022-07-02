import { Button, FormLabel, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";

const MaterialDetail = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    subtype: "",
    available: "",
    notes: "",
    image: "",
  });

  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5080/materials/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.material));
    };
    fetchHandler();
  }, [id]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, "Value", e.target.value);
  };

  const handleImage = (e) => {
    setInputs({ ...inputs, image: e.target.files[0] });
    console.log(inputs.image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reached client");
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("type", inputs.type);
    formData.append("subtype", inputs.subtype);
    formData.append("available", inputs.available);
    formData.append("notes", inputs.notes);
    formData.append("image", inputs.image);

    axios
      .post(`http://localhost:5080/materials/${id}`, formData)
      .then(function (response) {
        console.log(response);
        window.location = "/materials";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {inputs && (
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
            <h2>Update Material :</h2>
            <FormLabel></FormLabel>
            <TextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
              label="Name"
            />

            <p></p>

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

            <FormLabel></FormLabel>
            <TextField
              value={inputs.notes}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="notes"
              label="Notes"
            />

            <FormLabel>Image</FormLabel>

            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handleImage}
            />

            <Button variant="contained" type="submit">
              Update Material
            </Button>
          </Box>
        </form>
      )}
      <p></p>
      <Footer />
    </div>
  );
};

export default MaterialDetail;
