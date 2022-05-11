import HomePage from '../pages/home_page'
import allureReporter from '@wdio/allure-reporter'
describe('Navigation Menu', () => {
	it('Get text of all menu elements and assert', async () => {
		allureReporter.addFeature("Navigation");
		allureReporter.addFeature("critical");
		await HomePage.open()
		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account']

		const actualLinks = []

		await browser.waitUntil(
			async function () {
				const homeText = await HomePage.NavComponent.firatNavMenuList.getText()
				return homeText === 'Home'
			},
			{
				timeout: 5000,
				timeoutMsg: 'Verify home text from #primary-menu li',
			}
		)
		const navLinks = await HomePage.NavComponent.linksNavMenu

		for (const link of navLinks) {
			actualLinks.push(await link.getText())
		}
		await expect(actualLinks).toEqual(expectedLinks)
	})
})
