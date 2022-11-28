const { electron } = require("process");

const {app, BrowserWindow} = require('electron');

function createwindow(){
    const win = new BrowserWindow({
        width: 800,
        heigh: 600,
        webPreferences:{
            nodeIntegration: true
        }
        
    })
    win.loadURL("https://electron-desktop-auth-amit.netlify.app/")
}

app.whenReady().then(createwindow)