import axios from "axios";

export default async function apiCall({
  url,
  method = "get",
  body,
  headers,
  redirect,
}) {
  try {
    const response = await axios(url, {
      method,
      body,
      headers,
      redirect,
    });

    return response.data;
  } catch (error) {
    console.log(error.response.status);
    if (error.response.status === 400) {
      window.location.replace("/rolling_app_world/");
    }
    console.log(error.response.status);
    if (error.response.status === 500) {
      window.location.replace("/rolling_app_world/");
    }

    if (error.response.status === 401) {
      getAcces();
      setTimeout(() => {
        window.location.reload(true);
      }, 4000);
    }
    Promise.reject(error);
  }
}

setTimeout(() => {
  getAcces();
  setTimeout(() => {
    window.location.reload(true);
  }, 3000);
}, 1620000);

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
const getAcces = () => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  urlencoded.append("client_id", "dnLPK49pGLlGNEGl3YQS2jDzSsDKMgmL");
  urlencoded.append("client_secret", "AJ7BsKnV92GY1uSw");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      saveTokenInLocalStorage(result.access_token);
      setTimeout(() => {
        window.location.replace("/rolling_app_world/");
      }, 1000);
    })
    .catch((error) => console.log("error", error));
};

// getAcces();

// getAcces();

export function saveTokenInLocalStorage(tokenDetails) {
  localStorage.setItem("token", tokenDetails);

  return tokenDetails;
}
