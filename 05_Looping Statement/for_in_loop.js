// fro_in_loop Statement :

// for in loop specially used in object variable :


const student = {
                  name : "Imtiyaj",
                  age : 28,
                  cgpa : 7.42,
                  isPass : true
};
for (let key in student)
{
    console.log("key = ",key,"  value = ",student[key]);
}