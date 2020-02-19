'use strict'
var score=0;

var greeting= prompt('what is your name please?'); 
alert('Hello ' + greeting);
function question1 (){
var q1= prompt('Do you think that i have a passion with coding? Yes/No '); 
switch(q1.toLowerCase()) {
    case 'yes' :
     case 'y':
        //console.log('Do you think that i have a passion with coding?',q1);
        alert('You are totally right');
        score++;
        break;
    case 'no' :
    case 'n' :
        //console.log('Do you think that i have a passion with coding?',q1);
        alert('Oh sorry you didnt guess it right');
        break;
    default:
        //console.log('Do you think that i have a passion with coding?',q1);
        alert('try again')
}
}
question1();

function question2 (){
var q2= prompt('Do you think that i can write a code for 10 hours ? Yes/No '); 
switch(q2.toLowerCase()) {
    case 'yes' :
     case 'y':
        //console.log('Do you think that i can write a code for 10 hours ?',q2);
        alert('Oh sorry you didnt guess it right');
        break;
    case 'no' :
    case 'n' :
        //console.log('Do you think that i can write a code for 10 hours ?',q2);
        alert(' You are totally right');
        score++;
        break;
    default:
        //console.log('Do you think that i can write a code for 10 hours ?',q2);
        alert('try again')
}
}
question2();

function question3 (){
var q3= prompt('Do you think that my favorite color is Pink? Yes/No '); 
switch(q3.toLowerCase()) {
    case 'yes' :
     case 'y':
        //console.log('Do you think that my favorite color is Pink?',q3);
        alert('You are totally right');
        score++;
        break;
    case 'no' :
    case 'n' :
        //console.log('Do you think that my favorite color is Pink?',q3);
        alert('Oh sorry you didnt guess it right');
        break;
    default:
        //console.log('Do you think that my favorite color is Pink?',q3);
        alert('try again')
}
}
question3();

function question4 (){
var q4= prompt('Do you think i like workout? Yes/No '); 
switch(q4.toLowerCase()) {
    case 'yes' :
     case 'y':
        //console.log('Do you think i like workout?',q4);
        alert('You are totally right');
        score++;
        break;
    case 'no' :
    case 'n' :
        //console.log('Do you think i like workout?',q4);
        alert('Oh sorry you didnt guess it right');
        break;
    default:
        //console.log('Do you think i like workout?',q4);
        alert('try again')
}
}
question4();
function question5 (){
var q5= prompt('Do you think my favorite workout is Aerobics? Yes/No '); 
switch(q5.toLowerCase()) {
    case 'yes' :
     case 'y':
       // console.log('Do you think my favorite workout is Aerobics?',q5);
        alert('Oh sorry you didnt guess it right');
        break;
    case 'no' :
    case 'n' :
        //console.log('Do you think my favorite workout is Aerobics?',q5);
        alert('You are totally right');
        score++;
        break;
    default:
        //console.log('Do you think my favorite workout is Aerobics?',q5);
        alert('try again')
}
}
question5();

function question6 (){
var q6 = prompt('Can guess my lucky number ?');

for (var i = 0; i <= 3; i++) {
    console.log(i);
    
    if (q6 == 4){
        console.log(q6);
        alert('Pravoooo You guessed it !!! .')
        score++;
        break;
    }
    
    else if (q6 <= 3) {
        console.log(q6);
        alert('You are getting closer!! .')
       q6 = prompt('Can guess my lucky number ?');
    }
    else {
        console.log(q6);
        alert('Come on  try again .')
        q6 = prompt('Can guess my lucky number ?');
    }
}
alert('The right answer is number 4')
} question6();

function question7 (){
var choices = ['action', 'comedy', 'drama', 'biography'];
choices.push('aaa');
for (var a = 0; a <= 6; a++) {
    if(a==6){
        alert('you ran out of attempts ');
        break;
     }
    var q7= prompt('Come on its your turn to guess which types of movies i prefer?');

  for (var s=0; s <= choices.length ; s++)
    if (q7.toLowerCase() === choices[s] ) {
        alert('you are genius');
       // console.log();
        score++;
        break;
    } 
    if (q7.toLowerCase() === choices[s] ){
        break;
    }
    
}
}
question7();

alert('your score is '+score)
alert('Thanks for visiting my page you are welcome any time '+  greeting);







