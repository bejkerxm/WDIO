class BlogPage {

    open(){
        return browser.url('/blog')
    }

    getListRecentPosts(){
        return $$('#recent-posts-3 ul li')
    }
}

export default new BlogPage()
