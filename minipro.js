let student = [
    {
        id : 101,
        name : "rahim", 
        age : 20,
        department : "cse"
    },
    {
        id : 102,
        name : "karim", 
        age : 22,
        department : "EEE"
    },
    {
        id : 103,
        name : "Nitul", 
        age : 23,
        department : "EEE-2"
    }
]
function addStudent(name, age, department) {
    let new_id = student.length > 0 ? student[student.length - 1].id + 1 : 101
    let new_stu = {
        id : new_id,
        name : name,
        age : age,
        department : department
    }
    student.push(new_stu)
    console.log("student Added Successfull")
}
function getALL(){
    for(const stu of student){
        console.log(stu)
    }
}
addStudent("meme", 12, "IT")
//console.log(student)
// getALL()
function findStu(id) {
    let found = null
    for(const stu of student) {
        if(stu.id == id) {
            found = stu
            break
        }
    }
    if(found){
        console.log("Found Student", found)
    } else{
        console.log("404 not Found")
    }
}
//findStu(101)
function deleteStu(id) {
    let targetStu = -1
    for(let i = 0; i < student.length; i++){
        if(student[i].id == id) {
            targetStu = i
            break
        }
    }
    if(targetStu != -1){
        let deleted = student.splice(targetStu, 1)
        console.log(`deleted ${deleted.name} id : ${targetStu}`)
    }else{
        console.log("Student Not Found")
    }
}
getALL()
deleteStu(101)
getALL()