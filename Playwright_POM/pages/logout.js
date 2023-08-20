exports.LogoutPage = class LogoutPage {

    constructor(page) {

        this.page = page
        this.logout_button = page.getByRole('link', { name: 'Logout' })
    
    }
    async logout(){
        await this.logout_button.click()
    }

}