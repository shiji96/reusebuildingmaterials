const Material = require("../model/Material");

const getAllMaterials = async (req, res, next) => {
  let materials;
  try {
    materials = await Material.find({ materialstatus: "1" });
  } catch (err) {
    console.log(err);
  }

  if (!materials) {
    return res.status(404).json({ message: "No materials found" });
  }
  return res.status(200).json({ materials });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let material;
  try {
    material = await Material.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!material) {
    return res.status(404).json({ message: "No Material found" });
  }
  return res.status(200).json({ material });
};

const addMaterial = async (req, res, next) => {
  const {
    name,
    buildingname,
    location,
    dateinstall,
    dateremoval,
    type,
    subtype,
    height,
    width,
    length,
    weight,
    lifecycle,
    condition,
    available,
    owner,
    notes,
  } = req.body;
  console.log("name--" + name);
  console.log("filedetails--" + req.file);

  const image = req.file.filename;
  console.log("image--" + image);

  let material;

  try {
    material = new Material({
      name,
      buildingname,
      location,
      dateinstall,
      dateremoval,
      type,
      subtype,
      height,
      width,
      length,
      weight,
      lifecycle,
      condition,
      available,
      owner,
      notes,
      image,
    });
    await material.save();
  } catch (err) {
    console.log(err);
  }

  if (!material) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ material });
};

const updateMaterial = async (req, res, next) => {
  const id = req.params.id;
  console.log("id in controller--" + id);
  const {
    name,
    buildingname,
    location,
    dateinstall,
    dateremoval,
    type,
    subtype,
    height,
    width,
    length,
    weight,
    lifecycle,
    condition,
    available,
    owner,
    notes,
  } = req.body;
  console.log("filedetails--" + req.file);

  const image = req.file.filename;
  console.log("image--" + image);

  let material;
  try {
    material = await Material.findByIdAndUpdate(id, {
      name,
      buildingname,
      location,
      dateinstall,
      dateremoval,
      type,
      subtype,
      height,
      width,
      length,
      weight,
      lifecycle,
      condition,
      available,
      owner,
      notes,
      image,
    });

    material = await material.save();
  } catch (err) {
    console.log(err);
  }

  if (!material) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ material });
};

const deleteMaterial = async (req, res, next) => {
  const id = req.params.id;
  /* let material;
  try {
    material = await Material.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!material) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Material Successfully Deleted" });
};
 */
let newinfo1 = {
  materialstatus: "0"
};
updinfo = newinfo1;


console.log("updinfo---" + updinfo);

try {
Material.findByIdAndUpdate(id, updinfo, { new: true })
  .then((material) => {
    if (!material) {
      return res.status(404).json({
        message: "Material not found with id " + id,
      });
    }
    res.status(200).json({ success: true, data: material });
  })
  .catch((err) => {
    if (err.kind === "ObjectId") {
      return res.status(404).json({
        message: "Material not found with id " + id,
      });
    }
    return res.status(500).json({
      message: "Error updating item with id " + id,
    });
  });
} catch (err) {
  console.log(err);
}

// if (!material) {
//   return res.status(404).json({ message: "Unable To Delete By this ID" });
// }
// return res.status(200).json({ message: "Material Successfully Deleted" });
};




const getByLifeCycle = async (req, res, next) => {
  const id = req.params.id;
  let material;
  try {
    materiallifecycle = await Material.findById(id);
    var resultdata = materiallifecycle.lifecycle.filter(
      (obj) => obj.status == "1"
    );
  } catch (err) {
    console.log(err);
  }
  if (!materiallifecycle) {
    return res.status(404).json({ message: "No Material lifecycle found" });
  }
  return res.status(200).json({ resultdata });
};

const delByLifeCycle = async (req, res, next) => {
  const id = req.params.id;
  const lifecycleid = req.params.lifecycleid;

  let material;
  try {
    console.log("reached del controller");
    console.log(id);
    console.log(lifecycleid);

    const ldata = await Material.updateOne(
      {
        _id: id,
        "lifecycle._id": lifecycleid,
      },

      { $set: { "lifecycle.$.status": "0" } }
    );
  } catch (err) {
    console.log(err);
  }
};

const getByLifeCycleId = async (req, res, next) => {
  const id = req.params.id;
  const lifecycleid = req.params.lifecycleid;
  let material;
  try {
    materiallifecycle = await Material.findById(id);

    var resultdata = materiallifecycle.lifecycle.filter(
      (obj) => obj._id == lifecycleid
    );

    console.log("resultdata---" + resultdata);
    console.log("json string--" + JSON.stringify(resultdata));
  } catch (err) {
    console.log(err);
  }
  if (!materiallifecycle) {
    return res.status(404).json({ message: "No Material lifecycle found" });
  }
  return res.status(200).json({ resultdata });
};

const updByLifeCycle = async (req, res, next) => {
  const id = req.params.id;
  const lifecycleid = req.params.lifecycleid;

  let material;
  try {
    console.log("reached update lifecycle controller");
    console.log(id);
    console.log(lifecycleid);

    const ldata = await Material.updateOne(
      {
        _id: id,
        "lifecycle._id": lifecycleid,
      },

      { $set: { "lifecycle.$.status": "0" } }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getAllMaterials = getAllMaterials;
exports.addMaterial = addMaterial;
exports.getById = getById;
exports.updateMaterial = updateMaterial;
exports.deleteMaterial = deleteMaterial;

exports.getByLifeCycle = getByLifeCycle;
exports.delByLifeCycle = delByLifeCycle;
exports.getByLifeCycleId = getByLifeCycleId;
exports.updByLifeCycle = updByLifeCycle;
