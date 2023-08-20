import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'
import { LogoutPage } from '../../pages/logout'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')

  const Logout = new LogoutPage(page)
  await Logout.logout()

});