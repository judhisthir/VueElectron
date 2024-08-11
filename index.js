import { app, BrowserWindow } from 'electron';

let mainWindow;
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 376,
    height: 720,
    x: 1155, // Horizontal position (in pixels) from the left of the screen
    y: 95, // Vertical position (in pixels) from the top of the screen
    frame:false,// Removes the title bar and window controls
    webPreferences: {
      nodeIntegration: true,
    },
    resizable:false,
    // autoHideMenuBar: false,
    
  });
  mainWindow.setMenuBarVisibility(false);
  // win.loadFile('index.html')
  mainWindow.loadURL('http://localhost:5173');
});