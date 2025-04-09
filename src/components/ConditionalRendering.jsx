import React from "react";

const ConditionalRendering = () => {
  const isLoading = false;
  const isSubmitting = true;
  const isError = true;
  if (isLoading) {
    return <div>LOADINg...</div>;
  }
  return (
    <div>
      <h1>Main Content</h1>
      <button className="mybtn">
        {isSubmitting ? "Submitting.." : "Submit"}
      </button>
      {
        isError && <h1>Error Loading Page</h1>
      }
    </div>
  );
};

export default ConditionalRendering;
