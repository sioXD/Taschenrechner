import fs from "fs";

let history = {};
let historyFile = "";

export function rechne(one, two, operator, user) {
  if (user === undefined) {
    return `<t style=color:red;>User nicht angemeldet!</t>`;
  }
  one = parseFloat(one);
  two = parseFloat(two);
  let result;
  switch (operator) {
    case "+":
      result = one + two;
      break;
    case "-":
      result = one - two;
      break;
    case "*":
      result = one * two;
      break;
    case "/":
      if (two === 0) {
        return `<t style=color:red;>Division durch 0 ist nicht erlaubt!</t>`;
      }
      result = one / two;
      break;
    default:
      throw new Error("Invalid operator.");
  }
  if (isNaN(result)) {
    // result = 42; // if EE should be triggered
    return `<t style=color:blue;>Es sind nur Zahlen erlaubt!</t>`;
  }
  history[user] = history[user] || [];
  history[user].splice(
    0,
    0,
    `[${new Date().toLocaleString()}]: ${one} ${operator} ${two} = ${result} `
  );
  saveHistory(historyFile);
  return result;
}

export function getHistory(user, length) {
  history[user] = history[user] || [];
  return history[user].slice(0, length).map((item) => `${item}<br>`);
}

function saveHistory(historyFile) {
  if (historyFile !== "") {
    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2));
  }
}

export function loadHistory(historyFileConfig) {
  if (historyFileConfig === "") {
    return;
  }
  if (fs.existsSync(historyFileConfig)) {
    history = JSON.parse(fs.readFileSync(historyFileConfig));
    historyFile = historyFileConfig;
  } else {
    fs.writeFileSync(historyFileConfig, JSON.stringify({}));
    historyFile = historyFileConfig;
  }
}

export function getAllUsers() {
  return Object.keys(history).reverse();
}
