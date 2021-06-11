// function reddenPage() {
//   document.body.style.backgroundColor = "red";
// }
// var cssLink = document.createElement("link");
// cssLink.href = "./styles.css";
// cssLink.rel = "stylesheet";
// cssLink.type = "text/css";
// const vibecheck = function () {
//   document
//     .querySelectorAll("iframe")[0]
//     .contentDocument.body.appendChild(cssLink);
//   console.log("done");
// };

// const observer = new MutationObserver((mutation) => {
//   vibecheck();
//   console.log("DOM mutation detected");
// });

// observer.observe(document.body, {
//   childList: true,
//   attributes: true,
//   subtree: true,
//   characterData: true,
// });

var rmEmpty = (node) => {
  for (var i = node.children.length >>> 0; i--; ) {
    rmEmpty(node.children[i]);
  }
  if (node.innerText == "" && node.innerHTML == "") {
    console.log(node.children);
    node.remove();
  }
};
