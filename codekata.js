// var str = 'learn practice get hired';
// var str1 = str.split(" ").length;
// if(str1===5){
//     console.log(str1)
//     console.log("1")
// }else{
//        console.log(str1)
//     console.log("-1")
// }

function countOccurrences(sentence, S) {
    let count = 0;
    let index = sentence.indexOf(S);
    console.log(index);

    while (index !== -1) {
        count++;
        index = sentence.indexOf(S, index + S.length);
         console.log('test123'+index);
    }

    return count > 0 ? count : -1;
}

// Sample input
const sentence ="code code code learn"; //"I enjoy doing codekata";
const S = "rttr";

const result = countOccurrences(sentence, S);
console.log(result);