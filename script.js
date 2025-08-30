document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("my-paragraph").textContent = 
        "Playing volleyball is exciting because it challenges my skills, builds teamwork, and keeps me energized!";
});

document.getElementById("add-item-btn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "It helps me relieve stress and have fun.";
    document.getElementById("my-list").appendChild(newItem);
});

document.getElementById("remove-element-btn").addEventListener("click", function () {
    const paragraph = document.getElementById("my-paragraph");
    if (paragraph) {
        paragraph.remove();
    }
});
