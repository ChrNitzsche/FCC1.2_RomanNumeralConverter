const arrRomanNumbers = ["I", "V", "X", "L", "C", "D", "M", "ↁ", "ↂ", "ↇ", "" /*! Undefined */ ];

function transformDigit(digit) {
    const V =-1; // predecessor of position "(var)intRomPos"
    const S = 0; // intRomPos = position in Array arrRomanNumbers
    const N = 1; // successor of position "(var)intRomPos"

    switch (digit) {
        case "1": return [V]; break;
        case "2": return [V, V]; break;
        case "3": return [V, V, V]; break;
        case "4": return [V, S]; break;
        case "5": return [S]; break;
        case "6": return [S, V]; break;
        case "7": return [S, V, V]; break;
        case "8": return [S, V, V, V]; break;
        case "9": return [V, N]; break;
        case "0": return []; break;
    }
}

function position_arrRomanNumbers(strNum) { // arrStellen ->  [ 5, 3, 1 ]
    let arrStellen = [];
    for (let i = strNum.length; i > 0; i--) {
        arrStellen.push(2 * i - 1);
    }
    return arrStellen;
}

function convertToRoman(num) {
    if (isNaN(parseInt(num))) {
        console.log("Error: Numbers must be integers");
        return { Error: "Numbers must be integers" };
    }

    var arr = [];
    let strRom = "";
    let intRomPos = 0;

    let strNum = "" + num;

    // intRomPos: [...,7,5,3,1], da Dezimalzahl in Reihenfolge:
    // T-H-Z-E bearbeitet wird -> Römische Zahl von hinten aufrollen
    intRomPos = position_arrRomanNumbers(strNum);
    for (let i = 0; i < strNum.length; i++) {
        // arr = [-1,0,+1] or [1,-1,-1], ... -> daraus wird mithilfe von inRomPos der korrekte römische Buchstabe abgegriffen. 
        // intRomPos = 1 und arr = [1,-1,-1,-1] -> [X,I,I,I], wobei der Buchstabe "V" in arr "0" wäre;
        arr = transformDigit(strNum[i]);
        // arr umwandeln
        for (let j = 0; j < arr.length; j++) {
            strRom = strRom + arrRomanNumbers[intRomPos[i] + arr[j]];
        }
    }
    console.log(strRom);
    return strRom;
}

convertToRoman(7786);
// check: https://www.romannumerals.org/converter
