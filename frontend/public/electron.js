import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
            contextIsolation: true,
      webSecurity: false, 
    },
  });

  win.loadFile(path.join(__dirname, 'build', 'index.html'));
}

app.whenReady().then(createWindow);


