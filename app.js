const mongoose = require("mongoose");
const userSchema = require("./models/userModel");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("data base is connected");
  },
  (err) => console.log(err)
);

async function insert(name, age) {
  // const user = new userSchema({ name: name, age: age });
  // await user
  //   .save()
  //   .then(() => console.log(`adding new user name: ${name}, age:${age}`));

  const user = await userSchema.create({
    name: name,
    age: age,
  });

  console.log(user);
}

// insert("ravoan mostafa", 3);
