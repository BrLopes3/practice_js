//1
let myNumber = 35;
console.log(myNumber);
//2 
let myString = "JavaScript is fun";
console.log(myString);
//3
let myBoolean = false;
console.log(myBoolean);
//4
var myArray = ["hello world", true, 46, 7.8];
console.log(myArray);
console.log(myArray[0]);
//5
myArray.push(myString);
console.log(myArray);
//6
myArray.unshift(myNumber);
console.log(myArray);
//7
var mySecondArray = myArray.slice(-3);
console.log("mySecondArray");
console.log(mySecondArray);
//8
var myThirdArray = myArray.slice(0,3);
console.log("myThirdArray");
console.log(myThirdArray);
//9
myThirdArray.push(mySecondArray[1]);
console.log(myThirdArray);
//10
var mySentence = myArray[1]+" "+myString;
console.log(mySentence);
//11
var ranumber = Math.random()*10;
ranumber = Math.floor(ranumber);
console.log("my random integer is "+ ranumber);
//12
function rectangleArea(length, width){
    var area = length*width;
    return console.log("the area is: "+area);
}
rectangleArea(2,3);
//13
function circleArea(radius){
    var area2 = Math.PI*Math.pow(radius,2);
    return console.log("the area is: "+ Math.round(area2));
}
circleArea(3);

//14
function comment(mark){
    var grade;
    if(mark >=50 && mark<60){
        grade = "average"; 
    }
    else if(mark >=60 && mark<80){
        grade = "good";
    }
    else if(mark >=80){
        grade = "great";
    }
    else{
        grade = "bad";
    }
    return console.log(grade);
}
comment(60);

//14 - another way
function comment2(mark){
    var grade;
    if(mark >=80){
        return console.log("great"); 
    }
    if(mark >=60){
        return console.log("good"); 
    }
    if(mark >=50){
        return console.log("average"); 
    }
    return console.log("bad");
}
comment2(55);

//15
function classify(name){
    var result;
    if(name == "apple" || name =="orange" || name =="banana" || name =="pear" || name =="mango"){
        result = "this is a fruit";
    }
    
    else if(name =="eggplant"||name =="parsnip"||name =="turnip"||name =="zucchini"){
        result ="this is a vegetable";
    }
    
    else{
        result = "not sure what this is";
    }
    
    return console.log(result);
}
classify("banana");
classify("parsnip");
classify("car");

//16
for (i=0;i<myArray.length;i++){
    console.log("the value for element "+i+" is "+myArray[i]);
}

//17
function factorial(number){
var fac = 1;
if(number==0){
    fac = fac;
    console.log(`the factorial of ${number} is ${fac}`);
}
else{

    for (i=1;i<=number;i++){
        fac = fac*i; 
    }
    console.log(`the factorial of ${number} is ${fac}`);
}

}
factorial(3);
factorial(4);
factorial(0);

//another way
function factorial_2(n){
    if(n===0){
        return 1;
    }
    else{
        return n*factorial_2(n-1);
    }
}
console.log(`the factorial is ${factorial_2(3)}`);
console.log(`the factorial is ${factorial_2(4)}`);
console.log(`the factorial is ${factorial_2(0)}`);

//18
function withdraw(mon){
var notes = [100, 50, 20, 10, 5];
var number = [];
var result = [];
var remain = mon;

for (i=0;i<notes.length;i++)
{
    number[i] = Math.floor(remain/notes[i]);
    remain = remain%notes[i];
    
}


for (i=0;i<notes.length;i++){

    if(number[i]!=0){
    
        result[i] = console.log(`${number[i]} notes of ${notes[i]}`);

    }

}
return result;
}
withdraw(375);

//19



