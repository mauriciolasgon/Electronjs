# Verifica se o contêiner do banco de dados está em execução
if (-not (docker ps | Select-String "mysql-electron")) {
    Write-Host "Iniciando banco de dados..."
    docker-compose up -d db  # Inicia o contêiner do banco de dados em segundo plano
}

# Inicia o Electron Forge
Start-Process "npx" -ArgumentList "electron-forge", "start" -NoNewWindow -Wait
