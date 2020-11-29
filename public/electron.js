const { app, BrowserWindow } = require('electron')
// const path = require("path")
const isDev = require("electron-is-dev")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/icon.png'
    })

    win.loadURL(
        isDev ? "http://localhost:3000" : `https://slots-example.netlify.app/`
    )
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
