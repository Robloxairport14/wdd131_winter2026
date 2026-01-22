    const PI = 3.14;
    let radius = 3;
    const one = 1;
    const two = '2';
    let course = "CSE131"; //global scope
    console.log(9*PI);
    
        


    console.log(400*PI)






    console.log(two);


    console.log(radius);



    if (true){
    let student = "John";
        console.log(course);  //works just fine, course is global
        console.log(student); //works just fine, it's being accessed within the block
    }
        console.log(course);
        console.log(student); //does not work, can't access a block variable outside the block