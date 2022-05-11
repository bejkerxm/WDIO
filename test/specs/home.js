import HomePage from '../pages/home_page'
import allureReporter from '@wdio/allure-reporter'

describe('Home', () => {
	beforeEach(async () => {
		await HomePage.open()
	})

	it('Open URL & assert title', async () => {
		await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro!')
	})
	it('Open about page and assert url', async () => {
		await browser.url('https://practice.automationbro.com/about/')
		await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
	})

	it('Click get started and assert url contains get started', async () => {
		await HomePage.btnGetStarted.click()
		await expect(browser).toHaveUrlContaining('get-started')
	})

	it('Click on logo and assert that url doesnt contain get started', async () => {
		allureReporter.addFeature("Logo verification");
		allureReporter.addSeverity("minor");
		await HomePage.pageLogo.click()
		await expect(browser).not.toHaveTitleContaining('get-started')
	})

	it('Find heading element and assert txt', async () => {
		const headingElement = await HomePage.headingElement
		const headingText = await headingElement.getText()
		await expect(headingText).toEqual('Think different. Make different.')
	})
})
