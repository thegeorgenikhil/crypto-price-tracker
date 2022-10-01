export const apiCall = async () => {
  try {
    const response = await fetch("https://api.wazirx.com/sapi/v1/tickers/24hr");
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.status === 429) {
      alert("Too many requests. Please try again after sometime!");
    } else {
      console.log(error);
    }
  }
};
