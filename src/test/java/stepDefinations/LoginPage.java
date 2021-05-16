package stepDefinations;

import cucumber.api.DataTable;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.poi.ss.formula.functions.T;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static junit.framework.Assert.assertEquals;

public class LoginPage {
    WebDriver driver = null;

    @When("^Open browser and login to SwagLabs Application$")
    public void openBrowserAndLoginToSwagLabsApplication() {

        System.setProperty("webdriver.chrome.driver", "D:/Conduent/Documents/ResearchOnBigDataTelcom/JavaCucucmberBDD/JavaCucucmberBDD/src/test/resource/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.saucedemo.com/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
    }

    @When("^SwagLabs Login page should be displayed$")
    public void swaglabsLoginPageShouldBeDisplayed() throws InterruptedException {
        assertEquals("My Home Page  is not present", true, driver.findElement(By.xpath("//div[@class='bot_column']")).isDisplayed());
        System.out.println("*************Application Home page will be displayed");
//        Thread.sleep(1000);
        //driver.close();
    }

    @When("^Enter (.*) and (.*)$")
    public void enterUserNameAndPassword(String UserName, String Password) {
        driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(UserName);
        driver.findElement(By.xpath("//input[@id='password']")).sendKeys(Password);
        driver.findElement(By.xpath("//input[@id='login-button']")).click();
        System.out.println("I am entering UserName and Password");
    }

    @When("^swagLabs Homepage should be displayed$")
    public void swaglabsHomepageShouldBeDisplayed() throws InterruptedException {
        assertEquals("My Home Page  is not present", true, driver.findElement(By.xpath("//a[@class='shopping_cart_link']")).isDisplayed());
        System.out.println("I am validating product page");
        driver.quit();
    }

    @When("^Pass username and password$")
    public void passUsernameAndPassword(DataTable data) {
        List<List<String>> obj = data.raw();
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(obj.get(0).get(0));
        driver.findElement(By.xpath("//input[@id='password']")).sendKeys(obj.get(0).get(1));
        driver.findElement(By.xpath("//input[@id='login-button']")).click();
    }

}
