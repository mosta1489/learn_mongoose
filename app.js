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
  try {
    const user = await userSchema.create({
      name: name,
      age: age,
      hobbies: ["reading", "sleeping"],
      adress: {
        street: "bani afan",
        city: "bani suife",
      },
      email: "mosta@gmail.com",
    });

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

// insert("Rovan", 3);

async function findName(name) {
  const user = await userSchema.find({ name: name });
  console.log(user);
}
function findOne(name) {
  const user = userSchema.findOne({ name: name });
  return user;
}
async function findId(id) {
  const user = await userSchema.findById({ id });
  return user;
}
// findName("mostafa");

console.log(findOne("mostafa"));
