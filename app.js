

var student1 = {
    name: "ibrar malik",
    fatherName: "malik naeem",
    age: "18",
    rollNumber: "50248",
    class: "9th",
    result: "B",

}
// console.log(student1)

var student2 = {
    name: "bilal malik",
    fatherName: " malik",
    age: "22",
    rollNumber: "54545",
    class: "9th",
    result: "c",


}
//  console.log(student2)

var student3 = {
    name: "sameer malik",
    fatherName: "malik ibrar",
    age: "16",
    rollNumber: "55554",
    class: "9th",
    result: "A",
}
//  console.log(student3)

var student4 = {
    name: "jawad malik",
    fatherName: " naeem",
    age: "9",
    rollNumber: "548421",
    class: "10th",
    result: "A+",
}
//  console.log(student4)

var student5 = {
    name: "ali malik",
    fatherName: "ramzan",
    age: "12",
    rollNumber: "012345",
    class: "10th",
    result: "b",
}
//  console.log(student5)


var studentList = [student1, student2, student3, student4, student5]
var studentid = document.getElementById('studentdata')
console.log(studentid)
for (var i = 0; i < studentList.length; i++) {
    var obj = studentList[i];
    // console.log(obj)

    studentid.innerHTML += "<tr><td>" + obj.name + "</td><td>" + obj.fatherName + "</td><td>" + obj.age + "</td><td>" + obj.rollNumber + "</td><td>" + obj.class + "</td><td>" + obj.result + "</td></tr>";
}


var showname = document.getElementById('showname')
var showFatherName = document.getElementById('showFatherName')
var showAge = document.getElementById('showAge')
var ShowRollNumber = document.getElementById('ShowRollNumber')
var showClass = document.getElementById('showClass')
var showResult = document.getElementById('showResult')
var inpvalue = document.getElementById('inpvalue')


function stdBtn() {
    console.log(inpvalue.value)

    for (var j = 0; j < studentList.length; j++) {
        var obj2 = studentList[j];
        if (inpvalue.value == obj2.rollNumber) {
            showname.innerHTML = obj2.name
            showFatherName.innerHTML = obj2.fatherName
            showAge.innerHTML = obj2.age
            ShowRollNumber.innerHTML = obj2.rollNumber
            showClass.innerHTML = obj2.class
            showResult.innerHTML = obj2.result

        }
    }
}












