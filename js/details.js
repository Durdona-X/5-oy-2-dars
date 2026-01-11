const elTitle = document.querySelector("h2");

const url = new URL(window.location.href).searchParams;

elTitle.innerHTML = searchParams.get("id");
