import React, { useState } from "react";
import Spinner from "./Spinner";

const WithLoadingSpinner = (WrappedComponent) => {
  const WithLoadingSpinner = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleApiCall = async (apiCall) => {
      setIsLoading(true);
      const response = await apiCall();
      const responseJson = await response.json();
      setIsLoading(false);
      return await responseJson;
    };

    return (
      <>
        {isLoading && <Spinner />}
        <WrappedComponent {...props} handleApiCall={handleApiCall} />
      </>
    );
  };

  return WithLoadingSpinner;
};

export default WithLoadingSpinner;
