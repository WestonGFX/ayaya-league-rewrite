const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('AyayaApi', {
    onAction: (cb) => ipcRenderer.on('action', cb),
    setMouseEvents: (ignore, forward) => {
        try {
            ipcRenderer.send('set-ignore-mouse-events', ignore, forward);
        } catch (err) {
            console.error('setMouseEvents failed:', err);
        }
    },
    getSettings: () => {
        try {
            const result = ipcRenderer.sendSync('settings');
            return result;
        } catch (err) {
            console.error('getSettings failed:', err);
            return null;
        }
    },
    getSize: () => {
        try {
            return ipcRenderer.sendSync('size');
        } catch (err) {
            console.error('getSize failed:', err);
            return null;
        }
    },
    reloadScripts: () => {
        try {
            return ipcRenderer.sendSync('reload-scripts');
        } catch (err) {
            console.error('reloadScripts failed:', err);
            return null;
        }
    },
    changeSetting: (path, sid, value) => {
        try {
            return ipcRenderer.sendSync('set-setting', path, sid, value);
        } catch (err) {
            console.error('changeSetting failed:', err);
            return null;
        }
    },
    requestThingsToDraw: () => {
        try {
            return ipcRenderer.sendSync('req-things-to-draw');
        } catch (err) {
            console.error('requestThingsToDraw failed:', err);
            return null;
        }
    },
    openDevTools: () => {
        try {
            ipcRenderer.send('openDevTools');
        } catch (err) {
            console.error('openDevTools failed:', err);
        }
    }
});