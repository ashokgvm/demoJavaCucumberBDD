package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before()
    public void Setup()
    {
        System.out.println("Before Execution of all the Test Cases");
    }

    @After()
    public void afterTestCases()
    {
        System.out.println("After Execution of all the Test Cases");

    }

}
