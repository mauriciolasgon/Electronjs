import { browser, $,expect} from '@wdio/globals'

describe('Electron Testing', () => {
    it('should print application title', async () => {
        await expect($('h1')).toHaveText('Hello World!')
        await browser.pause(5000)
    })
})

