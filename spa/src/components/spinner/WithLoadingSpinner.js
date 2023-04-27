import React, { useState } from "react";
import Spinner from "./Spinner";

const withLoadingSpinner = (WrappedComponent) => {
  const WithLoadingSpinner = ({ ...props }) => {
    const [isLoading, setIsLoading] = useState(false);

    console.log(props);

    const handleApiCall = async (apiCall) => {
      setIsLoading(true);
      const response = await apiCall();
      setIsLoading(false);
      return response;
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

export default withLoadingSpinner;
