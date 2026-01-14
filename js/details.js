const elTitle = document.querySelector("h2");

const searchParams = new URL(window.location.href).searchParams;

elTitle.innerText = searchParams.get("id");
