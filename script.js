let saves=document.getElementById("save")
let counts=document.getElementById("count")
let count=0
console.log(saves)
function increment(){
    count+=1
    counts.textContent=count
}
function save(){
    console.log(count)
    let countstr=count+"-"
    saves.textContent+=countstr
    counts.textcontent=0
    count=0
}