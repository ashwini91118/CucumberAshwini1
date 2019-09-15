$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Addcustex.feature");
formatter.feature({
  "name": "Addcustomer example",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generate the CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    },
    {
      "name": "@tag3"
    }
  ]
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
      "name": "@tag2"
    },
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate the CustomerID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    },
    {
      "name": "@tag3"
    }
  ]
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/AddcustonedMap.feature");
formatter.feature({
  "name": "Addcustomeronedmap",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Generate the customer ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addcustonedlist.feature");
formatter.feature({
  "name": "Addcustomer onedlist",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user should generate the CustomerID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag20"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addtarifftwodlist.feature");
formatter.feature({
  "name": "Addtariff twodlist",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "negavite to home with congratulation you add tariff plan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Addtarifftwodmap.feature");
formatter.feature({
  "name": "Addtariff twodmap",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "negavite to home with congratulation you add tariff planm",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
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
formatter.after({
  "status": "passed"
});
});