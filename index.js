const inputWindow = document.createElement("textarea");
const keyboardList_EN = [
  {main: "`", alt: "~", row: 1, code: "Backquote"},
  {main: "1", alt: "!", row: 1, code: "Digit1"},
  {main: "2", alt: "@", row: 1, code: "Digit2"},
  {main: "3", alt: "#", row: 1, code: "Digit3"},
  {main: "4", alt: "$", row: 1, code: "Digit4"},
  {main: "5", alt: "%", row: 1, code: "Digit5"},
  {main: "6", alt: "^", row: 1, code: "Digit6"},
  {main: "7", alt: "&", row: 1, code: "Digit7"},
  {main: "8", alt: "*", row: 1, code: "Digit8"},
  {main: "9", alt: "(", row: 1, code: "Digit9"},
  {main: "0", alt: ")", row: 1, code: "Digit0"},
  {main: "-", alt: "_", row: 1, code: "Minus"},
  {main: "=", alt: "+", row: 1, code: "Equal"},
  {main: "Backspace", row: 1, width: 2, code: "Backspace"},
  {main: "Tab", row: 2, code: "Tab"},
  {main: "q", alt: "Q", row: 2, code: "KeyQ"},
  {main: "w", alt: "W", row: 2, code: "KeyW"},
  {main: "e", alt: "E", row: 2, code: "KeyE"},
  {main: "r", alt: "R", row: 2, code: "KeyR"},
  {main: "t", alt: "T", row: 2, code: "KeyT"},
  {main: "y", alt: "Y", row: 2, code: "KeyY"},
  {main: "u", alt: "U", row: 2, code: "KeyU"},
  {main: "i", alt: "I", row: 2, code: "KeyI"},
  {main: "o", alt: "O", row: 2, code: "KeyO"},
  {main: "p", alt: "P", row: 2, code: "KeyP"},
  {main: "[", alt: "{", row: 2, code: "BracketLeft"},
  {main: "]", alt: "}", row: 2, code: "BracketRight"},
  {main: "\\",alt: "|", row: 2, code: "Backslash"},
  {main: "Del", row: 2, code: "Delete"},
  {main: "CapsLock", row: 3, width: 2, code: "CapsLock"},
  {main: "a", alt: "A", row: 3, code: "KeyA"},
  {main: "s", alt: "S", row: 3, code: "KeyS"},
  {main: "d", alt: "D", row: 3, code: "KeyD"},
  {main: "f", alt: "F", row: 3, code: "KeyF"},
  {main: "g", alt: "G", row: 3, code: "KeyG"},
  {main: "h", alt: "H", row: 3, code: "KeyH"},
  {main: "j", alt: "J", row: 3, code: "KeyJ"},
  {main: "k", alt: "K", row: 3, code: "KeyK"},
  {main: "l", alt: "L", row: 3, code: "KeyL"},
  {main: ";", alt: ":", row: 3, code: "Semicolon"},
  {main: "'", alt: '"', row: 3, code: "Quote"},
  {main: "Enter", row: 3, width: 2, code: "Enter"},
  {main: "Shift", row: 4, width: 2, code: "ShiftLeft"},
  {main: "En", alt: "Ru", row: 4, code: "ShiftLeft"},
  {main: "z", alt: "Z", row: 4, code: "KeyZ"},
  {main: "x", alt: "X", row: 4, code: "KeyX"},
  {main: "c", alt: "C", row: 4, code: "KeyC"},
  {main: "v", alt: "V", row: 4, code: "KeyV"},
  {main: "b", alt: "B", row: 4, code: "KeyB"},
  {main: "n", alt: "N", row: 4, code: "KeyN"},
  {main: "m", alt: "M", row: 4, code: "KeyM"},
  {main: ",", alt: "<", row: 4, code: "Comma"},
  {main: ".", alt: ">", row: 4, code: "Period"},
  {main: "/", alt: "?", row: 4, code: "Slash"},
  {main: "\u{2191}", row: 4, code: "ArrowUp"},
  {main: "Shift", row: 4, code: "ShiftRight"},
  {main: "Control", row: 5, width: 1.5, code: "ControlLeft"},
  {main: "Meta", row: 5, code: "MetaLeft"},
  {main: "Alt", row: 5, code: "AltLeft"},
  {main: " ", row: 5, width: 4, code: "Space"},
  {main: "Alt", row: 5, code: "AltRight"},
  {main: "Control", row: 5, width: 1.5, code: "ControlRight"},
  {main: "\u{2190}", row: 5, code: "ArrowLeft"},
  {main: "\u{2193}", row: 5, code: "ArrowDown"},
  {main: "\u{2192}", row: 5, code: "ArrowRight"}
]

const keyboardList_RU = [
  {main: "`", alt: "~", row: 1, code: "Backquote"},
  {main: "1", alt: "!", row: 1, code: "Digit1"},
  {main: "2", alt: '"', row: 1, code: "Digit2"},
  {main: "3", alt: "№", row: 1, code: "Digit3"},
  {main: "4", alt: ";", row: 1, code: "Digit4"},
  {main: "5", alt: "%", row: 1, code: "Digit5"},
  {main: "6", alt: ":", row: 1, code: "Digit6"},
  {main: "7", alt: "?", row: 1, code: "Digit7"},
  {main: "8", alt: "*", row: 1, code: "Digit8"},
  {main: "9", alt: "(", row: 1, code: "Digit9"},
  {main: "0", alt: ")", row: 1, code: "Digit0"},
  {main: "-", alt: "_", row: 1, code: "Minus"},
  {main: "=", alt: "+", row: 1, code: "Equal"},
  {main: "Backspace", row: 1, width: 2, code: "Backspace"},
  {main: "Tab", row: 2, code: "Tab"},
  {main: "й", alt: "Й", row: 2, code: "KeyQ"},
  {main: "ц", alt: "Ц", row: 2, code: "KeyW"},
  {main: "у", alt: "У", row: 2, code: "KeyE"},
  {main: "к", alt: "К", row: 2, code: "KeyR"},
  {main: "е", alt: "Е", row: 2, code: "KeyT"},
  {main: "н", alt: "Н", row: 2, code: "KeyY"},
  {main: "г", alt: "Г", row: 2, code: "KeyU"},
  {main: "ш", alt: "Ш", row: 2, code: "KeyI"},
  {main: "щ", alt: "Щ", row: 2, code: "KeyO"},
  {main: "з", alt: "З", row: 2, code: "KeyP"},
  {main: "х", alt: "Х", row: 2, code: "BracketLeft"},
  {main: "ъ", alt: "Ъ", row: 2, code: "BracketRight"},
  {main: "\\",alt: "|", row: 2, code: "Backslash"},
  {main: "Del", row: 2, code: "Delete"},
  {main: "CapsLock", row: 3, width: 2, code: "CapsLock"},
  {main: "ф", alt: "Ф", row: 3, code: "KeyA"},
  {main: "ы", alt: "Ы", row: 3, code: "KeyS"},
  {main: "в", alt: "В", row: 3, code: "KeyD"},
  {main: "а", alt: "А", row: 3, code: "KeyF"},
  {main: "п", alt: "П", row: 3, code: "KeyG"},
  {main: "р", alt: "Р", row: 3, code: "KeyH"},
  {main: "о", alt: "О", row: 3, code: "KeyJ"},
  {main: "л", alt: "Л", row: 3, code: "KeyK"},
  {main: "д", alt: "Д", row: 3, code: "KeyL"},
  {main: "ж", alt: "Ж", row: 3, code: "Semicolon"},
  {main: "э", alt: 'Э', row: 3, code: "Quote"},
  {main: "Enter", row: 3, width: 2, code: "Enter"},
  {main: "Shift", row: 4, width: 2, code: "ShiftLeft"},
  {main: "En", alt: "Ru", row: 4, code: "ShiftLeft"},
  {main: "я", alt: "Я", row: 4, code: "KeyZ"},
  {main: "ч", alt: "Ч", row: 4, code: "KeyX"},
  {main: "с", alt: "С", row: 4, code: "KeyC"},
  {main: "м", alt: "М", row: 4, code: "KeyV"},
  {main: "и", alt: "И", row: 4, code: "KeyB"},
  {main: "т", alt: "Т", row: 4, code: "KeyN"},
  {main: "Ь", alt: "ь", row: 4, code: "KeyM"},
  {main: "б", alt: "Б", row: 4, code: "Comma"},
  {main: "ю", alt: "Ю", row: 4, code: "Period"},
  {main: ".", alt: ",", row: 4, code: "Slash"},
  {main: "\u{2191}", row: 4, code: "ArrowUp"},
  {main: "Shift", row: 4, code: "ShiftRight"},
  {main: "Control", row: 5, width: 1.5, code: "ControlLeft"},
  {main: "Meta", row: 5, code: "MetaLeft"},
  {main: "Alt", row: 5, code: "AltLeft"},
  {main: " ", row: 5, width: 4, code: "Space"},
  {main: "Alt", row: 5, code: "AltRight"},
  {main: "Control", row: 5, width: 1.5, code: "ControlRight"},
  {main: "\u{2190}", row: 5, code: "ArrowLeft"},
  {main: "\u{2193}", row: 5, code: "ArrowDown"},
  {main: "\u{2192}", row: 5, code: "ArrowRight"}
]
const tabSpaceLength = 4;
var shiftMode = false;
var tabMode = false;
var keyBoardLayout_EN = true; // English by default

function createButton(buttonObj) {
  let button = document.createElement("div");
  if (buttonObj.width) {
    if (buttonObj.width == 2) {
      button.classList = "button button2";
    } else if (buttonObj.width == 1.5) {
      button.classList = "button button15";
    } else if (buttonObj.width == 3) {
      button.classList = "button button3";
    } else {
      button.classList = "button button4";
    }
  } else {
    button.classList = "button";
  }
  button.classList.add(buttonObj.code);
  let main = document.createElement("span");
  main.textContent = buttonObj.main;
  main.classList = "main";
  if (buttonObj.alt != undefined) {
    let sub = document.createElement("span");
    sub.textContent = buttonObj.alt;
    sub.classList = "sub";
    button.append(sub);
  }
  button.append(main);
  return button;
}

const rowsInWrapper = 5;

function fillWrapeper(rowsInWrapper, keyboardList) {
  let wrapper = document.createElement("div");
  wrapper.classList = "wrapper";
  for (let i = 0; i<rowsInWrapper; i++) {
    let row = document.createElement("div");
    row.classList = "row";
    wrapper.append(row);
  }
  
  for (let i of keyboardList) {
    wrapper.children[i.row - 1].append(createButton(i));
  }
  return wrapper;
}

if (keyBoardLayout_EN) {
  var wrapper = fillWrapeper(rowsInWrapper, keyboardList_EN);
} else {
  var wrapper = fillWrapeper(rowsInWrapper, keyboardList_RU);
}


document.body.append(inputWindow);
inputWindow.focus();
document.body.append(wrapper);
let textDiv = document.createElement("div");
textDiv.classList = "info";
textDiv.textContent = "Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe shift + alt"
document.body.append(textDiv);

/* Listeners */

/* Click listeners */

function mousedownHandler(event) {
  let inputWindow = document.querySelector("textarea");
  let target = event.target.closest(".button")
  if (!inputWindow.focus()) {
    inputWindow.focus();
  }
  if (target) {
    target.classList.add("active");
    event.preventDefault();
  };
}


function mouseupHandler(event) {{
  let inputWindow = document.querySelector("textarea");
  let target = event.target.closest(".button");
  if (target) {
    let prevText = inputWindow.value.slice(0, inputWindow.selectionStart);
    let postText = inputWindow.value.slice(inputWindow.selectionEnd);
    if ((target.children[0].textContent == "Ru")) {
      if (keyBoardLayout_EN) {
        wrapper.remove();
        wrapper = fillWrapeper(rowsInWrapper, keyboardList_RU);
        inputWindow.after(wrapper);
        wrapper.addEventListener("mousedown", mousedownHandler);
        wrapper.addEventListener("mouseup", mouseupHandler);
        keyBoardLayout_EN = !keyBoardLayout_EN;
      } else {
        wrapper.remove();
        wrapper = fillWrapeper(rowsInWrapper, keyboardList_EN);
        inputWindow.after(wrapper);
        wrapper.addEventListener("mousedown", mousedownHandler);
        wrapper.addEventListener("mouseup", mouseupHandler);
        keyBoardLayout_EN = !keyBoardLayout_EN;
      }
    } else if (target.children.length != 1 || target.children[0].textContent == " ") { // for letters and spaces
      if (!shiftMode) { // if shift key is NOT pressed 
        if (!tabMode || !target.classList[1].includes("Key")) {
          if (target.children[1]) { // if shift key is NOT pressed AND tab key is NOT pressed
            inputWindow.value = prevText + target.children[1].textContent + postText; // for letters
          } else {
            inputWindow.value = prevText + target.children[0].textContent + postText;  // for spaces
          }
        } else {
          inputWindow.value = prevText + target.children[0].textContent + postText;
        }
      } else { // if shift key IS pressed 
        if (!tabMode || !target.classList[1].includes("Key")) { // if shift key IS pressed AND tab key is NOT pressed
          inputWindow.value = prevText + target.children[0].textContent + postText; // for any
        } else {
          if (target.children[1]) { // if shift key IS pressed AND tab key IS pressed
            inputWindow.value = prevText + target.children[1].textContent + postText; // for letters
          } else {
            inputWindow.value = prevText + target.children[0].textContent + postText; // for spaces
          }
        }
      }
      inputWindow.setSelectionRange(prevText.length+1, prevText.length+1);
      target.classList.remove("active");
    } else { // for anything but letters
      if (target.children[0].textContent == "Del" || target.children[0].textContent == "Backspace") {
        if (inputWindow.selectionEnd == inputWindow.selectionStart) {
          if (target.children[0].textContent == "Backspace") {
            inputWindow.value = prevText.slice(0,prevText.length-1) + postText;
            inputWindow.setSelectionRange(prevText.length-1, prevText.length-1);
            
          }
          if (target.children[0].textContent == "Del") {
            inputWindow.value = prevText + postText.slice(1);
            inputWindow.setSelectionRange(prevText.length, prevText.length);
          }
        } else {
          inputWindow.value = prevText + postText;
          inputWindow.setSelectionRange(prevText.length, prevText.length);
        }
      } else if (target.children[0].textContent == "Tab") {
        let tabSpace = "";
        for (let j = 0; j < tabSpaceLength; j++) {
          tabSpace += " ";
        }
        inputWindow.value = prevText + tabSpace + postText;
        inputWindow.setSelectionRange(prevText.length + tabSpaceLength , prevText.length + tabSpaceLength);
      } else if (target.children[0].textContent == "Enter") {
        inputWindow.value = prevText + '\n' + postText;
        inputWindow.setSelectionRange(prevText.length + 1 , prevText.length + 1);
      } else if (target.children[0].textContent == "Shift") {
        let shiftLeft = document.querySelector(".ShiftLeft");
        let shiftRight = document.querySelector(".ShiftRight");
        if (shiftMode) {
          shiftLeft.classList.remove("active");
          shiftRight.classList.remove("active");
        }
        shiftMode = !shiftMode;
        return;
      } else if (target.children[0].textContent == "CapsLock") {
        if (tabMode) {
          target.classList.remove("active");
        }
        tabMode = !tabMode;
        return;
      }
      target.classList.remove("active");
    }
  }
}

}
wrapper.addEventListener("mousedown", mousedownHandler);
wrapper.addEventListener("mouseup", mouseupHandler);

/* Key press listeners */

function findFromListByKeyCode(keyCode) {
  let catchedKey = false;
  for (let key of keyboardList_EN) {
    if (key.code == keyCode) {
      catchedKey = true;
      return document.querySelector(`.${key.code}`);
    }
  }
  if (!catchedKey) {
    return null;
  }
}
document.addEventListener("keydown", (event) => {
  if (event.code == "AltLeft" && event.shiftKey) {
    if (keyBoardLayout_EN) {
      wrapper.remove();
      wrapper = fillWrapeper(rowsInWrapper, keyboardList_RU);
      inputWindow.after(wrapper);
      wrapper.addEventListener("mousedown", mousedownHandler);
      wrapper.addEventListener("mouseup", mouseupHandler);
      keyBoardLayout_EN = !keyBoardLayout_EN;
    } else {
      wrapper.remove();
      wrapper = fillWrapeper(rowsInWrapper, keyboardList_EN);
      inputWindow.after(wrapper);
      wrapper.addEventListener("mousedown", mousedownHandler);
      wrapper.addEventListener("mouseup", mouseupHandler);
      keyBoardLayout_EN = !keyBoardLayout_EN;
    }
  }
  let button = findFromListByKeyCode(event.code);
  if (button) {
    button.classList.add("active");
  }
});
document.addEventListener("keyup", (event) => {
  let button = findFromListByKeyCode(event.code);
  if (button) {
    button.classList.remove("active");
  }
});
