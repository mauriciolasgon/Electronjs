import { browser, $,expect} from '@wdio/globals'


describe('Electron Structure Testing', () => {
    it('should print application title', async () => {
        await expect($('h1')).toHaveText('Hello World!')
        await browser.pause(5000)
    })
    it('should have an input name', async () => {
        await expect($('input')).toHaveValue('name')
    })
    it('should have an input cep', async () => {
        await expect($('input')).toHaveValue('cep') 
    })
})

