// script.js

const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

// To populate the forum leaderboard with data, you will need to request the data from an API.
// This is known as an asynchronous operation, which means that tasks execute independently of the main program flow.
// You can use the async keyword to create an asynchronous function, which returns a promise.

// In the previous project, you used fetch() with the .then() method to perform logic after the promise was resolved.
// Now you will use the await keyword to handle the asynchronous nature of the fetch() method.
// The await keyword waits for a promise to resolve and returns the result.
// Example Code
// const example = async () => {
//   const data = await fetch("https://example.com/api");
//   console.log(data);
// }

// You want to get the response body as a JSON object.
// The .json() method of your res variable returns a promise, which means you will need to await it.
// Create a constant called data and assign it the value of await res.json().
const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
  } catch (err) {
    console.log(err);
  }
};
fetchData();

//display the data on the page 
const showLatestPosts = (data) => {

};