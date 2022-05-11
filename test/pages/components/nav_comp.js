class NavComponent {
	get linksNavMenu() {
		return $$('#primary-menu li[id*=menu]')
	}
	get firatNavMenuList() {
		return $('#primary-menu li')
	}
}

export default new NavComponent()
