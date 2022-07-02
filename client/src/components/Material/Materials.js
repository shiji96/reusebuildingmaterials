import React, { useEffect, useState } from "react";
import axios from "axios";
import Material from "./Material";
import "./Material.css";
import { InputLabel } from "@mui/material";
import Footer from "../../components/Footer";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const URL = "http://localhost:5080/materials";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Materials = () => {
  const [materials, setMaterials] = useState();
  const [query, setQuery] = useState("");
  const [selects, setSelects] = useState();
  const [selectstype, setSelectstype] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setMaterials(data.materials));
  }, []);

  console.log(materials);

  return (
    <div>
      <div className="home">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <input
                className="App"
                placeholder="Search by name here ..."
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <div class="col-lg-5">
              <InputLabel>Type:</InputLabel>
              <select
                value={selectstype}
                onChange={(e) => setSelectstype(e.target.value)}
              >
                <option></option>
                <option>Wood</option>
                <option>Plastic</option>
                <option>Metal</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <ul>
        {materials &&
          materials
            .filter((post) => {
              // condition and type
              if (query === "" && selectstype === "Wood") {
                return post.type.includes("Wood");
              } else if (query === "" && selectstype === "Plastic") {
                return post.type.includes("Plastic");
              }else if (query === "" && selectstype === "Metal") {
                return post.type.includes("Metal");
              } else if (query === "" && selectstype === "Others") {
                return post.type.includes("Others");

              //search and type
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase()) &&
                selectstype === "Wood"
              ) {
                return post.type.includes("Wood");
              }  else if (
                post.name.toLowerCase().includes(query.toLowerCase()) &&
                selectstype === "Plastic"
              ) {
                return post.type.includes("Plastic");
              }
              
              else if (
                post.name.toLowerCase().includes(query.toLowerCase()) &&
                selectstype === "Metal"
              ) {
                return post.type.includes("Metal");
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase()) &&
                selectstype === "Others"
              ) {
                return post.type.includes("Others");

                // only search
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return post;
              }
            })
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((post, index) => (
              <li key={index}>
                <Material material={post} />
              </li>
            ))}
      </ul>

      <p></p>
        <Footer/>  
    </div>
  );
};

export default Materials;
