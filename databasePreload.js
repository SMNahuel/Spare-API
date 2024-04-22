const { User, Rol, PaymentMethod, Space } = require("./src/db");

const paymenth = ["cash", "card", "transfer"];

const roles = ["banned", "admin", "owner", "user"];
const users = [
  {
    rolId: 1,
    password: "1234567",
    name: "Nahuel Sanchez",
    email: "nahuelsan96@gmail.com",
  },
];

const spaces = [
  {
    name: "Quinco Mariachi",
    country: "Argentina",
    city: "Corrientes",
    location: "Capital",
    wifi: true,
    room: 2,
    bathroom: 2,
    kitchen: true,
    grill: false,
    price: 180.2,
    priceInsurance: 50,
    rating: 1,
  },
  {
    name: "Quinco Manantial",
    country: "Argentina",
    city: "Buenos Aires",
    location: "Capital",
    wifi: true,
    room: 2,
    bathroom: 2,
    kitchen: true,
    grill: false,
    price: 180.2,
    priceInsurance: 50,
    rating: 1,
  },
];

var p = new Promise((resolve) => resolve(true));
const log = (str) => {
  p = p.then((r) => console.log(str));
};

const lorem =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const createUsers = () => {
  users.forEach((user) => (p = p.then(() => User.create(user))));
};
const createRoles = () => {
  roles.forEach((rol) => (p = p.then(() => Rol.create({ name: rol }))));
};

const createPaymenthMethods = () => {
  paymenth.forEach((method) => (p = p.then(() => PaymentMethod.create({type: method}))));
};

const createSpace = () => {
  spaces.forEach((space, i) => {
    p = p.then(
      () =>
        (p = p
          .then(() => Space.create(space))
          .then((space) => {
            space.setPaymenth([i + 1]);
          }))
    );
  });
};

module.exports = () => {
  createUsers();
  log("users pre-charged");
  createRoles();
  log("Rols pre-charged");
  createPaymenthMethods();
  log("Payment method pre-charged");
  createSpace();
  log("Crear espacios")
  log("all preload completed");
  Rol.hasMany(User);
  User.belongsTo(Rol);
};
