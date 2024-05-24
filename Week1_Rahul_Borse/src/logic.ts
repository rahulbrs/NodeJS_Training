export function splitString(str : string) : string{
    // return str.replace('_',' ');
    return str.split('_').join(' ');
}

export function concat(str1: string, str2: string): string{
    return str1 + str2;
}
export function checkLeapYear(year : number) : string{
    if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)){
        return "Leap Year";
    }else{
        return "Not a Leap Year"
    }
}

export function secretHandshake(num : number) : string{
    if(num < 1 || num > 31){
        return "";
    }
    let binaryNum = num.toString(2);
    // console.log(binaryNum)
    let seqOfAction: string[] = [];

    for(let i= binaryNum.length-1 ; i >= 0 ; i-- ){
        let currentPosition = binaryNum.length - 1 - i;

        if(binaryNum[i] == '1'){
            if(currentPosition === 0){
                seqOfAction.push("wink");
            }else if(currentPosition === 1){
                seqOfAction.push("double blink");
            }else if(currentPosition === 2){
                seqOfAction.push("close your eyes");
            }else if(currentPosition === 3){
                seqOfAction.push("jump");
            }else if(currentPosition === 4){
                seqOfAction.reverse();
            }
        }
    }
    return seqOfAction.join(', ');
}