const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const materialSchema = new Schema({
  name: {
    type: String,
    /* required: true, */
  },
  type: {
    type: String,
  /*   required: true, */
  },
  subtype: {
    type: String,
   /*  required: true, */
  },
  available: {
    type: String,
   /*  required: true, */
},
  image: {
    type: String,
 /*   required: true,  */
  }, 
  notes: {
    type: String,
/*     required: true, */
  },
  materialstatus: {
    type: String,
    required: true,
    default: "1",
  },
  lifecycle:[{
        lifecycleno: {
            type: Number,
         /*    required: true, */
        },
        buildingname: {
            type: String,
        /*     required: true, */
        },
        location: {
            type: String,
        /*     required: true, */
        },
        dateinstall: {
            type: String,
         /*    required: true, */
        },
        dateremoval: {
            type: String,
       /*      required: true, */
        },  
        height: {
            type: Number,
         /*    required: true, */
        },
        width: {
            type: Number,
          /*   required: true, */
        },
        length: {
            type: Number,
         /*    required: true, */
        },
        weight: {
            type: Number,
         /*    required: true, */
        },        
        condition: {
            type: String,
        /*     required: true, */
        },
       
        owner: {
            type: String,
            
        },
        lifecyclenotes: {
            type: String,
          /*   required: true, */
        },
        status:{
            type:String,
            required: true,
            default:"1"
        }
    }
  ]
  
});

module.exports = mongoose.model("Material", materialSchema);



