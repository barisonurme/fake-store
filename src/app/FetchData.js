export const FetchAllProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

export const UserLoginHandler = async (username, password) => {
  return DUMMY_USER;
  // Timeout Error while loading 524 
  // Working around with DUMMY_USER array from api.

  // const response = await fetch("https://fakestoreapi.com/auth/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  // });
  // const userToken = await response.json();
  // console.log(userToken);
  // return userToken;
};

const DUMMY_USER = {
  email: "John@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "John",
    lastname: "Doe",
  },
  address: {
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
  },
  phone: "1-570-236-7033",
};