let winmain;
const { app, BrowserWindow, ipcMain } = require('electron');
app.whenReady().then(() => createWindow());
function createWindow () {
    winmain = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    })
    winmain.loadFile('index.html');
}


ipcMain.on('dropped-file', (event, arg) => {
    console.log('Dropped File(s):', arg);
    event.returnValue = `Received ${arg.length} paths.`; // Synchronous reply
})