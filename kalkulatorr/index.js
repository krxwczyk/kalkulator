const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 260,
    height: 290,
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
    resizable: false
  });

  win.loadFile('index.html');
}

app.on('ready', createWindow);