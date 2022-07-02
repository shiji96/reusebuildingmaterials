import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./Material.css";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MaterialContext from "../../context/materialContext";

function Row(props) {
 
  const [open, setOpen] = React.useState(false);

  const [lifecyclelist, setLifecyclelist] = React.useState();

  const [expanded, setExpanded] = useState([]);

  const { materialId, setMaterialId, lifeCycleId, setLifeCycleId } =
    useContext(MaterialContext);

  useEffect(() => {
    const fetchHandler1 = async () => {
      await axios
        .get(`http://localhost:5080/materials/${materialId}/lifecycle`)
        .then((res) => res.data)
        .then((data) => setLifecyclelist(data.resultdata));
      //setExpanded([...Array(lifecyclelist.length)].map((val) => false));
    };
    fetchHandler1();
  }, [materialId]);

  const handleClick = (index) => {
    setExpanded(
      expanded.map((boolean_value, i) => {
        if (index === i) {
          return !boolean_value;
        } else {
          return false;
        }
      })
    );
  };

  const deleteLifeCycle = (lifecycleid) => {
    const delLifecycle = async () => {
      await axios
        .get(
          `http://localhost:5080/materials/${materialId}/${lifecycleid}/lifecycle`
        )
        .then((res) => {
          console.log("deleted");
          console.log(res.data);
        });
    };
    delLifecycle();
  };

  return (
    <React.Fragment>
      {lifecyclelist &&
        lifecyclelist
        .sort((a, b) => (a.lifecycleno > b.lifecycleno ? 1 : -1))
         .map((lifedata, index) => (
          <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)} 
                  /* onClick={() => handleClick(index)}   */
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />} 
                   {/* {expanded[index] ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}  */}
                </IconButton>
              </TableCell>

              <TableCell component="th" scope="row">
                {lifedata.lifecycleno}
              </TableCell>
              <TableCell align="right">{lifedata.buildingname}</TableCell>
              <TableCell align="right">{lifedata.location}</TableCell>
              <TableCell align="right">{lifedata.condition}</TableCell>
              {/* <TableCell align="right">{lifedata.available}</TableCell> */}
              <TableCell align="right">
                <Link className="title" to={`/updlifecycle/${lifedata._id}`}>
                  {" "}
                  EDIT{"    |    "}
                </Link>
                <a href="" onClick={() => deleteLifeCycle(lifedata._id)}>
                  DELETE
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ paddingBottom: 0, paddingTop: 0 }}
                colSpan={6}
              >
                 <Collapse in={open} timeout="auto" unmountOnExit> 
                   {/* <Collapse
                        in={expanded[index]}
                        timeout="auto"
                        unmountOnExit={true}
                      > */}  
                  <Box sx={{ margin: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      component="div"
                      style={{ fontWeight: 600 }}
                    >
                      More info:
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ fontWeight: 600 }}>
                            Length [m]
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Width [m]
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Height [m]
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Weight [kg]
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Owner
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Lifecycle Notes
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Date Install
                          </TableCell>
                          <TableCell style={{ fontWeight: 600 }}>
                            Date Removal
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow key={lifedata.lifecycleno}>
                          <TableCell component="th" scope="row">
                            {lifedata.length}
                          </TableCell>
                          <TableCell>{lifedata.width}</TableCell>
                          <TableCell>{lifedata.height}</TableCell>
                          <TableCell>{lifedata.weight}</TableCell>
                          <TableCell>{lifedata.owner}</TableCell>
                          <TableCell>{lifedata.lifecyclenotes}</TableCell>
                          <TableCell>{lifedata.dateinstall}</TableCell>
                          <TableCell>{lifedata.dateremoval}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </>
        ))}
    </React.Fragment>
  );
}

const ShowMaterial = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;

  const { materialId, setMaterialId } = useContext(MaterialContext);

  setMaterialId(id);

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

  return (
    <div>
      <div class="container">
        {inputs && (
          <div>
            <div class="row" style={{ marginTop: 40 }}>
              <div class="col-sm-4">
                <img
                  src={"http://localhost:5080/uploadimages/" + inputs.image}
                  alt=""
                  width={300}
                  height={200}
                />
              </div>
              <div class="col-sm-4">
                <h3 class="font-weight-light">{inputs.name} </h3>
                <p></p>
                <p class="font-weight-light">Type: {inputs.type} </p>
                <p class="font-weight-light">Subtype: {inputs.subtype} </p>
                <p class="font-weight-light">Available: {inputs.available} </p>
                <p class="font-weight-light">Notes: {inputs.notes} </p>
              </div>
              <div class="col-sm-4">&nbsp;</div>
            </div>
            <div class="row" style={{ marginTop: 30 }}>
              <div class="col-sm-6">
                <h2>Lifecycles:</h2>
              </div>
              <div class="col-sm-6" style={{ textAlign: "right" }}>
                <Link to={`/addlifecycle/`} ClassName="">
                  ADD NEXT LIFECYCLE
                </Link>
              </div>
            </div>
            <div class="row" style={{ marginTop: 40 }}>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead className="fbold">
                    <TableRow>
                      <TableCell />
                      <TableCell style={{ fontWeight: 600 }}>
                        Lifecycle No.
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }} align="right">
                        Building Name
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }} align="right">
                        Location
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }} align="right">
                        Condition
                      </TableCell>
                     {/*  <TableCell style={{ fontWeight: 600 }} align="right">
                        Available
                      </TableCell> */}
                      <TableCell style={{ fontWeight: 600 }} align="right">
                        {/* Status */}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Row key={inputs.name} lifecyclerow={inputs.lifecycle} />
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
      </div>
      <p></p>
      <Footer />
    </div>
  );
};

export default ShowMaterial;
