import BlogPage from '../pages/blog_page'

describe('Blog', () => {
	it('get list of all posts and assert the lenght of each list item >1', async () => {
		await BlogPage.open()
		const recentPostsList = await BlogPage.getListRecentPosts()

		for (const item of recentPostsList) {
			const text = await item.getText()
			await expect(text.length).toBeGreaterThan(10)
		}

		await expect(recentPostsList).toHaveLength(4)
	})
})
