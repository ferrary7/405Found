const API_URL = "http://localhost:8000";

export const login = async (data) => {
  const response = await fetch(`${API_URL}/users/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      username: data.email, // Ensure that email is sent as 'username'
      password: data.password,
    }),
  });
  return response.json();
};

export const register = async (data) => {
  const response = await fetch(`${API_URL}/users/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getProducts = () => {
  fetch("http://localhost:8000/products/")
    .then((resp) => {
      return resp.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log("Error Fetching data", e.message);
    });
};

export const getProductById = (id) => {
  fetch(`http://localhost:8000/products/${id}`)
    .then((resp) => {
      return resp.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log("Error Fetching data", e.message);
    });
};

export const getRecommendations = () => {
  
}