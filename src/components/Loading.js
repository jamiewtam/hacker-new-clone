import React from "react";

const Loading = () => {
  const [isLoading, setLoading] = React.useState({ loading: "Loading" });

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      isLoading.loading === "Loading..."
        ? setLoading({ loading: "Loading" })
        : setLoading((prevLoading) => {
            return {
              loading: `${prevLoading.loading}.`,
            };
          });
    }, 250);

    return () => window.clearInterval(interval);
  }, [isLoading]);

  return <h1>{isLoading.loading}</h1>;
};

export default Loading;
