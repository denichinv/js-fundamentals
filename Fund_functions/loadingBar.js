function loadingBar(num) {
    function percentLoaded(a) {
      let percentCount = a / 10;
      let result = "[";
      for (let i = 0; i < percentCount; i++) {
        result += "%";
      }
      return result;
    }
  
    function dotsLoaded(a) {
      let percentCount = a / 10;
      let dotsCount = 10 - percentCount;
      let result = "";
      for (let i = 0; i < dotsCount; i++) {
        result += ".";
      }
      return result + "]";
    }
  
    let percent = percentLoaded(num);
    let dots = dotsLoaded(num);
    let finalResult = percent + dots;
  
    if (num < 100) {
      console.log(`${num}% ${finalResult}`);
      console.log('Still loading...');
    } else {
      console.log(`${num}% Complete!`);
      console.log(finalResult);
    }
  }
  
loadingBar(30);
