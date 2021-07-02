var nameofthestudents=[];
function submit(){
var name1=document.getElementById("student1").value;
var name2=document.getElementById("student2").value;
var name3=document.getElementById("student3").value;
var name4=document.getElementById("student4").value;
nameofthestudents.push(name1);
nameofthestudents.push(name2);
nameofthestudents.push(name3);
nameofthestudents.push(name4);
document.getElementById("displayname").innerHTML=nameofthestudents;
document.getElementById("button12").style.display="none";
document.getElementById("sorting").style.display="inline-block";
}
function sort(){
    nameofthestudents.sort();
    document.getElementById("displayname").innerHTML=nameofthestudents;
}