const path = require('path')

describe('Upload test', () => {
	it('Upload test', async () => {
		await browser.url('https://the-internet.herokuapp.com/upload')
		const filePath = path.join(__dirname, '../data/file.txt')

		const remoteFilePath = await browser.uploadFile(filePath)
		await $('#file-upload').setValue(remoteFilePath)
		await $('#file-submit').click()
		await expect($('h3')).toHaveText('File Uploaded!')
	})

	it('Upload on hidden input', async () => {
		await browser.url('/cart/')
		const filePath = path.join(__dirname, '../data/file.txt')

		const remoteFilePath = await browser.uploadFile(filePath)
		//remove hidden class
		await browser.execute("document.querySelector('#upfile_1').className=''")
		await $('#upfile_1').setValue(remoteFilePath)
		await $('#upload_1').click()
	})
})
