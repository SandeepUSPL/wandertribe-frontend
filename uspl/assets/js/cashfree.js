import './cashfreesdk';

import * as env from '../../environments/environment';

export function f(data) {
  let cfInitialized = false;
  const config = {};
  config.layout = {view: "popup", width: "650"};
  // config.mode = "TEST"; //use PROD when you go live
  config.mode = env.environment.production ? 'PROD' : 'TEST'; //use PROD when you go live

  const response = CashFree.init(config);
  console.log(response.status);
  if (response.status === "OK") {
    cfInitialized = true;
  } else {
    //handle error
    console.log(response.message);
  }
  const callback = (event) => {
    var eventName = event.name;
    switch (eventName) {
      case "PAYMENT_REQUEST":
        console.log(event.message);
        break;
      default:
        console.log(event.message);
    }
  };
  // alert(JSON.stringify(data));

  if (cfInitialized) {
    CashFree.makePayment(data, callback);
  }
}

