import React, { useRef, useState } from "react";
import Spinner from "./Spinner";

const WithLoadingSpinner = (WrappedComponent) => {
  const WithLoadingSpinner = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(false);
    const messagesRef = useRef();

    const handleApiCall = async (apiCall, message) => {
      messagesRef.current = message;
      setIsLoading(true);
      const response = await apiCall();
      const responseJson = await response.json();
      setIsLoading(false);
      return await responseJson;
    };

    return (
      <>
        {isLoading && <Spinner spinnerMsg={messagesRef.current} />}
        <WrappedComponent {...props} handleApiCall={handleApiCall} />
      </>
    );
  };

  return WithLoadingSpinner;
};

export default WithLoadingSpinner;
