document.getElementById("submit").onclick = function(){
    let sum = Number(document.getElementById("value1").value) + Number(document.getElementById("value2").value);
    
    document.getElementById("Sum").textContent = `The sum is ${sum}`;
}