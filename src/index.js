module.exports = function toReadable( number ) {
  let arrDataUnits = ['zero','one','two','three','four','five','six','seven','eight','nine', 'ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let arrDataTens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred'];

    let strNumber = number.toString().split('');
    if(number <= 19){
        return arrDataUnits[number];
    }

    if(strNumber.length == 2){
        if(number % 10 != 0){
           if(number >= 20 && number <= 99){
            return arrDataTens[strNumber[0] - 2] + ' ' + arrDataUnits[strNumber[1]];
          }
        }else{
          return arrDataTens[strNumber[0] - 2];
        }
    }
    if(strNumber.length == 3){
      if(number % 100 != 0 && number % 100 < 10){    // 101 --- 109
        return arrDataUnits[strNumber[0]] + ' ' + 'hundred' + ' ' + arrDataUnits[strNumber[2]];

      }else if(number % 100 != 0 && number % 10 != 0 && number % 100 >= 20){   // 121 --- 199
        return arrDataUnits[strNumber[0]] + ' ' + 'hundred' + ' ' + arrDataTens[strNumber[1] - 2] + ' ' + arrDataUnits[strNumber[2]];
      }
      else if(number % 100 != 0 && number % 100 <= 19 && number % 100 > 10){   // when 111 --- 119 given  >>
        return arrDataUnits[strNumber[0]] + ' ' + 'hundred' + ' ' + arrDataUnits[strNumber[1] + strNumber[2]];
      }else if(number % 100 != 0 && number % 10 == 0){
          if(number % 100 != 0 && number % 10 == 0 && (strNumber[1] == 1 && strNumber[2] == 0)  ){
            return arrDataUnits[strNumber[0]] + ' ' + 'hundred' + ' ' + arrDataUnits[strNumber[1] + strNumber[2]];
          }
          return arrDataUnits[strNumber[0]] + ' ' + 'hundred' + ' ' + arrDataTens[strNumber[1] - 2];
      }
    }
    if(number == 100 || number == 200 || number == 300 || number == 400 || number == 500 || number == 600 || number == 700 || number == 800 || number == 900 ){

      return arrDataUnits[strNumber[0]] + ' ' + 'hundred';
    }

    return strNumber;
};
