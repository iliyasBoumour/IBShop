import bcrypt from "bcryptjs";
const users = [
  {
    name: "iliyas",
    email: "iliyasboumour@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "kawtar",
    email: "kawtarboumour@gmail.com",
    password: bcrypt.hashSync("123456"),
  },
  {
    name: "ahmed",
    email: "ahmedboumour@gmail.com",
    password: bcrypt.hashSync("123456"),
  },
];
export default users;
