export const createFormForDemo = async (
    data,
    email,
    title,
    handleApiCall,
    formAction
  ) => {
    const requestType = "createformDemo";
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");
  
    const spinnerMSG = "Launching Form Editor"
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };
  
    const URL =
      process.env.REACT_APP_BACKEND_URL +
      `?requestType=${requestType}&formTitle=${title}&email=${email}`;
  
    return handleApiCall(() => fetch(encodeURI(URL), requestOptions), spinnerMSG);
  };
  