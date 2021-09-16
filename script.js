// showInUI: show ratings in UI from array-
const showInUI = (lists, ratings) => {
  // injecting colored rating stars-
  for (let i = 0; i < ratings; i++) {
    lists[i] = `<i class="bi bi-star-fill text-warning"></i>`;
  }
  if (ratings % 1 !== 0) {
    const converted = parseInt(ratings);
    lists[converted] = `<i class="bi bi-star-half text-warning"></i>`;
  }
  // removing comma from array and create new
  const newLists = lists.join(" ");
  // show in html Docs-
  const starRatingsContainer = document.getElementById("star-ratings");
  const div = document.createElement("div");
  div.classList.add("border", "py-2", "ps-1", "pe-5", "mt-3");
  div.innerHTML = `${newLists} <span class="inline">(${ratings})</span>`;
  starRatingsContainer.appendChild(div);
};

// createStar: Crateing star as in arry-
const createStar = (value) => {
  const fullStar = `<i class="bi bi-star-fill"></i>`;
  const halfStar = `<i class="bi bi-star-half"></i>`;
  // concate icon element for float and integer ratings-
  let starLists;
  if (value % 1 === 0) {
    starLists = Array(5).fill(fullStar);
    showInUI(starLists, value);
  } else if (value % 1 !== 0) {
    starLists = Array(5).fill(fullStar);
    const converted = parseInt(value);
    starLists.splice(converted, 1, halfStar);
    showInUI(starLists, value);
  }
};

// getInput: getting inputted ratings & click on add now button-
const getInput = () => {
  const ratingsInput = document.getElementById("ratings-input");
  document.getElementById("click-add").addEventListener("click", () => {
    const ratingsValue = parseFloat(ratingsInput.value);
    // checking validity in input field-
    if (!ratingsValue) {
      alert("Please enter valid ratings");
    } else if (ratingsValue > 5 || ratingsValue < 0) {
      alert("Only valid positive 0 to 5 is allowed!");
    } else if (typeof ratingsValue === "number") {
      createStar(ratingsValue);
    } else {
      alert("Please enter valid ratings");
    }
    ratingsInput.value = "";
  });
};
getInput();
