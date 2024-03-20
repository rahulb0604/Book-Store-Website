const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/book-store-project")
.then(()=>
console.log("Database Connected")
)