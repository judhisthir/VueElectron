const { app, BrowserWindow } = require('electron');

let mainWindow;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL('http://localhost:5173');
});