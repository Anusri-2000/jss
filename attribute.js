const nodeMap=document.getElementById("my Img").attributes;
let text="";
for(let i=0;i<nodeMap.length;i++){
    text +=nodeMap[i].name + "="+nodemap[i].value + "<br>";

}
document.getElementById("demo").innerHTML="text";