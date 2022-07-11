import axios from 'axios';

export default async function apiCall({ url, method = "get", body, headers }) {
  try {
    const response = await axios(url, {
      method,
      body,
      headers,
    });

    return response.data;
  } catch (error) {
    Promise.reject(error);
  }
}
