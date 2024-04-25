import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "select one off the operater from the operation",
        type: "list",
        name: "operater",
        choices: ["add", "sub", "multyply", "divid"]
    }
]);
if (answer.operater === "add") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "sub") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "multyply") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "divid") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
