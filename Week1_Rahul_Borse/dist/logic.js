"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandshake = exports.checkLeapYear = exports.concat = exports.splitString = void 0;
function splitString(str) {
    // return str.replace('_',' ');
    return str.split('_').join(' ');
}
exports.splitString = splitString;
function concat(str1, str2) {
    return str1 + str2;
}
exports.concat = concat;
function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "Leap Year";
    }
    else {
        return "Not a Leap Year";
    }
}
exports.checkLeapYear = checkLeapYear;
function secretHandshake(num) {
    if (num < 1 || num > 31) {
        return "";
    }
    let binaryNum = num.toString(2);
    // console.log(binaryNum)
    let seqOfAction = [];
    for (let i = binaryNum.length - 1; i >= 0; i--) {
        let currentPosition = binaryNum.length - 1 - i;
        if (binaryNum[i] == '1') {
            if (currentPosition === 0) {
                seqOfAction.push("wink");
            }
            else if (currentPosition === 1) {
                seqOfAction.push("double blink");
            }
            else if (currentPosition === 2) {
                seqOfAction.push("close your eyes");
            }
            else if (currentPosition === 3) {
                seqOfAction.push("jump");
            }
            else if (currentPosition === 4) {
                seqOfAction.reverse();
            }
        }
    }
    return seqOfAction.join(', ');
}
exports.secretHandshake = secretHandshake;
//# sourceMappingURL=logic.js.map