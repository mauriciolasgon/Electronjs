const { test, expect, _electron: electron } = require('@playwright/test')

test('example test', async () => {
  const electronApp = await electron.launch({ args: ['main.js'] })
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    return app.isPackaged
  })

  expect(isPackaged).toBe(false)

  // Wait for the first BrowserWindow to open
  // and return its Page object
  const window = await electronApp.firstWindow()
  await window.screenshot({ path: 'intro.png' })

  // close app
  await electronApp.close()
})


test('Consulta de CEP válido retorna informações esperadas', async ({ page }) => {
  // CEP válido para teste
  const cep = '01001-000';

  // Acessando a API para consultar o CEP
  await page.goto(`https://viacep.com.br/ws/${cep}/json/`);

  // Capturando o conteúdo da resposta da API
  const responseText = await page.textContent('pre');

  // Convertendo o conteúdo da resposta para um objeto JSON
  const responseData = JSON.parse(responseText);

  // Verificando se o CEP retornado é igual ao CEP consultado
  expect(responseData.cep).toBe(cep);

  // Verificando se os campos de endereço estão presentes na resposta
  expect(responseData.logradouro).not.toBe(undefined);
  expect(responseData.bairro).not.toBe(undefined);
  expect(responseData.localidade).not.toBe(undefined);
  expect(responseData.uf).not.toBe(undefined);
});
