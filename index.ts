import inquirer from "inquirer";

const answers : {
       numberOne : number,
       numberTwo : number,
       operator : string
} = await inquirer.prompt([
       {
              type: "number",
              name: "numberOne",
              message: "Enter Your First Number  ",
       },
       {
              type: "number",
              name: "numberTwo",
              message: "Enter Your Second Number  ",
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
       console.log("The result is:  ", result);
} else {
       console.log("Number is not valid");
}