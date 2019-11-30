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

    #@Test Register
    # def test_register(self):
    #     driver = self.driver
    #     driver.get("http://localhost:3000/")

    #     register = driver.find_element_by_id("register")
    #     register.click()

    #     username = driver.find_element_by_name("username")
    #     username.send_keys("Lucy")

    #     password = driver.find_element_by_name("password")
    #     password.send_keys("Lucy1234")

    #     password = driver.find_element_by_name("confirm_password")
    #     password.send_keys("Lucy1234")
    #     password.send_keys(Keys.RETURN)

    #     username = driver.find_element_by_name("username")
    #     username.send_keys("Lucy")

    #     password = driver.find_element_by_name("password")
    #     password.send_keys("Lucy1234")

    #     time.sleep(2)

    #    assert "/dash" in driver.current_url

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

    

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()