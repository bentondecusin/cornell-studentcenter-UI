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

// function rmEmpty(node, depth) {
//   if (node == undefined) return;
//   console.log(depth, node);
//   for (i = 0; i < node.children.length; i++) {
//     rmEmpty(node.children[i], depth + 1);
//   }
//   if (
//     node.children.length == 0 &&
//     (node.tagName == "TD" || node.tagName == "TR")
//   )
//     node.remove();
// }

for (node of document.getElementsByTagName("td")) {
  if (node == undefined) continue;
  if (node.children.length == 0 && node.innerText == "") {
    node.remove();
  }
}

for (node of document.getElementsByTagName("tr")) {
  if (node == undefined) continue;
  if (node.children.length == 0 && node.innerText == "") {
    console.log(node, node.children);
    node.remove();
  }
}

console.log(
  document.getElementsByTagName("td").length,
  document.getElementsByTagName("tr").length
);
