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
    if (error.response.status === 401) {
      getAcces();
    }
    Promise.reject(error);
  }
}

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

  let respAc = fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
 
      saveTokenInLocalStorage(result.access_token);
      
    })
    .catch((error) => console.log("error", error));
  let json = respAc.then((result) => result.access_token);
  console.log(json);
  return json;
};

getAcces();

// getAcces();

export function saveTokenInLocalStorage(tokenDetails) {
  localStorage.setItem("token", tokenDetails);

  return tokenDetails;
}
