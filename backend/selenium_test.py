import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class SbookWebstoreTest(unittest.TestCase): 
    def setUp(self): 
        self.driver = webdriver.Chrome(executable_path='C:/SeleniumWebdrivers/chromedriver.exe')

    def test_open(self):
        driver = self.driver
        driver.get("http://localhost:3000/")
        self.assertIn("S-Book Webstore", driver.title)

    def test_wrong_register(self):
        driver = self.driver
        driver.get("http://localhost:3000/")

        register = driver.find_element_by_id("register")
        register.click()

        username = driver.find_element_by_name("username")
        username.send_keys("Sam")
        username.send_keys(Keys.RETURN)

        password = driver.find_element_by_name("password")
        password.send_keys("Samuel1234")
        password.send_keys(Keys.RETURN)

        button = driver.find_elements_by_name("submit_button")
        button.click()

        error = driver.find_elements_by_class_name("error_message")

        assert "*Please enter your password" in error

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()