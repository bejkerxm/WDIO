import ContactPage from '../pages/contact_page'
import { faker } from '@faker-js/faker'

describe('contact', () => {
	it('Go to contact, submit form and assert message', async () => {
		await ContactPage.open()
		await $('contact-name input').addValue(faker.name)
		await $('contact-email input').addValue(faker.internet.email())
		await $('contact-phone input').addValue(faker.phone)
		await $('contact-message textarea').addValue(faker.lorem.paragraph)
		await (await $('button[type=submit')).click()

		const popup = $('.everest-forms')
		await expect(popup).toBeDisplayed()
	})
})
