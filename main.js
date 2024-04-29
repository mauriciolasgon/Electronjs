const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: 'root',
  database: 'universidade',
  port: 3333
});



const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  connection.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
  });


  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

