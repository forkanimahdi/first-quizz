const quizData = [
    
    {
    question : 'What is my instagram',
a : '@forkanimahdi',
b : '@forkani',
c : '@forkanimehdi',
d : '@ferkanimahdi',
correct : '@forkanimahdi'
},
{
    question : 'my favo football club',
a : 'Tottenham ',
b : 'Marseille',
c : 'another team',
d : 'Barcelona',

correct : 'Barcelona'
},
{
    question : 'how many lines to code this quizz',
a : '100',
b : '210',
c : '300',
d : '437',

correct : '437'
},
{
    question : 'what is the coding languages i used',
a : 'html',
b : 'css',
c : ' javascript',
d : 'All of them',

correct : 'All of them'
},
{
    question : 'Did u like this video',
a : 'yes',
b : 'no',
c : 'idk',
d : 'f*cking cool',

correct : 'idk'
}

]
const restart = document.getElementById('restart');
const resulta = document.getElementById('rslt');
const reslt = document.querySelector(".result");
const quizbox = document.getElementById('quizbox');
const startup = document.getElementById('start');
const qpassed = document.getElementById('qp');
const options = document.querySelector(".answers");
var score = document.getElementById('score');
const blocks = document.querySelectorAll(".block");
const time_line = document.querySelector(".time_line");
const timeText = document.querySelector(".time_left_txt");
const timeCount = document.querySelector(".timer_sec");
const counting = document.getElementById('counting');
const question = document.getElementById('quest')
const a = document.getElementById('ansa');
const b = document.getElementById('ansb');
const c = document.getElementById('ansc');
const d = document.getElementById('ansd');
const btnnxt = document.getElementById('nextquest');
let currentQuizz = 0 ;
var timeValue =  1000;
var points = 00;
var passed = 1;
score.innerHTML = '00';

loadQuiz();
count();
scrclr();

blocks.forEach(block => block.addEventListener("click", () => selected(block)))
start.addEventListener("click" , () => strt())
Interval = setInterval(count, 1000) 

function selected(block){
timeValue = 1000
blocks.forEach(block => block.style.pointerEvents = 'none');
timeCount.style.visibility = 'hidden'
timeText.style.visibility= "hidden";
//block.style.background = 'green'
if(block.textContent == currentQuizzData.correct){
 block.style.background = 'rgb(6, 61, 6)'  ;
 points = points + 20;
 score.innerHTML = points; ;
 scrclr()
}
else if (block.textContent != currentQuizzData.correct){
    block.style.background = 'rgb(121, 7, 7)';
    for(i=0; i < options.children.length; i++){
        if(options.children[i].textContent == currentQuizzData.correct){ 
            options.children[i].style.background = ' rgb(6, 61, 6)'; 
        }
    }
}
}
function strt(){
    btnnxt.style.visibility= 'visible'
    timeValue = 20;
    timeCount.style.background = 'green'
    startup.style.visibility = "hidden";
    quizbox.style.visibility = 'visible';
    qpassed.innerText = passed;

}
btnnxt.addEventListener( "click" , ()  => { currentQuizz++; reset();
    if(currentQuizz < quizData.length){
        loadQuiz();   
    }
    else{
        result();
    }
})
function loadQuiz(){ 
currentQuizzData = quizData[currentQuizz];
question.innerText = currentQuizzData.question,
a.innerText = currentQuizzData.a,
b.innerText = currentQuizzData.b,
c.innerText = currentQuizzData.c,
d.innerText = currentQuizzData.d
}
function next(){
document.getElementById('rules').style.visibility = 'hidden'
document.getElementById('start').style.visibility = 'visible'
}
 function count(){
timeText.textContent = "Time Left :";
timeCount.textContent = timeValue;
timeValue--;
if(timeValue < 0){
    timeCount.style.visibility = 'hidden'
    timeText.textContent = "Time's up";
    timeText.style.color= "red";
    timeText.style.left= "85%";
    blocks.forEach(block => block.style.pointerEvents = 'none');
    blocks.forEach(block => block.style.background = 'rgb(121, 7, 7)');
    for(i=0; i < options.children.length; i++){
        if(options.children[i].textContent == currentQuizzData.correct){ 
            options.children[i].style.background = ' rgb(6, 61, 6)'; 
        }
    }
}
else if(timeValue < 3){
timeCount.style.background = 'red'
}
 }
function scrclr(){
if (points == 0){
    score.style.color = 'darkgrey'
}
else if (points < 60){
    score.style.color = 'red'
    reslt.innerHTML = "Sorry you just got "+ points+ " points and you didn't pass ! Good luck next time";
    reslt.style.color = 'red'
}
else{
    score.style.color = 'green';
    reslt.innerHTML = "Congratulations you passed the quizz succesfuly and you get " + points + " points from 100";
    reslt.style.color = 'green'
}
}
function reset(){
timeCount.style.visibility = 'visible'
timeText.style.visibility= "visible";
timeText.style.color= "white";
timeText.textContent = "Time Left :";
timeCount.style.background = 'green';
timeValue = 20;
timeCount.innerText = 20;
a.style.pointerEvents = '';
b.style.pointerEvents = '';
c.style.pointerEvents = '';
d.style.pointerEvents = '';
blocks.forEach(block => block.style.background = '');
passed++;
qpassed.innerText=passed;
   }
 function result(){
quizbox.style.visibility = 'hidden'
timeCount.style.visibility = 'hidden'
timeText.style.visibility= "hidden";
btnnxt.style.visibility = 'hidden';
reslt.style.visibility = 'visible';
 }
