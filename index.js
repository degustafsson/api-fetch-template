let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
	let APP_ID = "47335b98"
	let API_KEY = "102f477b4cfc27973b4b1ed6f278f1b9"
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
  console.log(response)
  let data = await response.json()
  console.log(data)

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {}
