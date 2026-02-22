// Q1 Simulate a Delayed Task (Using setTimeout & Callbacks)
// Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:

// Log "Downloading from [url]...".
// Wait 2 seconds.
// Call the callback function with "Download complete!".
// Starter Code:

// Task:
// Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:
//     Log "Downloading from [url]...".
//     Wait 2 seconds.
//     Call the callback function with "Download complete!".

// function fakeDownload(url, callback){
//     console.log(`Downloading from ${url}...`);

//     setTimeout(() => {
//         callback("Download Complete!");
//     }, 2000);
// }

// // Usage:
// fakeDownload("https://example.com/file", (message) => {
//   console.log(message); // Expected Output: "Download complete!" (after 2 sec)
// });

// Convert to Promise

//Solution
// function fakeDownload(url) {
//   console.log(`Downloading from ${url}...`);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Download Complete!");
//     }, 2000);
//   })
// }

// Usage:
// fakeDownload("https://example.com/file")
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.error(error);
// })

/***
   * Q3
   * Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
Use promise chaining to handle the fetch request. Log any errors that occur.

Starter Code:

// Task:
// Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
// Use promise chaining to handle the fetch request. Log any errors that occur.

function fetchCatFact() {
  // Write code here...
}

// Usage:
fetchCatFact();
   */

//Solution
// function fetchCatFact() {
//   fetch("https://catfact.ninja/fact")
//     .then((response) => response.json())
//     .then((responseData) => console.log(responseData))
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetchCatFact();

// Q1 Fetch and Display User Data (async/await & Error Handling)
// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:

// Full Name
// Email
// Country
// Handle API errors and provide appropriate feedback if the fetch fails.

// HTML Starter code:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Random User Generator</title>
//     <style>
//       #userCard {
//         border: 1px solid #ccc;
//         padding: 10px;
//         width: 250px;
//         text-align: center;
//         display: none;
//         margin-top: 10px;
//       }
//     </style>
//   </head>
//   <body>
//     <button id="fetchUserBtn">Get Random User</button>
//     <div id="userCard">
//       <p id="userName"></p>
//       <p id="userEmail"></p>
//       <p id="userCountry"></p>
//     </div>

//     <script src="./script.js"></script>
//   </body>
// </html>

// JS Starter Code:

// Task
// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:
//     Full Name
//     Email
//     Country
// Handle API errors and provide appropriate feedback if the fetch fails.

//Solution
// async function fetchRandomUser() {
//   // Write code here...
//   const response = await fetch("https://randomuser.me/api/")
//   const data = await response.json();
//   console.log(data.results[0]);
//   const result = data.results[0];
//   populateUserFields([`${result.name.first} ${result.name.last}`, result.email, result.location.country]);
// }
// const buttonComp = document.querySelector("#fetchUserBtn");
// const userCard = document.querySelector("#userCard");
// const userFields = document.querySelectorAll("#userCard > p");
// buttonComp.addEventListener("click", fetchRandomUser);

// function populateUserFields(userDataArray){
//     userCard.style.display = "block";
//     for(let i = 0; i<userDataArray.length; i++){
//         userFields[i].innerText = userDataArray[i];
//     }
// }

// Q2 Fetch Multiple Dog Images (Promise.all())
// ● Build a simple dog image gallery that fetches three random dog images from "https://dog.ceo/api/breeds/image/random" in parallel using a Promise method.
// ● Clicking the "Get Dogs" button should display three new random images in the UI.
// ● Clear previous images before displaying new ones.
// ● Handle errors if fetching fails.
// HTML Starter Code:
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>Random Dog Images</title>
// <style>
// .dog-container img {
// width: 150px;
// height: 150px;
// object-fi t: cover;
// margin: 10px;
// }
// </style>
// </head>
// <body>
// <button id="fetchDogsBtn">Get Dogs</button>
// <div class="dog-container" id="dogContainer"></div>
// <script src="./script.js"></script>
// </body>
// </html>
// JS Starter Code:
// Task
// Build a simple dog image gallery that fetches three random dog images from https://dog.ceo/api/breeds/image/random in parallel using a Promise method.
// Clicking the "Get Dogs" button should display three new random images in the UI.
// Clear previous images before displaying new ones.
// Handle errors if fetching fails.

//Solution
// const btnComp = document.querySelector("#fetchDogsBtn");
// btnComp.addEventListener("click", fetchDogsData);

// async function fetchDogsData(){
//     try{
//         const imgContComp = document.querySelector("#dogContainer");
//         imgContComp.innerHTML = "";
//         const urls = ["https://dog.ceo/api/breeds/image/random", "https://dog.ceo/api/breeds/image/random", "https://dog.ceo/api/breeds/image/random"];
//         const response = await Promise.all(urls.map(item => fetch(item)));
//         const responseData = await Promise.all(response.map(item => item.json()));
//         responseData.forEach(item => {
//             const imgComp = document.createElement('img');
//             imgComp.setAttribute("src",item.message);
//             imgContComp.appendChild(imgComp);
//         })
//         console.log(response);

//     }catch(e){
//         console.error(e);
//     }
// }

// Q3 Simulating an API Retry Mechanism (async/await)
// ● Implement an API retry mechanism where a request to an invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted up to 3 times before showing an error message.
// ● Clicking "Retry Fetch" should attempt to fetch the API.
// ● Show real-time status updates on the page for each attempt.
// ● If the request fails, retry up to 3 times before displaying a failure message.
// HTML Starter Code:
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <title>API Retry Mechanism</title>
// <link rel="stylesheet" href="styles.css">
// </head>
// <body>
// <button id="retryFetchBtn">Retry Fetch</button>
// <p id="status"></p>
// <script src="./script.js"></script>
// </body>
// </html>
// JS Starter Code:
// // Task
// // Implement an API retry mechanism where a request to an invalid API (https://jsonplaceholder.typicode.com/invalid) is attempted up to 3 times before showing an error message.
// // Clicking "Retry Fetch" should attempt to fetch the API. The status should be updated in real-time for each attempt on the page.
// // If the request fails, retry up to 3 times before displaying a failure message.
// // Show real-time status updates on the page for each attempt.
// document.getElementById("retryFetchBtn").addEventListener("click", () => {
// fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
// });
// async function fetchWithRetry(url, retries) {
// const statusElement = document.getElementById("status");
// // Write code here
// }

//Solution

// document.getElementById("retryFetchBtn").addEventListener("click", (event) => {
//     event.currentTarget.setAttribute("disabled", true);
//     fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
// });
// async function fetchWithRetry(url, retries) {
//     const statusElement = document.getElementById("status");
//     const buttonElement = document.getElementById("retryFetchBtn");
//     // Write code here
//     statusElement.innerText = "Fetching";
//     for(let retry = 0; retry < retries;retry++){
//         try{
//             const response = await fetch(url);
//             if(!response.ok){
//                 throw new Error(`Attempt ${retry+1} failed`);
//             }
//             const data = await response.json();
//             statusElement.innerText = "Success";
//             return data;
//         }catch(e){
//             statusElement.innerText = `Error: ${e.message}`;
//         }
//         if(retry+1 == retries){
//             statusElement.innerText = "All attempts failed";
//             buttonElement.removeAttribute("disabled");
//         }
//     }
// }
