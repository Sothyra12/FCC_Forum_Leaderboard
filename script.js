// script.js

const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const forumCategory = (id) => {
  let selectedCategory = {};

  if (allCategories.hasOwnProperty(id)) {
    const { className, category } = allCategories[id];
    
    selectedCategory.className = className;
    selectedCategory.category = category;
  }
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};

const viewCount = (views) => {
  return (views = views >= 1000 ? `${Math.floor(views / 1000)}k` : views);
};

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
    showLatestPosts(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

//display the data on the page
const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics
    .map((item) => {
      const {
        id,
        title,
        views,
        posts_count,
        slug,
        posters,
        category_id,
        bumped_at,
      } = item;

      return `
    <tr>
      <td>
        <p class="post_title">${title}</p>
      </td>
      <td></td>
      <td>
        ${posts_count - 1}.
      </td>
      <td>
        ${viewCount(views)}
      </td>
      <td>
        ${timeAgo(bumped_at)}
      </td>
    </tr>`;
    })
    .join("");
};