console.log("IKRUS SITE ONLINE");

const links = document.querySelectorAll(".stream-link");

const title = document.getElementById("platform-title");
const text = document.getElementById("platform-text");
const button = document.getElementById("platform-button");

function updatePlatform(link) {

    title.textContent = link.dataset.title;
    text.textContent = link.dataset.text;
    button.href = link.dataset.url;

}

links.forEach(link => {

    link.addEventListener("mouseenter", () => {
        updatePlatform(link);
    });

    link.addEventListener("click", () => {
        updatePlatform(link);
    });

    link.addEventListener("touchstart", () => {
        updatePlatform(link);
    });

});