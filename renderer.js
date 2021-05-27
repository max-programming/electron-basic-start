// All NodeJS APIS are available in this renderer process
// Because `nodeIntegration` is turned on
document.getElementById("node-version").innerText = process.versions["node"];
document.getElementById("chrome-version").innerText =
  process.versions["chrome"];
document.getElementById("electron-version").innerText =
  process.versions["electron"];
