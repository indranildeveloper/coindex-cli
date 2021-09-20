function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error(
      "Your API Key is Invalid!".red + " Go to --> " + "https://nomics.com".blue
    );
  } else if (err.response.status === 404) {
    throw new Error("Your API is not responding!".red);
  } else {
    throw new Error("Something went wrong!");
  }
}

module.exports = { handleAPIError };
