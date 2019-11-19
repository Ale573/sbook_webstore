from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome(executable_path='C:/SeleniumWebdrivers/chromedriver.exe')
driver.get("http://localhost:3000/")

assert "S-Book Webstore" in driver.title

driver.close()