
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb+srv://Wanderlust:wander210@aniket.ne33k.mongodb.net/?retryWrites=true&w=majority&appName=Aniket";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({}); 
    initData.data = initData.data.map((obj)=>({...obj, owner:"671f82a6a3e13c673cacef51"}));
    await Listing.insertMany(initData.data);
    console.log("data was saved");
};

initDB();
