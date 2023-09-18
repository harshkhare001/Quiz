const questions=[
	{
	'que' : 'Which of the following is a markup Language?',
	'a' : 'HTML',
	'b': 'CSS',
	'c': 'JS',
	'd': 'PHP',
	'correct':'a'
},
{
	'que' : 'Which of the following is a Platform independent Language?',
	'a' : 'HTML',
	'b': 'CSS',
	'c': 'Java',
	'd': 'PHP',
	'correct': 'c'
},
{
	'que' : 'Which of the following is a styling Language?',
	'a' : 'HTML',
	'b': 'CSS',
	'c': 'JS',
	'd': 'PHP',
	'correct': 'b'
}
]

const index=0;
const right=0,wrong=0;
const total=questions.length;

const quebox=document.getElementById("quebox");
const optionInputs=document.querySelectorAll(".options")


const loadQue = ()=>{
	if(total===index){
		return endQuiz();
	}
	reset();

	const data = questions[index];

	document.getElementById("quebox").innerText=data.que;

	optionInputs[0].nextElementSibling.innerText=data.a;
	optionInputs[1].nextElementSibling.innerText=data.b;
	optionInputs[2].nextElementSibling.innerText=data.c
	optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz = ()=>{
	const data = questions[index];
	const answer = getAnswer()
	if(answer===data.correct){
		right++;
	}
	else{
		wrong++;
	}
	index++;
	loadQue();
	return;
}

const getAnswer = ()=>{
	let answer;
	optionInputs forEach(
		(input)=>{
			if(input.checked){
				answer=input.value
			}
		}
		)
	return answer;
}

const reset = ()=>{
	optionInputs forEach(
		(input)=>{
			input.checked=false;
		})
}

const endQuiz = ()=>
{
	document.getElementById("box").innerText='Thank you for playing the quiz  Score = '+right+ " / "+total;
	
}





loadQue();

	
