console.log("Interview");

// function defineOutput() {
//    if ([] == true) {
//       console.log("Aman is absent");
//    } else {
//       console.log("Aman is present!");
//    }
// }

// defineOutput();

// let obj = {
//    a: {
//       b: undefined
//    }
// }

// console.log(obj.a?.b?.c?.d ?? "Aman");

// var abc = 34;
// if (function () { }) {
// abc = abc + typeof f;
// }
// console.log(abc, "34undefined");

// function add(a) {
//    return function (b) {
//       if (b !== undefined) {
//          return a + b;
//       }
//       return a;
//    }
// }
// console.log(add(1)(2), "In finite")

function fact(num) {
   if (num === 1) return 1;

   return num * fact(num - 1)
}
// console.log(fact(3), "Factioral of 3");
// Example of the infinte curring
function add(a) {
   return function (b) {
      if (b !== undefined) {
         return add(a + b);
      }
      return a;
   }
}

// console.log(add(2)(3)());

// Import experss package
// const express = require("express");
// Create express application instance here. Main server object!!!
// const app = express();
// Define Get method!
// app.get('/', (req, res) => {
// res.send("Hello sir ji");
// });

// Req--> params, query, body, header..
// res  --> response object --> data send back to client
// Make the application listen on the 5000  part
// app.listen(5000);

// Server.js
const express = require("express");
const app = express();
app.use(express.json());
app.listen(5000, () => {
   console.log("Server running!");
});

// Model
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   name: string,
   address: string
});
module.export = mongoose.model("User", userSchema);
// Controller
const userSchema = require("../controller/user");

async function getUser(req, res){
   const user = await userSchema.find();
   res.status(200).json(user);
}

// Route file
const express = require("express");
const router = express.Router();
router.get("/users", getUser);
module.export = router;
