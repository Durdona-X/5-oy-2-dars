const elContainer = document.getElementById("container");

loader(true);
fetch("https://json-api.uz/api/project/fn44-amaliyot/cars")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    ui(res.data);
  })
  .catch(() => {})
  .finally(() => {
    loader(false);
  });

function loader(bool) {
  const elLoader = document.getElementById("loader");
  const elLoaderTemplate = document.getElementById("templateSkeleton");

  elLoader.innerHTML = null;
  if (bool) {
    Array.from({ length: 7 }, (_, index) => index).forEach(() => {
      elLoader.appendChild(elLoaderTemplate.cloneNode(true).content);
    });
  }
}

function ui(data) {
  const elTemp = document.getElementById("templateCard");

  data.forEach((element) => {
    const clone = elTemp.cloneNode(true).content;

    clone.querySelector("h2").innerText = element.name
      ? element.name
      : "No title";
    clone.querySelector("p").innerText = element.equipment.comfort.join(" ");
    clone.querySelector("img").scr = element.images;
    clone.querySelector("button").id = element.id;

    elContainer.appendChild(clone);
  });
}

// Delete

elContainer.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("js-delete-button")) {
    console.log(evt.target.id);
  }
});
