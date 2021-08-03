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

function rmEmpty(node, depth) {
  if (node.children.length != 0)
    for (child of node.children) {
      rmEmpty(child, depth + 1);
    }
  console.log(depth);
  if (
    node.children.length == 0 &&
    node.tagName != "A" &&
    node.tagName == "SPAN" &&
    node.tagName == "SCRIPT"
  ) {
    console.log(node, node.children);
    node.remove();
  }
}

for (node of document.getElementsByTagName("td")) {
  if (node.children.length == 0 && node.innerText == "") {
    console.log(node, node.children);
    node.remove();
  }
}

for (node of document.getElementsByTagName("tr")) {
  if (node.children.length == 0 && node.innerText == "") {
    console.log(node, node.children);
    node.remove();
  }
}
