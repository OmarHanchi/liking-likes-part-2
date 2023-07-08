const buttonss = document.querySelectorAll(".btn");

for (const button of buttonss) {
  button.addEventListener("mouseover", () => {
    button.style.boxShadow = "0 0 10px grey ";
  });

  button.addEventListener("mouseout", () => {
    button.style.boxShadow = "none";
  });
}
// index     0  1   2
var likes = [9, 12, 9];
var spans = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}