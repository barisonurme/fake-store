export const FetchAllProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

export const UserLoginHandler = async (username, password) => {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const userToken = await response.json();
  console.log(userToken);
  return userToken;
};
