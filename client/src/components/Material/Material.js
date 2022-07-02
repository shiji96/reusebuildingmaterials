import { Button, Stack } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Material.css";

const Material = (props) => {
const history = useNavigate();
  const { _id, name, type, image } = props.material;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5080/materials/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/materials"));
 
  };
  
  return (
    <div className="card">
  
      <img src={'http://localhost:5080/uploadimages/'+image} ></img>
      <h5>{name}</h5>
      <h7>Type: {type} </h7>
     

  <Stack spacing={4} direction="row">
      <Button LinkComponent={Link} to={`/showmaterial/${_id}`} sx={{ mt: "auto", fontSize: 11, fontWeight: 'bold'}}>
        Show Material
      </Button>
      <Button LinkComponent={Link} to={`/materials/${_id}`} sx={{ mt: "auto", fontSize: 11, fontWeight: 'bold' }}>
        Update
      </Button>
       </Stack>
  <Stack spacing={6} direction="row" > 
      <Button LinkComponent={Link} to={`/generateqr/${_id}`} sx={{ mt: "auto", fontSize: 11,fontWeight: 'bold'}}>
        Generate QR
      </Button> 
 

      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" , fontSize: 11, fontWeight: 'bold'}}>
        Delete
      </Button>
      </Stack>


    </div>
  );
};

export default Material;