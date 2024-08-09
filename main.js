const { app, BrowserWindow } = require('electron');

let mainWindow;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 376,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.loadFile('index.html')
  mainWindow.loadURL('http://localhost:5173');
});