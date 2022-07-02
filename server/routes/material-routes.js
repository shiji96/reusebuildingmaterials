const express = require("express");
const router = express.Router();

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const Material = require("../model/Material");
const materialsController = require("../controllers/materials-controller");

router.get("/", materialsController.getAllMaterials);
router.get("/:id", materialsController.getById);
router.delete("/:id", materialsController.deleteMaterial);

router.get("/:id/lifecycle", materialsController.getByLifeCycle);
router.get("/:id/:lifecycleid/lifecycle", materialsController.delByLifeCycle);
router.get(
  "/:id/:lifecycleid/getlifecycle",
  materialsController.getByLifeCycleId
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploadimages");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/").post(upload.single("image"), (req, res) => {
  const {
    name,
    type,
    subtype,
    notes,
    lifecycleno,
    buildingname,
    location,
    dateinstall,
    dateremoval,
    height,
    width,
    length,
    weight,
    lifecycle,
    condition,
    available,
    owner,
    lifecyclenotes,
  } = req.body;
  console.log("filedetails--" + req.file);

  const image = req.file.filename;
  console.log("image  req.file.filename--" + image);

  let material;

  try {
    material = new Material({
      name,
      type,
      subtype,
      available,
      image,
      notes,
      lifecycle: {
        lifecycleno,
        buildingname,
        location,
        dateinstall,
        dateremoval,
        height,
        width,
        length,
        weight,
        condition,
        owner,
        lifecyclenotes,
      },
    });

    material.save();
  } catch (err) {
    console.log(err);
  }

  if (!material) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ material });
});

router.route("/:id").post(upload.single("image"), (req, res) => {
  console.log("newaaaa");
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
  const id = req.params.id;
  console.log("req.body--" + req.body.name);
  console.log("req.body.image--" + req.body.image);
  if (!req.file) {
    const image = req.body.image;
    console.log("image  req.file.filename--" + image);
    let newinfo = {
      name: name,
      buildingname: buildingname,
      location: location,
      dateinstall: dateinstall,
      dateremoval: dateremoval,
      type: type,
      subtype: subtype,
      height: height,
      width: width,
      length: length,
      weight: weight,
      lifecycle: lifecycle,
      condition: condition,
      available: available,
      owner: owner,
      notes: notes,
    };
    updinfo = newinfo;
  } else {
    console.log("filedetails--" + req.file.filename);

    const image = req.file.filename;
    console.log("image  req.file.filename--" + image);
    let newinfo1 = {
      name: name,
      buildingname: buildingname,
      location: location,
      dateinstall: dateinstall,
      dateremoval: dateremoval,
      type: type,
      subtype: subtype,
      height: height,
      width: width,
      length: length,
      weight: weight,
      lifecycle: lifecycle,
      condition: condition,
      available: available,
      owner: owner,
      notes: notes,
      image: image,
    };
    updinfo = newinfo1;
  }

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
});

router.route("/savelifecycleinfo").put((req, res) => {
  console.log("newlifecycle");

  const {
    materialid,
    lifecycleno,
    buildingname,
    location,
    dateinstall,
    dateremoval,
    height,
    width,
    length,
    weight,
    condition,
    owner,
    lifecyclenotes,
  } = req.body;

  console.log("req.body--" + req.body);
  console.log("req.body lifecycleno--" + req.body.lifecycleno);

  const mid = materialid;

  let newlifecycleinfo = {
    lifecycleno: lifecycleno,
    buildingname: buildingname,
    location: location,
    dateinstall: dateinstall,
    dateremoval: dateremoval,
    height: height,
    width: width,
    length: length,
    weight: weight,
    condition: condition,
   /*  available: available, */
    owner: owner,
    lifecyclenotes: lifecyclenotes,
  };

  console.log("lifecycleinfo---" + newlifecycleinfo);

  try {
    console.log("reached new lifecycle");
    console.log("mid--" + mid);
    console.log("newlifecycleinfo--" + newlifecycleinfo);

    Material.findOneAndUpdate(
      { _id: mid },
      { $push: { lifecycle: [newlifecycleinfo] } },
      { new: true }
    )
      .then((material) => {
        if (!material) {
          return res.status(404).json({
            message: "Material not found with id " + mid,
          });
        }
        res.status(200).json({ success: true, data: material });
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).json({
            message: "Material not found with id " + mid,
          });
        }
        return res.status(500).json({
          message: "Error updating item with id " + mid,
        });
      });
  } catch (err) {
    console.log(err);
  }
});

router.route("/updatelifecycleinfo").put(async (req, res) => {
  console.log("lifecycleupdate");
  console.log(req.body);

  const {
    materialid,
    lifecycleid,
    lifecycleno,
    buildingname,
    location,
    dateinstall,
    dateremoval,
    height,
    width,
    length,
    weight,
    condition,
    /* available, */
    owner,
    lifecyclenotes,
  } = req.body;

  console.log("req.body--" + req.body);
  console.log("req.body materialid--" + req.body.materialid);
  console.log("req.body lifecycleno--" + req.body.lifecycleno);
  console.log("req.body lifecycleid--" + req.body.lifecycleid);
  console.log("req.body buildingname--" + req.body.buildingname);

  const mid = materialid;

  await Material.updateOne(
    {
      _id: mid,
      "lifecycle._id": lifecycleid,
    },
    {
      $set: {
        "lifecycle.$.lifecycleno": lifecycleno,
        "lifecycle.$.buildingname": buildingname,
        "lifecycle.$.location": location,
        "lifecycle.$.dateinstall": dateinstall,
        "lifecycle.$.dateremoval": dateremoval,
        "lifecycle.$.height": height,
        "lifecycle.$.width": width,
        "lifecycle.$.length": length,
        "lifecycle.$.weight": weight,
        "lifecycle.$.condition": condition,
        /* "lifecycle.$.available": available, */
        "lifecycle.$.owner": owner,
        "lifecycle.$.lifecyclenotes": lifecyclenotes,
      },
    }
  )
    .then((material) => {
      if (!material) {
        return res.status(404).json({
          message: "Material not found with id " + mid,
        });
      }
      res.status(200).json({ success: true, data: material });
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).json({
          message: "Material not found with id " + mid,
        });
      }
      return res.status(500).json({
        message: "Error updating item with id " + mid,
      });
    });
});

module.exports = router;
