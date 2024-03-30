let space = document.querySelector("#space");

function addnum(x){
    space.textContent += `${x}`;
    space = space;
}

function clearText(){
    space.innerHTML = "";
}

function equal(){
    let emptySpace = [];
    let numcount = 0;
    let string = "";
    for(let i = 0; i < space.innerHTML.length;i++){
        if(hasop(space.innerHTML.charAt(i))){
            emptySpace[numcount] = string;
            string = "";
            emptySpace[numcount + 1] = space.innerHTML.charAt(i);
            numcount+=2;
        }
        else{
            string += space.innerHTML.charAt(i);
            if(i === space.innerHTML.length - 1){
                emptySpace[numcount] = string;
            }
        }
    }
    space.textContent = recursive(emptySpace);
}

function hasop(x){
    return x === "+" || x === "-" || x === "*" || x === "/";
}

function recursive(array){
    let map = array;
    let answer = 0;
    if(map.includes('*')){
        let index = map.findIndex(map => map === "*");
        answer = Number(map[index - 1]) * Number(map[index + 1]);
        map.splice(index - 1,3,answer);
        return recursive(map);
    }
    if(map.includes('/')){
        let index = map.findIndex(map => map === "/");
        answer = Number(map[index - 1]) / Number(map[index + 1]);
        map.splice(index - 1,3,answer);
        return recursive(map);
    }
    if(map.includes('-')){
        let index = map.findIndex(map => map === "-");
        answer = Number(map[index - 1]) - Number(map[index + 1]);
        map.splice(index - 1,3,answer);
        return recursive(map);
    }
    if(map.includes('+')){
        let index = map.findIndex(map => map === "+");
        answer = Number(map[index - 1]) + Number(map[index + 1]);
        map.splice(index - 1,3,answer);
        return recursive(map);
    }
    return map;
}






