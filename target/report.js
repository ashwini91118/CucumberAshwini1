$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Addcust.feature");
formatter.feature({
  "name": "AddCusotmer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate an customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_should_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provide the valid details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_provide_the_valid_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.to_verify_the_customer_id_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addcustex.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Generate the CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user has to provide the valid details \"\u003cfname\u003e\",\"\u003cllastname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "to verify customer id has generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fname",
        "llastname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "ashu",
        "amar",
        "abc@gmail.com",
        "bangalore",
        "124324"
      ]
    },
    {
      "cells": [
        "amar",
        "ashu",
        "abcd@gmail.com",
        "bangalore",
        "23509809"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generate the CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerE.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to provide the valid details \"ashu\",\"amar\",\"abc@gmail.com\",\"bangalore\",\"124324\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerE.user_has_to_provide_the_valid_details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify customer id has generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerE.to_verify_customer_id_has_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerE.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to provide the valid details \"amar\",\"ashu\",\"abcd@gmail.com\",\"bangalore\",\"23509809\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerE.user_has_to_provide_the_valid_details(String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027AMARNATH-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\Amarnath\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51134}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 76.0.3809.132, webStorageEnabled: true}\nSession ID: c81f76de42e3a734d8c97c6502092f35\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Customer\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdefinition.AddCustomerE.user_has_to_provide_the_valid_details(AddCustomerE.java:27)\r\n\tat ✽.user has to provide the valid details \"amar\",\"ashu\",\"abcd@gmail.com\",\"bangalore\",\"23509809\"(src/test/resources/Features/Addcustex.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "to verify customer id has generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerE.to_verify_customer_id_has_generated()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/Features/AddcustonedMap.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Generate the customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user has to launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustonedMap.user_has_to_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to provide the details",
  "rows": [
    {
      "cells": [
        "fname",
        "ashu"
      ]
    },
    {
      "cells": [
        "lname",
        "kumar"
      ]
    },
    {
      "cells": [
        "gmail",
        "abc@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "Bangalore"
      ]
    },
    {
      "cells": [
        "phoneno",
        "354893"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustonedMap.user_has_to_provide_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify the customer id has to generate",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustonedMap.to_verify_the_customer_id_has_to_generate()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addcustonedlist.feature");
formatter.feature({
  "name": "Add customer",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "user should generate the CustomerID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should lauch the browse",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerOnedList.user_should_lauch_the_browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should provide the details",
  "rows": [
    {
      "cells": [
        "Ashu",
        "amar",
        "abc@gmail.com",
        "Bangalore",
        "1243535"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerOnedList.user_should_provide_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to verify whether the customer id is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerOnedList.to_verify_whether_the_customer_id_is_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addtarifftwodlist.feature");
formatter.feature({
  "name": "Add tariff plan",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "negavite to home with congratulation you add tariff plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerE.user_should_launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the guru demo url",
  "keyword": "And "
});
formatter.match({
  "location": "Addtarifftwodlist.user_should_enter_the_guru_demo_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should provide the valid details",
  "rows": [
    {
      "cells": [
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
      ]
    },
    {
      "cells": [
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addtarifftwodlist.user_should_provide_the_valid_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify congratulation you add tariff plan has displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtarifftwodlist.to_verify_congratulation_you_add_tariff_plan_has_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addtarifftwodmap.feature");
formatter.feature({
  "name": "Add tariff planm",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "negavite to home with congratulation you add tariff planm",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "user should launch the browserm and eitie",
  "keyword": "Given "
});
formatter.match({
  "location": "Addtarifftwodmap.user_should_launch_the_browserm_and_eitie()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the guru demo url and details",
  "keyword": "And "
});
formatter.match({
  "location": "Addtarifftwodmap.user_should_enter_the_guru_demo_url_and_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should provide the valid detailsm",
  "rows": [
    {
      "cells": [
        "monthlyRent",
        "freeLocalMinutes",
        "freeinternationalminutes",
        "freesmspack",
        "localperminutesC",
        "InternationalperminutesC",
        "SmsperCharge"
      ]
    },
    {
      "cells": [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
      ]
    },
    {
      "cells": [
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Addtarifftwodmap.user_should_provide_the_valid_detailsm(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To verify congratulation you add tariff plan has displayedm",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtarifftwodmap.to_verify_congratulation_you_add_tariff_plan_has_displayedm()"
});
formatter.result({
  "status": "passed"
});
});