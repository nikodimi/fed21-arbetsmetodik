
// const start = alert('HEJ tryck på knappen för att börja spela');

const studentsEl = document.querySelector("#quizzz");
const nextBtn = document.querySelector(".btn");
const image = document.querySelector(".img-wrapper img");

const students = [
  {
    name: "Adi Dzocaj",
    image: "assets/images/students/adi-dzocaj.jpg",
  },
  {
    name: "Alexander Bergquist",
    image: "assets/images/students/alexander-bergquist.jpg",
  },
  {
    name: "Alexander Kocman",
    image: "assets/images/students/alexander-kocman.jpg",
  },
  {
    name: "Benjamin Benson",
    image: "assets/images/students/benjamin-benson.jpg",
  },
  {
    name: "Benjamin Tsubarah",
    image: "assets/images/students/benjamin-tsubarah.jpg",
  },
  {
    name: "Calle Nilsson",
    image: "assets/images/students/calle-nilsson.jpg",
  },
  {
    name: "Chikage Takahashi Molander",
    image: "assets/images/students/chikage-takahashi-molander.jpg",
  },
  {
    name: "Daniel Be",
    image: "assets/images/students/daniel-be.jpg",
  },
  {
    name: "Daniel Carlsson",
    image: "assets/images/students/daniel-carlsson.jpg",
  },
  {
    name: "Elin Ahlgren",
    image: "assets/images/students/elin-ahlgren.jpg",
  },
  {
    name: "Emma Käck",
    image: "assets/images/students/emma-kack.jpg",
  },
  {
    name: "Eric Ståhl",
    image: "assets/images/students/eric-stahl.jpg",
  },
  {
    name: "Frans Gustavson Påsse",
    image: "assets/images/students/frans-gustavson-passe.jpg",
  },
  {
    name: "Glafira Veretennikova",
    image: "assets/images/students/glafira-veretennikova.jpg",
  },
  {
    name: "Gustaf Grönlund",
    image: "assets/images/students/gustaf-gronlund.jpg",
  },
  {
    name: "Hanna Håkanson",
    image: "assets/images/students/hanna-hakanson.jpg",
  },
  {
    name: "Heidi Sjöberg",
    image: "assets/images/students/heidi-sjoberg.jpg",
  },
  {
    name: "Hugo Carzborn",
    image: "assets/images/students/hugo-carzborn.jpg",
  },
  {
    name: "Jesper Kling",
    image: "assets/images/students/jesper-kling.jpg",
  },
  {
    name: "Johan Ranestam",
    image: "assets/images/students/johan-ranestam.jpg",
  },
  {
    name: "Johanna Bäckström",
    image: "assets/images/students/johanna-backstrom.jpg",
  },
  {
    name: "Johanna Jönsson",
    image: "assets/images/students/johanna-jonsson.jpg",
  },
  {
    name: "Jona Torsson",
    image: "assets/images/students/jona-torsson.jpg",
  },
  {
    name: "Josefine Ahlstedt",
    image: "assets/images/students/josefine-ahlstedt.jpg",
  },
  {
    name: "Julia Jespersdotter Högman",
    image: "assets/images/students/julia-jespersdotter-hogman.jpg",
  },
  {
    name: "Julia Nemell",
    image: "assets/images/students/julia-nemell.jpg",
  },
  {
    name: "Linus Lindberg",
    image: "assets/images/students/linus-lindberg.jpg",
  },
  {
    name: "Malin Olsson",
    image: "assets/images/students/malin-olsson.jpg",
  },
  {
    name: "Maria Haara-Lundhammar",
    image: "assets/images/students/maria-haara-lundhammar.jpg",
  },
  {
    name: "Maria Lövgren",
    image: "assets/images/students/maria-lovgren.jpg",
  },
  {
    name: "Nikola Dimitrijoski",
    image: "assets/images/students/nikola-dimitrijoski.jpg",
  },
  {
    name: "Paulina Kiendys",
    image: "assets/images/students/paulina-kiendys.jpg",
  },
  {
    name: "Raymond Lam",
    image: "assets/images/students/raymond-lam.jpg",
  },
  {
    name: "Robin Karlsson",
    image: "assets/images/students/robin-karlsson.jpg",
  },
  {
    name: "Sara Almqvist",
    image: "assets/images/students/sara-almqvist.jpg",
  },
  {
    name: "Tim Nilsson",
    image: "assets/images/students/tim-nilsson.jpg",
  },
  {
    name: "Tirapat Sukjit",
    image: "assets/images/students/tirapat-sukjit.jpg",
  },
  {
    name: "Tobias Silfverberg",
    image: "assets/images/students/tobias-silfverberg.jpg",
  },
  {
    name: "Wiktoria Dobrzewinska",
    image: "assets/images/students/wiktoria-dobrzewinska.jpg",
  },
];


// const questions = students.map(student => )

// const renderStudents = () => {

// 	studentsEl.innerHTML = "";

// 	students.forEach(student => {

// 		studentsEl.innerHTML += `<li class="list-item">${student.name}</li>`;
// 		image.src = `${student.image}`;

// 	});
// }

// renderStudents();

// const getStudent = () => {

// 	nextBtn.addEventListener('click', e => {

// 		studentsEl.innerHTML += `<li class="list-item">${students[0].name}</li>`;
		
// 		image.src = students[0].image;

// 		students.shift()

// 	});
// }
	
// getStudent();

// const answer = () => {

// 	studentsEl.addEventListener('click', e => {

// 		if (e.target.tagName === 'LI') {

// 			const liEl = e.target;

// 			if (liEl === students[0].name && students[0].image) {
// 				studentsEl.ch
// 			}

// 		}

// 	})

// }

// const number = students.length * 4;
// console.log(number);


// let randomStudents = students.map(student => student.name )
let questionNumber = 0;
let score = 0;


// for (let i = 0; i < 4; i++) {
// 	studentsEl.innerHTML += `<li class="list-item">${students[i].name}</li>`;
// }

// correctAnswer = [];

// students.forEach(student => {
// 	correctAnswer = student.name;
// 	console.log(correctAnswer);

// })

// console.log(studentNames);
// const studentImage = students.map(student => student.image);
// console.log(studentImage);

// shuffleArray(studentNames);

// let mixedNames = [];
// for (let i = 0; i < 4; i++) {
// 	mixedNames += studentNames[i];
// }

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
	}	
}

shuffleArray(students);

const questions = students.map((student) => {
  let studentNames = students.map(student => student.name);
	// console.log(student);

	shuffleArray(studentNames);
	// console.log(studentNames);

	let mixedNames = [];
  		for (let i = 1; i < 4; i++) {
		mixedNames.push(studentNames[i]);
}
	

	return {
		name: student.name,
		image: student.image,
		alternativ: mixedNames,
	};
});

questions[0].alternativ.push(questions[0].name);
console.log(questions[0].alternativ);
shuffleArray(qustions[0].alternativ);
console.log(questions[0].alternativ);

let answeredQuestions = questions.shift();

console.log(questions);
console.log(answeredQuestions);


const render = () => {

	const shuffleArray = array => {
		for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		}	
	}

	shuffleArray(students);

	const img_url = students[0].image;
	image.setAttribute('src', img_url);
	// image.src = students[0].image;
	studentsEl.innerHTML = `<li class="list-item">${students[0].name}</li>`;

	for (let i = 1; i < 4; i++) {
		studentsEl.innerHTML += `<li class="list-item">${students[i].name}</li>`;
	}
}

	students.sort( (a, b) => {
		if (a.name.toUpperCase() < b.name.toUpperCase()) {
			return -1;
		}

		if (a.name.toUpperCase() > b.name.toUpperCase()) {
			return 1;
		}

		return 0;
	});

	// console.log("Sorted students:", students);

	// students.shift();






  nextBtn.addEventListener('click', e => {
	// e.preventDefault();
	studentsEl.innerHTML = '';
	
	render();

	// questionNumber++;
	// console.log(questionNumber);

	// if (questionNum >= 12) {

		nextBtn.disabled = true;
	// }

})

studentsEl.addEventListener('click', e => {

	if (e.target.tagName === 'LI') {
		
		e.target.style.backgroundColor = 'green';
		nextBtn.disabled = false;

		// if (questionNum >= 6) {
			nextBtn.classList.toggle('hidden');
		// }
	}

})

// const newStudents = [
// 	{
// 		id: 1,
// 		name: "Paulina Kiendys",
// 		image: "assets/images/students/paulina-kiendys.jpg",
// 	},
// 	{
// 		id: 2,
// 		name: 'frank',
// 		image: "assets/images/students/wiktoria-dobrzewinska.jpg",
// 	},
// 	{
// 		id: 3,
// 		name: 'Leif',
// 		image: "assets/images/students/julia-nemell.jpg",
// 	},
// 	{
// 		id: 4,
// 		name: 'Jona',
// 		image: "assets/images/students/julia-nemell.jpg",
// 	},
// 	{
// 		id: 5,
// 		name: 'Lisa',
// 		image: "assets/images/students/julia-nemell.jpg",
// 	},
// 	{
// 		id: 6,
// 		name: 'Anna',
// 		image: "assets/images/students/julia-nemell.jpg",
// 	}
// ]


// const render = () => {

// 	const shuffleArray = array => {
// 		for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		const temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 		}	
// 	}

// 	shuffleArray(newStudents);

// 	image.src = newStudents[0].image;
// 	studentsEl.innerHTML = `<li class="list-item">${newStudents[0].name}</li>`;

// 	for (let i = 1; i < 4; i++) {
// 		studentsEl.innerHTML += `<li class="list-item">${newStudents[i].name}</li>`;
// 	}

	

// }


// const missing_students = [
//   {
//     name: "Andjela Saponjic",
//     image: null,
//   },
//   {
//     name: "Cazpian Levén",
//     image: null,
//   },
//   {
//     name: "Frida Lam",
//     image: null,
//   },
//   {
//     name: "Maxim Khnykin",
//     image: null,
//   },
//   {
//     name: "Philip Le",
//     image: null,
//   },
// ];
