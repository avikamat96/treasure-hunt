let answerArr = ['easy','bolo', 'sonu', 'donald duck', 'jalebi', 'jodhaa akbar', 'rupali ganguly', 'momos', 'jhumki'];
let flagArr = [false,false, false, false, false, false, false, false, false];

function processData(index){
    let ans = document.getElementById(`input${index}`).value;
    if(ans.toString().trim().toLowerCase() == answerArr[index-1].toString().trim().toLowerCase()){
        document.getElementById(`box${index}`).style.visibility = 'hidden';
        flagArr[index-1] = true;
    }

    let allTrue = flagArr.every(val => val);
    if(allTrue){
        document.getElementById("image").style = "filter: blur(0px); opacity: 1";
    }
}