import { getFooterRows, getGmailUserId } from "../utils/AppUtils";
import { getHeaderRows } from "../utils/AppUtils";

export const createForm = async (
  data,
  email,
  title,
  description,
  handleApiCall,
  formAction
) => {
  const headerRows = getHeaderRows(title, description);
  const footerRows = getFooterRows();
  const helixDefaultJson = headerRows.concat(data).concat(footerRows);

  const requestType = formAction === "create" ? "createform" : "updateform";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  console.log(helixDefaultJson);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(helixDefaultJson),
    redirect: "follow",
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&formTitle=${title}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const generateLoginCodeApi = async (email, handleApiCall) => {
  const requestType = "getlogincode";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const login = async (email, code, handleApiCall) => {
  const requestType = "verifylogin";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };
  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&email=${email}&code=${code}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const getUserForms = async (email, handleApiCall) => {
  const requestType = "userforms";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const getFranklinFormDataJson = async (title, email, handleApiCall) => {
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

export const stageFranklinForm = async (title, email, handleApiCall) => {
  const requestType = "stageform";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};

export const publishFranklinForm = async (title, email, handleApiCall) => {
  const requestType = "publishform";
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
  };

  const URL =
    process.env.REACT_APP_BACKEND_URL +
    `?requestType=${requestType}&email=${email}`;

  return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
};
