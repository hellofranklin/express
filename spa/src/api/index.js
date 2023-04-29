import { getGmailUserId } from "../utils/AppUtils";

export const createForm = async (data, email, title, description, handleApiCall, formAction) => {
  const requestType = formAction === 'create' ? "createform": "updateform";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: "follow",
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&formTitle=${title}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const generateLoginCodeApi = async (email, handleApiCall) => {
  const requestType = "login";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ email }),
    redirect: "follow",
  };

  const URL = process.env.REACT_APP_BACKEND_URL + `?requestType=${requestType}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const login = async (email, code, handleApiCall) => {
  const requestType = "verifylogin";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ email, code }),
    headers: myHeaders,
    redirect: "follow",
  };
  const URL = process.env.REACT_APP_BACKEND_URL + `?requestType=${requestType}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const getUserForms = async (userEmail, handleApiCall) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=userforms&email=${userEmail}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const getFranklinFormDataJson = async (title, email, handleApiCall) => {
  const expirationTime = new Date(Date.now() + 3600000);
  const myHeaders = new Headers();
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const gmailUserId = getGmailUserId(email);

  const host = window.location.host.includes("localhost")
    ? "https://main--express--hellofranklin.hlx.page"
    : window.location.host;

  const URL = `${host}/forms/${gmailUserId}/${title}/form.json`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};
