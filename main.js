const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 820,
    height: 260,
    resizable: false
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
