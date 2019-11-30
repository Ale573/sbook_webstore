import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class SbookWebstoreTest(unittest.TestCase): 
    def setUp(self): 
        self.driver = webdriver.Chrome(executable_path='C:/SeleniumWebdrivers/chromedriver.exe')

    def test_title(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        self.assertIn("S-Book Webstore", driver.title)

    def test_register(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        register = driver.find_element_by_id("register")
        register.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Lucy")

        password = driver.find_element_by_name("password")
        password.send_keys("Lucy1234")

        password = driver.find_element_by_name("confirm_password")
        password.send_keys("Lucy1234")
        password.send_keys(Keys.RETURN)

        username = driver.find_element_by_name("username")
        username.send_keys("Lucy")

        password = driver.find_element_by_name("password")
        password.send_keys("Lucy1234")

        time.sleep(2)

        assert "/dash" in driver.current_url

    def test_login(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        login = driver.find_element_by_id("login")
        login.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Ale573")

        password = driver.find_element_by_name("password")
        password.send_keys("Alejandro5")
        password.send_keys(Keys.RETURN)

        time.sleep(2)

        assert "/dash" in driver.current_url

    def test_profile_link(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        login = driver.find_element_by_id("login")
        login.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Ale573")

        password = driver.find_element_by_name("password")
        password.send_keys("Alejandro5")
        password.send_keys(Keys.RETURN)

        time.sleep(2)

        icon = driver.find_element_by_xpath("//*[@id='root']/div/div/header/div/img")
        icon.click()

        profile = driver.find_element_by_xpath("//*[@id='root']/div/div/header/div/div/a[1]")
        profile.click()

        time.sleep(2)

        assert "/user" in driver.current_url

    def test_sell_link(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        login = driver.find_element_by_id("login")
        login.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Ale573")

        password = driver.find_element_by_name("password")
        password.send_keys("Alejandro5")
        password.send_keys(Keys.RETURN)

        time.sleep(2)

        sell = driver.find_element_by_xpath("//*[@id='root']/div/div/header/a[2]/button")
        sell.click()

        time.sleep(2)

        assert "/sell" in driver.current_url

    def test_sell_form(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        login = driver.find_element_by_id("login")
        login.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Ale573")

        password = driver.find_element_by_name("password")
        password.send_keys("Alejandro5")
        password.send_keys(Keys.RETURN)

        time.sleep(2)

        sell = driver.find_element_by_xpath("//*[@id='root']/div/div/header/a[2]/button")
        sell.click()

        time.sleep(2)

        book_name = driver.find_element_by_xpath("//*[@id='name']")
        book_name.send_keys("L")

        author = driver.find_element_by_xpath("//*[@id='author']")
        author.send_keys("Luis")

        year = driver.find_element_by_xpath("//*[@id='year']")
        year.send_keys("2010")

        edition = driver.find_element_by_xpath("//*[@id='edition']")
        edition.send_keys("1")

        isbn = driver.find_element_by_xpath("//*[@id='isbn']")
        isbn.send_keys("1234567890")

        next_button = driver.find_element_by_xpath("//*[@id='root']/div/div/div/form/button")
        next_button.click()

        time.sleep(2)

        isbn = driver.find_element_by_xpath("//*[@id='price']")
        isbn.send_keys("20.99")

        condition = driver.find_element_by_xpath("//*[@id='root']/div/div/div/form/fieldset/div/select")
        for option in condition.find_elements_by_tag_name('option'):
            if option.text == 'Good':
                option.click()
                break

        offer = driver.find_element_by_xpath("//*[@id='offer_option']")
        offer.click()

        return_option = driver.find_element_by_xpath("//*[@id='return_option']")
        return_option.click()

        cash_method = driver.find_element_by_xpath("//*[@id='cash_method']")
        cash_method.click()

        cards_method = driver.find_element_by_xpath("//*[@id='cards_method']")
        cards_method.click()

        submit = driver.find_element_by_xpath("//*[@id='root']/div/div/div/form/button[1]")
        submit.click()

        time.sleep(2)

        assert "/dash" in driver.current_url

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()