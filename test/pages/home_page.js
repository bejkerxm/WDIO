import NavComponent from './components/nav_comp'

class HomePage {
	open() {
		return browser.url('/')
	}

	get btnGetStarted() {
		return $('#get-started')
	}

	get pageLogo() {
		return $('//div[@class="site-branding"]')
	}

	get headingElement() {
		return $('.elementor-widget-container h1')
	}

	get NavComponent(){
		return NavComponent
	}
	
}

export default new HomePage()
