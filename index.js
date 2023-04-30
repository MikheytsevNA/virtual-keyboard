let inputWindow = document.createElement('textarea');
inputWindow.wrap = 'off';
const keyBoardListEN = [
  {
    main: '`', alt: '~', row: 1, code: 'Backquote',
  },
  {
    main: '1', alt: '!', row: 1, code: 'Digit1',
  },
  {
    main: '2', alt: '@', row: 1, code: 'Digit2',
  },
  {
    main: '3', alt: '#', row: 1, code: 'Digit3',
  },
  {
    main: '4', alt: '$', row: 1, code: 'Digit4',
  },
  {
    main: '5', alt: '%', row: 1, code: 'Digit5',
  },
  {
    main: '6', alt: '^', row: 1, code: 'Digit6',
  },
  {
    main: '7', alt: '&', row: 1, code: 'Digit7',
  },
  {
    main: '8', alt: '*', row: 1, code: 'Digit8',
  },
  {
    main: '9', alt: '(', row: 1, code: 'Digit9',
  },
  {
    main: '0', alt: ')', row: 1, code: 'Digit0',
  },
  {
    main: '-', alt: '_', row: 1, code: 'Minus',
  },
  {
    main: '=', alt: '+', row: 1, code: 'Equal',
  },
  {
    main: 'Backspace', row: 1, width: 2, code: 'Backspace',
  },
  { main: 'Tab', row: 2, code: 'Tab' },
  {
    main: 'q', alt: 'Q', row: 2, code: 'KeyQ',
  },
  {
    main: 'w', alt: 'W', row: 2, code: 'KeyW',
  },
  {
    main: 'e', alt: 'E', row: 2, code: 'KeyE',
  },
  {
    main: 'r', alt: 'R', row: 2, code: 'KeyR',
  },
  {
    main: 't', alt: 'T', row: 2, code: 'KeyT',
  },
  {
    main: 'y', alt: 'Y', row: 2, code: 'KeyY',
  },
  {
    main: 'u', alt: 'U', row: 2, code: 'KeyU',
  },
  {
    main: 'i', alt: 'I', row: 2, code: 'KeyI',
  },
  {
    main: 'o', alt: 'O', row: 2, code: 'KeyO',
  },
  {
    main: 'p', alt: 'P', row: 2, code: 'KeyP',
  },
  {
    main: '[', alt: '{', row: 2, code: 'BracketLeft',
  },
  {
    main: ']', alt: '}', row: 2, code: 'BracketRight',
  },
  {
    main: '\\', alt: '|', row: 2, code: 'Backslash',
  },
  { main: 'Del', row: 2, code: 'Delete' },
  {
    main: 'CapsLock', row: 3, width: 2, code: 'CapsLock',
  },
  {
    main: 'a', alt: 'A', row: 3, code: 'KeyA',
  },
  {
    main: 's', alt: 'S', row: 3, code: 'KeyS',
  },
  {
    main: 'd', alt: 'D', row: 3, code: 'KeyD',
  },
  {
    main: 'f', alt: 'F', row: 3, code: 'KeyF',
  },
  {
    main: 'g', alt: 'G', row: 3, code: 'KeyG',
  },
  {
    main: 'h', alt: 'H', row: 3, code: 'KeyH',
  },
  {
    main: 'j', alt: 'J', row: 3, code: 'KeyJ',
  },
  {
    main: 'k', alt: 'K', row: 3, code: 'KeyK',
  },
  {
    main: 'l', alt: 'L', row: 3, code: 'KeyL',
  },
  {
    main: ';', alt: ':', row: 3, code: 'Semicolon',
  },
  {
    main: "'", alt: '"', row: 3, code: 'Quote',
  },
  {
    main: 'Enter', row: 3, width: 2, code: 'Enter',
  },
  {
    main: 'Shift', row: 4, width: 2, code: 'ShiftLeft',
  },
  {
    main: 'En', alt: 'Ru', row: 4, code: 'ShiftLeft',
  },
  {
    main: 'z', alt: 'Z', row: 4, code: 'KeyZ',
  },
  {
    main: 'x', alt: 'X', row: 4, code: 'KeyX',
  },
  {
    main: 'c', alt: 'C', row: 4, code: 'KeyC',
  },
  {
    main: 'v', alt: 'V', row: 4, code: 'KeyV',
  },
  {
    main: 'b', alt: 'B', row: 4, code: 'KeyB',
  },
  {
    main: 'n', alt: 'N', row: 4, code: 'KeyN',
  },
  {
    main: 'm', alt: 'M', row: 4, code: 'KeyM',
  },
  {
    main: ',', alt: '<', row: 4, code: 'Comma',
  },
  {
    main: '.', alt: '>', row: 4, code: 'Period',
  },
  {
    main: '/', alt: '?', row: 4, code: 'Slash',
  },
  { main: '\u{2191}', row: 4, code: 'ArrowUp' },
  { main: 'Shift', row: 4, code: 'ShiftRight' },
  {
    main: 'Control', row: 5, width: 1.5, code: 'ControlLeft',
  },
  { main: 'Meta', row: 5, code: 'MetaLeft' },
  { main: 'Alt', row: 5, code: 'AltLeft' },
  {
    main: ' ', row: 5, width: 4, code: 'Space',
  },
  { main: 'Alt', row: 5, code: 'AltRight' },
  {
    main: 'Control', row: 5, width: 1.5, code: 'ControlRight',
  },
  { main: '\u{2190}', row: 5, code: 'ArrowLeft' },
  { main: '\u{2193}', row: 5, code: 'ArrowDown' },
  { main: '\u{2192}', row: 5, code: 'ArrowRight' },
];

const keyBoardListRU = [
  {
    main: '`', alt: '~', row: 1, code: 'Backquote',
  },
  {
    main: '1', alt: '!', row: 1, code: 'Digit1',
  },
  {
    main: '2', alt: '"', row: 1, code: 'Digit2',
  },
  {
    main: '3', alt: '№', row: 1, code: 'Digit3',
  },
  {
    main: '4', alt: ';', row: 1, code: 'Digit4',
  },
  {
    main: '5', alt: '%', row: 1, code: 'Digit5',
  },
  {
    main: '6', alt: ':', row: 1, code: 'Digit6',
  },
  {
    main: '7', alt: '?', row: 1, code: 'Digit7',
  },
  {
    main: '8', alt: '*', row: 1, code: 'Digit8',
  },
  {
    main: '9', alt: '(', row: 1, code: 'Digit9',
  },
  {
    main: '0', alt: ')', row: 1, code: 'Digit0',
  },
  {
    main: '-', alt: '_', row: 1, code: 'Minus',
  },
  {
    main: '=', alt: '+', row: 1, code: 'Equal',
  },
  {
    main: 'Backspace', row: 1, width: 2, code: 'Backspace',
  },
  { main: 'Tab', row: 2, code: 'Tab' },
  {
    main: 'й', alt: 'Й', row: 2, code: 'KeyQ',
  },
  {
    main: 'ц', alt: 'Ц', row: 2, code: 'KeyW',
  },
  {
    main: 'у', alt: 'У', row: 2, code: 'KeyE',
  },
  {
    main: 'к', alt: 'К', row: 2, code: 'KeyR',
  },
  {
    main: 'е', alt: 'Е', row: 2, code: 'KeyT',
  },
  {
    main: 'н', alt: 'Н', row: 2, code: 'KeyY',
  },
  {
    main: 'г', alt: 'Г', row: 2, code: 'KeyU',
  },
  {
    main: 'ш', alt: 'Ш', row: 2, code: 'KeyI',
  },
  {
    main: 'щ', alt: 'Щ', row: 2, code: 'KeyO',
  },
  {
    main: 'з', alt: 'З', row: 2, code: 'KeyP',
  },
  {
    main: 'х', alt: 'Х', row: 2, code: 'BracketLeft',
  },
  {
    main: 'ъ', alt: 'Ъ', row: 2, code: 'BracketRight',
  },
  {
    main: '\\', alt: '|', row: 2, code: 'Backslash',
  },
  { main: 'Del', row: 2, code: 'Delete' },
  {
    main: 'CapsLock', row: 3, width: 2, code: 'CapsLock',
  },
  {
    main: 'ф', alt: 'Ф', row: 3, code: 'KeyA',
  },
  {
    main: 'ы', alt: 'Ы', row: 3, code: 'KeyS',
  },
  {
    main: 'в', alt: 'В', row: 3, code: 'KeyD',
  },
  {
    main: 'а', alt: 'А', row: 3, code: 'KeyF',
  },
  {
    main: 'п', alt: 'П', row: 3, code: 'KeyG',
  },
  {
    main: 'р', alt: 'Р', row: 3, code: 'KeyH',
  },
  {
    main: 'о', alt: 'О', row: 3, code: 'KeyJ',
  },
  {
    main: 'л', alt: 'Л', row: 3, code: 'KeyK',
  },
  {
    main: 'д', alt: 'Д', row: 3, code: 'KeyL',
  },
  {
    main: 'ж', alt: 'Ж', row: 3, code: 'Semicolon',
  },
  {
    main: 'э', alt: 'Э', row: 3, code: 'Quote',
  },
  {
    main: 'Enter', row: 3, width: 2, code: 'Enter',
  },
  {
    main: 'Shift', row: 4, width: 2, code: 'ShiftLeft',
  },
  {
    main: 'En', alt: 'Ru', row: 4, code: 'ShiftLeft',
  },
  {
    main: 'я', alt: 'Я', row: 4, code: 'KeyZ',
  },
  {
    main: 'ч', alt: 'Ч', row: 4, code: 'KeyX',
  },
  {
    main: 'с', alt: 'С', row: 4, code: 'KeyC',
  },
  {
    main: 'м', alt: 'М', row: 4, code: 'KeyV',
  },
  {
    main: 'и', alt: 'И', row: 4, code: 'KeyB',
  },
  {
    main: 'т', alt: 'Т', row: 4, code: 'KeyN',
  },
  {
    main: 'Ь', alt: 'ь', row: 4, code: 'KeyM',
  },
  {
    main: 'б', alt: 'Б', row: 4, code: 'Comma',
  },
  {
    main: 'ю', alt: 'Ю', row: 4, code: 'Period',
  },
  {
    main: '.', alt: ',', row: 4, code: 'Slash',
  },
  { main: '\u{2191}', row: 4, code: 'ArrowUp' },
  { main: 'Shift', row: 4, code: 'ShiftRight' },
  {
    main: 'Control', row: 5, width: 1.5, code: 'ControlLeft',
  },
  { main: 'Meta', row: 5, code: 'MetaLeft' },
  { main: 'Alt', row: 5, code: 'AltLeft' },
  {
    main: ' ', row: 5, width: 4, code: 'Space',
  },
  { main: 'Alt', row: 5, code: 'AltRight' },
  {
    main: 'Control', row: 5, width: 1.5, code: 'ControlRight',
  },
  { main: '\u{2190}', row: 5, code: 'ArrowLeft' },
  { main: '\u{2193}', row: 5, code: 'ArrowDown' },
  { main: '\u{2192}', row: 5, code: 'ArrowRight' },
];
const tabSpaceLength = 4;
let shiftMode = false;
let tabMode = false;
let ctrlMode = false;
let keyBoardLayoutEN = true; // English by default

function setStorage(isEnglish) {
  localStorage.setItem('currentLanguage', isEnglish);
}

function getFromStorage(key) {
  return localStorage.getItem(key);
}

if (!localStorage.getItem('currentLanguage')) {
  keyBoardLayoutEN = true; // English by default
  setStorage(keyBoardLayoutEN);
} else {
  keyBoardLayoutEN = getFromStorage('currentLanguage');
  if (keyBoardLayoutEN === 'false') {
    keyBoardLayoutEN = false;
  } else if (keyBoardLayoutEN === 'true') {
    keyBoardLayoutEN = true;
  }
}

function createButton(buttonObj) {
  const button = document.createElement('div');
  if (buttonObj.width) {
    if (buttonObj.width === 2) {
      button.classList = 'button button2';
    } else if (buttonObj.width === 1.5) {
      button.classList = 'button button15';
    } else if (buttonObj.width === 3) {
      button.classList = 'button button3';
    } else {
      button.classList = 'button button4';
    }
  } else {
    button.classList = 'button';
  }
  button.classList.add(buttonObj.code);
  const main = document.createElement('span');
  main.textContent = buttonObj.main;
  main.classList = 'main';
  if (buttonObj.alt !== undefined) {
    const sub = document.createElement('span');
    sub.textContent = buttonObj.alt;
    sub.classList = 'sub';
    button.append(sub);
  }
  button.append(main);
  return button;
}

const rowsInWrapper = 5;

function fillWrapper(rowsInWrapaper, keyboardList) {
  const wrapper = document.createElement('div');
  wrapper.classList = 'wrapper';
  for (let i = 0; i < rowsInWrapaper; i += 1) {
    const row = document.createElement('div');
    row.classList = 'row';
    wrapper.append(row);
  }

  keyboardList.forEach((element) => {
    wrapper.children[element.row - 1].append(createButton(element));
  });
  return wrapper;
}

let wrapper = fillWrapper(rowsInWrapper, keyBoardLayoutEN ? keyBoardListEN : keyBoardListRU);

document.body.append(inputWindow);
inputWindow.focus();
document.body.append(wrapper);
const textDiv = document.createElement('div');
textDiv.classList = 'info';
textDiv.textContent = 'Keyboard for Windows OS. To toggle between eng and ru: left shift + alt';
document.body.append(textDiv);

/* Listeners */

/* Click listeners */

function mouseLeaveHandler(event) {
  event.target.classList.remove('active');
}

function mousedownHandler(event) {
  inputWindow = document.querySelector('textarea');
  const target = event.target.closest('.button');
  if (!inputWindow.focus()) {
    inputWindow.focus();
  }
  if (target) {
    target.classList.add('active');
    target.addEventListener('mouseleave', mouseLeaveHandler, { once: true });
    event.preventDefault();
  }
}

function mouseupHandler(event) {
  inputWindow = document.querySelector('textarea');
  const target = event.target.closest('.button');
  const prevText = inputWindow.value.slice(0, inputWindow.selectionStart);
  let postText = inputWindow.value.slice(inputWindow.selectionEnd);
  if (target) {
    if ((target.children[0].textContent === 'Ru')) {
      if (keyBoardLayoutEN) {
        wrapper.remove();
        wrapper = fillWrapper(rowsInWrapper, keyBoardListRU);
        inputWindow.after(wrapper);
        wrapper.addEventListener('mousedown', mousedownHandler);
        wrapper.addEventListener('mouseup', mouseupHandler);
        keyBoardLayoutEN = !keyBoardLayoutEN;
        setStorage(keyBoardLayoutEN);
      } else {
        wrapper.remove();
        wrapper = fillWrapper(rowsInWrapper, keyBoardListEN);
        inputWindow.after(wrapper);
        wrapper.addEventListener('mousedown', mousedownHandler);
        wrapper.addEventListener('mouseup', mouseupHandler);
        keyBoardLayoutEN = !keyBoardLayoutEN;
        setStorage(keyBoardLayoutEN);
      }
    } else if ((target.children.length !== 1 || target.children[0].textContent === ' ') && !ctrlMode) { // for letters and spaces
      if (!shiftMode) { // if shift key is NOT pressed
        if (!tabMode || !target.classList[1].includes('Key')) {
          if (target.children[1]) { // if shift key is NOT pressed AND tab key is NOT pressed
            inputWindow.value = prevText + target.children[1].textContent + postText; // for letters
          } else {
            inputWindow.value = prevText + target.children[0].textContent + postText; // for spaces
          }
        } else {
          inputWindow.value = prevText + target.children[0].textContent + postText;
        }
      } else if (!tabMode || !target.classList[1].includes('Key')) { // if shift key IS pressed AND tab key is NOT pressed
        inputWindow.value = prevText + target.children[0].textContent + postText; // for any
      } else if (target.children[1]) { // if shift key IS pressed AND tab key IS pressed
        inputWindow.value = prevText + target.children[1].textContent + postText; // for letters
      } else {
        inputWindow.value = prevText + target.children[0].textContent + postText; // for spaces
      }
      inputWindow.setSelectionRange(prevText.length + 1, prevText.length + 1);
      target.classList.remove('active');
    } else { // for anything but letters
      if (target.children[0].textContent === 'Del' || target.children[0].textContent === 'Backspace') {
        if (inputWindow.selectionEnd === inputWindow.selectionStart) {
          if (target.children[0].textContent === 'Backspace') {
            inputWindow.value = prevText.slice(0, prevText.length - 1) + postText;
            inputWindow.setSelectionRange(prevText.length - 1, prevText.length - 1);
          }
          if (target.children[0].textContent === 'Del') {
            inputWindow.value = prevText + postText.slice(1);
            inputWindow.setSelectionRange(prevText.length, prevText.length);
          }
        } else {
          inputWindow.value = prevText + postText;
          inputWindow.setSelectionRange(prevText.length, prevText.length);
        }
      } else if (target.children[0].textContent === 'Tab') {
        let tabSpace = '';
        for (let j = 0; j < tabSpaceLength; j += 1) {
          tabSpace += ' ';
        }
        inputWindow.value = prevText + tabSpace + postText;
        inputWindow.setSelectionRange(
          prevText.length + tabSpaceLength,
          prevText.length + tabSpaceLength,
        );
      } else if (target.children[0].textContent === 'Enter') {
        inputWindow.value = `${prevText}\n${postText}`;
        inputWindow.setSelectionRange(prevText.length + 1, prevText.length + 1);
      } else if (target.children[0].textContent === 'Shift') {
        const shiftLeft = document.querySelector('.ShiftLeft');
        const shiftRight = document.querySelector('.ShiftRight');
        if (shiftMode) {
          shiftLeft.classList.remove('active');
          shiftRight.classList.remove('active');
        }
        shiftMode = !shiftMode;
        target.removeEventListener('mouseleave', mouseLeaveHandler, { once: true });
        return;
      } else if (target.children[0].textContent === 'Control') {
        const controlLeft = document.querySelector('.ControlLeft');
        const controlRight = document.querySelector('.ControlRight');
        if (ctrlMode) {
          controlLeft.classList.remove('active');
          controlRight.classList.remove('active');
        }
        ctrlMode = !ctrlMode;
        target.removeEventListener('mouseleave', mouseLeaveHandler, { once: true });
        return;
      } else if (target.children[0].textContent === 'CapsLock') {
        if (tabMode) {
          target.classList.remove('active');
        }
        tabMode = !tabMode;
        target.removeEventListener('mouseleave', mouseLeaveHandler, { once: true });
        return;
      } else if (target.children[0].textContent === '\u{2190}') { // arrow left
        if (shiftMode) { // arrow left white shift is pressed
          if (inputWindow.selectionStart === 0) {
            return;
          }
          if (ctrlMode) {
            const prevLineIndex = prevText.lastIndexOf('\n');
            if (prevLineIndex + 1 === inputWindow.selectionStart) {
              if (prevLineIndex === -1) {
                inputWindow.setSelectionRange(0, 0);
              } else {
                inputWindow.setSelectionRange(prevLineIndex, prevLineIndex);
              }
              return;
            }
            let prevSpaceIndex;
            let enchPrevText;
            if (inputWindow.selectionDirection === 'forward') {
              enchPrevText = inputWindow.value.slice(0, inputWindow.selectionEnd);
            } else {
              enchPrevText = prevText;
            }
            prevSpaceIndex = enchPrevText.slice(0, enchPrevText.length - 1).lastIndexOf(' ');
            let isPrevSpace = true;
            let counter = enchPrevText.length - 1;
            if (prevSpaceIndex === -1) {
              prevSpaceIndex = 0;
            } else if (enchPrevText[counter] === ' ') {
              while (isPrevSpace) {
                if (enchPrevText[counter] === ' ') {
                  counter -= 1;
                } else {
                  isPrevSpace = false;
                }
              }
              prevSpaceIndex = enchPrevText.slice(0, counter).lastIndexOf(' ');
              if (prevSpaceIndex === -1) {
                prevSpaceIndex = 0;
              } else {
                prevSpaceIndex += 1;
              }
            } else {
              prevSpaceIndex += 1;
            }
            if (prevLineIndex > prevSpaceIndex) {
              inputWindow.setSelectionRange(prevLineIndex + 1, prevLineIndex + 1);
              return;
            }
            const toPrevSpace = inputWindow.selectionStart - prevSpaceIndex;
            if (inputWindow.selectionStart === inputWindow.selectionEnd) {
              inputWindow.setSelectionRange(inputWindow.selectionStart - toPrevSpace, inputWindow.selectionEnd, 'backward');
            } else if (inputWindow.selectionDirection === 'forward') {
              if (prevSpaceIndex > inputWindow.selectionStart) {
                inputWindow.setSelectionRange(inputWindow.selectionStart, prevSpaceIndex, 'forward');
              } else {
                inputWindow.setSelectionRange(prevSpaceIndex, inputWindow.selectionStart, 'backward');
              }
            } else if (inputWindow.selectionDirection === 'backward') {
              inputWindow.setSelectionRange(inputWindow.selectionStart - toPrevSpace, inputWindow.selectionEnd, 'backward');
            }
          } else if (inputWindow.selectionStart === inputWindow.selectionEnd) {
            inputWindow.setSelectionRange(inputWindow.selectionStart - 1, inputWindow.selectionEnd, 'backward');
          } else if (inputWindow.selectionDirection === 'forward') {
            inputWindow.setSelectionRange(inputWindow.selectionStart, inputWindow.selectionEnd - 1);
          } else if (inputWindow.selectionDirection === 'backward') {
            inputWindow.setSelectionRange(inputWindow.selectionStart - 1, inputWindow.selectionEnd, 'backward');
          }
        } else if (ctrlMode) {
          const prevLineIndex = prevText.lastIndexOf('\n');
          if (prevLineIndex + 1 === inputWindow.selectionStart) {
            inputWindow.setSelectionRange(0, 0);
            return;
          }
          let prevSpaceIndex;
          if (inputWindow.selectionDirection === 'forward' && inputWindow.selectionStart !== inputWindow.selectionEnd) {
            prevSpaceIndex = (prevText + inputWindow.value.slice(inputWindow.selectionStart, inputWindow.selectionEnd + 1)).lastIndexOf(' ');
            inputWindow.setSelectionRange(
              prevSpaceIndex + 1,
              prevSpaceIndex + 1,
            );
            return;
          }
          prevSpaceIndex = prevText.slice(0, prevText.length - 1).lastIndexOf(' ');
          let isPrevSpace = true;
          let counter = prevText.length - 1;
          if (prevSpaceIndex === -1) {
            prevSpaceIndex = 0;
          } else if (prevText[counter] === ' ') {
            while (isPrevSpace) {
              if (prevText[counter] === ' ') {
                counter -= 1;
              } else {
                isPrevSpace = false;
              }
            }
            prevSpaceIndex = prevText.slice(0, counter).lastIndexOf(' ');
            if (prevSpaceIndex === -1) {
              prevSpaceIndex = 0;
            } else {
              prevSpaceIndex += 1;
            }
          } else {
            prevSpaceIndex += 1;
          }
          if (prevLineIndex > prevSpaceIndex) {
            inputWindow.setSelectionRange(prevLineIndex + 1, prevLineIndex + 1);
            return;
          }
          const toPrevSpace = inputWindow.selectionStart - prevSpaceIndex;
          inputWindow.setSelectionRange(
            inputWindow.selectionStart - toPrevSpace,
            inputWindow.selectionStart - toPrevSpace,
          );
        } else if (inputWindow.selectionEnd === inputWindow.selectionStart) {
          inputWindow.setSelectionRange(inputWindow.selectionEnd - 1, inputWindow.selectionEnd - 1);
        } else {
          inputWindow.setSelectionRange(inputWindow.selectionStart, inputWindow.selectionStart);
        }
      } else if (target.children[0].textContent === '\u{2192}') { // arrow right
        if (shiftMode) { // arrow right white shift is pressed
          if (inputWindow.selectionEnd === inputWindow.value.length) {
            return;
          }
          if (ctrlMode) {
            const nextLineIndex = postText.lastIndexOf('\n');
            if (nextLineIndex === inputWindow.selectionEnd) {
              inputWindow.setSelectionRange(0, 0);
              return;
            }
            let nextSpaceIndex;
            if (inputWindow.selectionDirection === 'backward') {
              nextSpaceIndex = (inputWindow.value.slice(inputWindow.selectionStart, inputWindow.selectionEnd + 1) + postText).indexOf(' ');
              inputWindow.setSelectionRange(
                inputWindow.selectionStart + nextSpaceIndex + 1,
                inputWindow.selectionEnd,
                'forward',
              );
              return;
            }
            nextSpaceIndex = postText.slice(0, postText.length - 1).indexOf(' ');
            let isNextSpace = true;
            let counter = nextSpaceIndex + 1;
            if (nextSpaceIndex === -1) {
              nextSpaceIndex = postText.length;
            } else if (postText[nextSpaceIndex + 1] === ' ') {
              while (isNextSpace) {
                if (postText[counter] === ' ') {
                  counter += 1;
                } else {
                  isNextSpace = false;
                }
              }
              nextSpaceIndex = counter;
            } else {
              nextSpaceIndex += 1;
            }
            if (nextLineIndex > nextSpaceIndex) {
              inputWindow.setSelectionRange(nextLineIndex + 1, nextLineIndex + 1);
              return;
            }
            const toNextSpace = nextSpaceIndex;
            inputWindow.setSelectionRange(
              inputWindow.selectionStart,
              inputWindow.selectionEnd + toNextSpace,
            );
          } else if (inputWindow.selectionStart === inputWindow.selectionEnd) {
            inputWindow.setSelectionRange(inputWindow.selectionStart, inputWindow.selectionEnd + 1, 'forward');
          } else if (inputWindow.selectionDirection === 'forward') {
            inputWindow.setSelectionRange(inputWindow.selectionStart, inputWindow.selectionEnd + 1);
          } else if (inputWindow.selectionDirection === 'backward') {
            inputWindow.setSelectionRange(inputWindow.selectionStart + 1, inputWindow.selectionEnd, 'backward');
          }
        } else if (ctrlMode) {
          const nextLineIndex = postText.lastIndexOf('\n');
          if (nextLineIndex === inputWindow.selectionEnd) {
            inputWindow.setSelectionRange(0, 0);
            return;
          }
          let nextSpaceIndex;
          if (inputWindow.selectionDirection === 'backward') {
            nextSpaceIndex = (inputWindow.value.slice(inputWindow.selectionStart, inputWindow.selectionEnd + 1) + postText).indexOf(' ');
            inputWindow.setSelectionRange(
              inputWindow.selectionStart + nextSpaceIndex + 1,
              inputWindow.selectionStart + nextSpaceIndex + 1,
            );
            return;
          }
          nextSpaceIndex = postText.slice(0, postText.length - 1).indexOf(' ');
          let isNextSpace = true;
          let counter = nextSpaceIndex + 1;
          if (nextSpaceIndex === -1) {
            nextSpaceIndex = postText.length;
          } else if (postText[nextSpaceIndex + 1] === ' ') {
            while (isNextSpace) {
              if (postText[counter] === ' ') {
                counter += 1;
              } else {
                isNextSpace = false;
              }
            }
            nextSpaceIndex = counter;
          } else {
            nextSpaceIndex += 1;
          }
          if (nextLineIndex > nextSpaceIndex) {
            inputWindow.setSelectionRange(nextLineIndex + 1, nextLineIndex + 1);
            return;
          }
          const toNextSpace = nextSpaceIndex;
          inputWindow.setSelectionRange(
            inputWindow.selectionEnd + toNextSpace,
            inputWindow.selectionEnd + toNextSpace,
          );
        } else if (inputWindow.selectionEnd === inputWindow.selectionStart) {
          inputWindow.setSelectionRange(inputWindow.selectionEnd + 1, inputWindow.selectionEnd + 1);
        } else {
          inputWindow.setSelectionRange(inputWindow.selectionEnd, inputWindow.selectionEnd);
        }
      } else if (target.children[0].textContent === '\u{2193}') { // arrow down
        if (shiftMode) { // arrow down white shift IS pressed
          if (inputWindow.selectionEnd === inputWindow.selectionStart) {
            let toNextLine = postText.indexOf('\n');
            const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
            let toNextNextLine = postText.slice(toNextLine + 1).indexOf('\n');
            if (toNextLine === -1) {
              toNextLine = inputWindow.value.length - inputWindow.selectionEnd;
            }
            if (toNextNextLine === -1) {
              toNextNextLine = inputWindow.value.length - prevText.length - toNextLine;
            }
            if (toPrevLine > toNextNextLine) {
              inputWindow.setSelectionRange(
                inputWindow.selectionStart,
                prevText.length + toNextLine + toNextNextLine,
              );
              postText = inputWindow.value.slice(inputWindow.selectionEnd);
            } else {
              inputWindow.setSelectionRange(
                inputWindow.selectionStart,
                prevText.length + toNextLine + toPrevLine + 1,
              );
              postText = inputWindow.value.slice(inputWindow.selectionEnd);
            }
          } else {
            let toNextLine = postText.indexOf('\n');
            const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
            let toNextNextLine = postText.slice(toNextLine + 1).indexOf('\n');
            if (toNextLine === -1) {
              toNextLine = inputWindow.value.length - inputWindow.selectionEnd;
            }
            if (toNextNextLine === -1) {
              toNextNextLine = inputWindow.value.length - inputWindow.selectionEnd - toNextLine - 1;
            }
            if (inputWindow.selectionDirection === 'backward') {
              if (toPrevLine >= toNextNextLine) {
                inputWindow.setSelectionRange(
                  inputWindow.selectionEnd,
                  inputWindow.selectionEnd + toNextLine + toNextNextLine + 1,
                );
              } else {
                inputWindow.setSelectionRange(
                  inputWindow.selectionEnd,
                  inputWindow.selectionEnd + toNextLine + toPrevLine + 1,
                );
              }
            } else if (toPrevLine >= toNextNextLine) {
              inputWindow.setSelectionRange(
                inputWindow.selectionStart,
                inputWindow.selectionEnd + toNextLine + toNextNextLine + 1,
              );
            } else {
              inputWindow.setSelectionRange(
                inputWindow.selectionStart,
                inputWindow.selectionEnd + toNextLine + toPrevLine + 1,
              );
            }
          }
        } else if (inputWindow.selectionEnd === inputWindow.selectionStart) {
          let toNextLine = postText.indexOf('\n');
          const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
          let toNextNextLine = postText.slice(toNextLine + 1).indexOf('\n');
          if (toNextLine === -1) {
            toNextLine = inputWindow.value.length - inputWindow.selectionEnd;
          }
          if (toNextNextLine === -1) {
            toNextNextLine = inputWindow.value.length - prevText.length - toNextLine;
          }
          if (toPrevLine > toNextNextLine) {
            inputWindow.setSelectionRange(
              prevText.length + toNextLine + toNextNextLine,
              prevText.length + toNextLine + toNextNextLine,
            );
          } else {
            inputWindow.setSelectionRange(
              prevText.length + toNextLine + toPrevLine + 1,
              prevText.length + toNextLine + toPrevLine + 1,
            );
          }
        } else {
          const toNextLine = postText.indexOf('\n');
          const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
          let toNextNextLine = postText.slice(toNextLine + 1).indexOf('\n');

          if (toNextNextLine === -1) {
            toNextNextLine = inputWindow.value.length - inputWindow.selectionEnd - toNextLine - 1;
          }
          if (toPrevLine >= toNextNextLine) {
            inputWindow.setSelectionRange(
              inputWindow.selectionEnd + toNextLine + toNextNextLine + 1,
              inputWindow.selectionEnd + toNextLine + toNextNextLine + 1,
            );
          } else {
            inputWindow.setSelectionRange(
              inputWindow.selectionEnd + toNextLine + toPrevLine + 1,
              inputWindow.selectionEnd + toNextLine + toPrevLine + 1,
            );
          }
        }
      } else if (target.children[0].textContent === '\u{2191}') { // arrow up
        if (shiftMode) { // arrow down white shift IS pressed
          let toNextLine = postText.indexOf('\n');
          const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
          const toPrevPrevLine = prevText.slice(0, prevText.length - 1 - toPrevLine).lastIndexOf('\n');
          if (toNextLine === -1) {
            toNextLine = inputWindow.value.length - inputWindow.selectionEnd;
          }
          if (inputWindow.selectionDirection === 'forward') {
            if (prevText.lastIndexOf('\n') === -1) {
              inputWindow.setSelectionRange(0, inputWindow.selectionStart);
            } else if (toPrevPrevLine === -1) {
              if (toPrevLine < inputWindow.selectionStart - toPrevLine) {
                inputWindow.setSelectionRange(toPrevLine, inputWindow.selectionStart);
              } else {
                inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), inputWindow.selectionStart);
              }
            } else if (toPrevLine < prevText.lastIndexOf('\n') - toPrevPrevLine) {
              inputWindow.setSelectionRange(inputWindow.selectionStart - prevText.lastIndexOf('\n') + toPrevPrevLine, inputWindow.selectionStart);
            } else {
              inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), inputWindow.selectionStart);
            }
          } else if (prevText.lastIndexOf('\n') === -1) {
            inputWindow.setSelectionRange(0, inputWindow.selectionEnd);
          } else if (toPrevPrevLine === -1) {
            if (toPrevLine < inputWindow.selectionStart - toPrevLine) {
              inputWindow.setSelectionRange(toPrevLine, inputWindow.selectionEnd);
            } else {
              inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), inputWindow.selectionEnd);
            }
          } else if (toPrevLine < prevText.lastIndexOf('\n') - toPrevPrevLine) {
            inputWindow.setSelectionRange(inputWindow.selectionStart - prevText.lastIndexOf('\n') + toPrevPrevLine, inputWindow.selectionEnd);
          } else {
            inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), inputWindow.selectionEnd);
          }
        } else { // arrow down white shift is NOT pressed
          let toNextLine = postText.indexOf('\n');
          const toPrevLine = prevText.length - 1 - prevText.lastIndexOf('\n');
          const toPrevPrevLine = prevText.slice(0, prevText.length - 1 - toPrevLine).lastIndexOf('\n');
          if (toNextLine === -1) {
            toNextLine = inputWindow.value.length - inputWindow.selectionEnd;
          }
          if (prevText.lastIndexOf('\n') === -1) {
            inputWindow.setSelectionRange(0, 0);
          } else if (toPrevPrevLine === -1) {
            if (toPrevLine < inputWindow.selectionStart - toPrevLine) {
              inputWindow.setSelectionRange(toPrevLine, toPrevLine);
            } else {
              inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), prevText.lastIndexOf('\n'));
            }
          } else if (toPrevLine < prevText.lastIndexOf('\n') - toPrevPrevLine) {
            inputWindow.setSelectionRange(inputWindow.selectionStart - prevText.lastIndexOf('\n') + toPrevPrevLine, inputWindow.selectionStart - prevText.lastIndexOf('\n') + toPrevPrevLine);
          } else {
            inputWindow.setSelectionRange(prevText.lastIndexOf('\n'), prevText.lastIndexOf('\n'));
          }
        }
      } else if (ctrlMode && target.classList.contains('KeyC')) {
        navigator.clipboard.writeText(
          inputWindow.value.slice(inputWindow.selectionStart, inputWindow.selectionEnd),
        ).then(() => {});
      } else if (ctrlMode && target.classList.contains('KeyV')) {
        navigator.clipboard.readText().then(
          (clipText) => {
            inputWindow.value = prevText + clipText + postText;
            inputWindow.setSelectionRange(
              (prevText + clipText).length,
              (prevText + clipText).length,
            );
          },
        );
      } else if (ctrlMode && target.classList.contains('KeyA')) {
        inputWindow.setSelectionRange(0, inputWindow.value.length);
      }
      target.classList.remove('active');
    }
  }
}
wrapper.addEventListener('mousedown', mousedownHandler);
wrapper.addEventListener('mouseup', mouseupHandler);

/* Key press listeners */

function findFromListByKeyCode(keyCode) {
  const item = keyBoardListEN.find((el) => el.code === keyCode);
  return item ? document.querySelector(`.${item.code}`) : null;
}
document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft' && event.shiftKey) {
    if (keyBoardLayoutEN) {
      wrapper.remove();
      wrapper = fillWrapper(rowsInWrapper, keyBoardListRU);
      inputWindow.after(wrapper);
      wrapper.addEventListener('mousedown', mousedownHandler);
      wrapper.addEventListener('mouseup', mouseupHandler);
      keyBoardLayoutEN = !keyBoardLayoutEN;
      setStorage(keyBoardLayoutEN);
    } else {
      wrapper.remove();
      wrapper = fillWrapper(rowsInWrapper, keyBoardListEN);
      inputWindow.after(wrapper);
      wrapper.addEventListener('mousedown', mousedownHandler);
      wrapper.addEventListener('mouseup', mouseupHandler);
      keyBoardLayoutEN = !keyBoardLayoutEN;
      setStorage(keyBoardLayoutEN);
    }
  }
  const button = findFromListByKeyCode(event.code);
  if (button) {
    button.classList.add('active');
  }
  if (event.code === 'CapsLock') {
    const target = document.querySelector('.CapsLock');
    if (tabMode) {
      target.classList.remove('active');
    }
    tabMode = !tabMode;
    return;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    shiftMode = false;
  }
  if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    ctrlMode = false;
  }
});
document.addEventListener('keyup', (event) => {
  const button = findFromListByKeyCode(event.code);
  if (button) {
    if (event.code !== 'CapsLock') {
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        document.querySelector('.ShiftLeft').classList.remove('active');
        document.querySelector('.ShiftRight').classList.remove('active');
      } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        document.querySelector('.ControlLeft').classList.remove('active');
        document.querySelector('.ControlRight').classList.remove('active');
      } else {
        button.classList.remove('active');
      }
    }
  }
});
