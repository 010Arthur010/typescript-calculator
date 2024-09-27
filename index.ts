import inquirer from "inquirer";

const answers : {
       numberOne : number,
       numberTwo : number,
       operator : string
} = await inquirer.prompt([
       {
              type: "number",
              name: "numberOne",
              message: "Masukkan angka pertama  ",
       },
       {
              type: "number",
              name: "numberTwo",
              message: "Masukkan angka kedua  ",
       },
       {
              type: "list",
              name: "operator",
              choices: ["*", "+", "-", "/"],
              message: "Pilih Operator:  ",
       },

]);

const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator){
       let result: number = 0;
       if(operator === "+") {
              result = numberOne + numberTwo
       } else if(operator === "-") {
              result = numberOne - numberTwo
       } else if(operator === "/") {
              result = numberOne / numberTwo
       } else if(operator === "*") {
              result = numberOne * numberTwo
       }
       console.log("Hasilnya Adalah:  ", result);
} else {
       console.log("Angka tidak valid");
}