const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  console.log('createWindow');
  let win = new BrowserWindow({
    width: 400,
    height: 280,
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
}));

win.on('closed', () => {
    win = null;
});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
    app.quit();
}
});

app.on('activate', () => {
if (win === null) {
    createWindow();
}
});