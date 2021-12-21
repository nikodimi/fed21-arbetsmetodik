const startEl = document.querySelector(".start-box");
const quizEl = document.querySelector(".quiz-box");
const optionsEl = document.querySelector("#option-list");
const nextBtn = document.querySelector(".next-button");
const startBtn = document.querySelector(".startBtn");
const questionCounter = document.querySelector("#question-counter");
const pointCounter = document.querySelector("#point-counter");
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
    // {
    //     name: "Benjamin Tsubarah",
    //     image: "assets/images/students/benjamin-tsubarah.jpg",
    // },
    // {
    //     name: "Calle Nilsson",
    //     image: "assets/images/students/calle-nilsson.jpg",
    // },
    // {
    //     name: "Chikage Takahashi Molander",
    //     image: "assets/images/students/chikage-takahashi-molander.jpg",
    // },
    // {
    //     name: "Daniel Be",
    //     image: "assets/images/students/daniel-be.jpg",
    // },
    // {
    //     name: "Daniel Carlsson",
    //     image: "assets/images/students/daniel-carlsson.jpg",
    // },
];

// Fisher Yates shuffle function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

// Create our new array of students


// Shuffle the array
// shuffleArray(newStudents);

// Create a new array with names from students array



// nextBtn.parentElement.style.display = "none";
startBtn.innerHTML = "Start";

//FLYTTA NER? o ta bort startgame?
// const startGame = () => {
// 	startBtn.addEventListener("click", (e) => {
// 		// e.target.parentElement.remove("show");
// 		quizEl.classList.add("show");
// 		// questionNum++;
// 		render();
// 		// game();
// 		// continueGame = true;
        
// 	})
// };
let newStudents;
let questionNum;
let correctImage;
let correctName;
let totalQuestions;
let points;
let latestScore = false;
let continueGame = false;

	//AKTIVERA GAME
// const game = () => {
    
	const render = () => {
        //
        

        questionNum++;
        optionsEl.innerHTML = "";

        correctImage = newStudents[0].image;
        correctName = newStudents[0].name;

        shuffleArray(randomNames);
        let sorted = randomNames.filter((random) => random !== correctName);

        let tempNames = [];
        for (let i = 0; i < 3; i++) {
            tempNames.push(sorted[i]);
        }

        tempNames.push(correctName);
        shuffleArray(tempNames);

        // Print out image and list of alternatives
        image.src = correctImage;

        for (let i = 0; i < tempNames.length; i++) {
            optionsEl.innerHTML += `<li class="list-item">${tempNames[i]}</li>`;
        }

        // Print out points and number of questions
        pointCounter.innerHTML = `Points = ${points}`;
        questionCounter.innerHTML = `Questions ${questionNum}/${totalQuestions}`;

        // Remove student in first position of array
        newStudents.shift();

        if (questionNum === totalQuestions) {
            nextBtn.innerHTML = "Avsluta";

			// e.target.parentElement.add("show");
			// quizEl.classList.remove("show");
			// startGame();
            nextBtn.disabled = false;
			// game();
        }
    };

    nextBtn.addEventListener("click", (e) => {
        console.log(newStudents);
        if (questionNum !== totalQuestions) {
            // questionNum++;
            render();
            nextBtn.disabled = true;
        } else {
            if (latestScore) {
                if (points < latestScore) {
                    alert(`Wow du kan ju det här!`);
                    latestScore = points;
                    console.log(latestScore);
                } else {
                    alert(
                        `Uselt! Du va sämre än senast ju. Ditt senaste resultat är ${latestScore}.`
                    );
                }
            } else {
                latestScore = points;
            }
			reset();
        }
    });

    optionsEl.addEventListener("click", (e) => {
        // console.log(newStudents);
        let listItems = document.querySelectorAll(".list-item");


        if (e.target.tagName === "LI") {
			// if (questionNum === totalQuestions) {
			// 	nextBtn.innerHTML = "Starta om";
			// 	nextBtn.disabled = false;
			// 	game();
			// }
            if (e.target.innerHTML === correctName) {
                e.target.classList.add("correct");
                nextBtn.disabled = false;
                points++;
                pointCounter.innerHTML = `Points = ${points}`;
                listItems.forEach((listItem) => {
                    listItem.classList.add("disabled");
                });
            } else {
                e.target.classList.add("wrong");
                nextBtn.disabled = false;
                listItems.forEach((listItem) => {
                    listItem.classList.add("disabled");
                    if (listItem.innerHTML === correctName) {
                        listItem.classList.add("correct");
                    }
                });
            }
        } 
    });
    // render();
// };
const startGame = () => {
	startBtn.addEventListener("click", (e) => {
		// e.target.parentElement.remove("show");
		quizEl.classList.add("show");
		// questionNum++;

        newStudents = students.map((student) => {
            return {
                name: student.name,
                image: student.image,
            };
        });

        shuffleArray(newStudents);

        randomNames = newStudents.map((student) => student.name);

        
questionNum = 0;
totalQuestions = newStudents.length;
points = 0;
latestScore = false;
continueGame = false;
nextBtn.innerHTML = "Next";
		render();
		// game();
		// continueGame = true;
        
	})
};

const reset = () => {
	quizEl.classList.remove('show');
	startEl.classList.add('show');
    optionsEl.innerHTML = '';
	questionNum = 0;
	points = 0;
    console.log(points);
	startGame();

}

startGame();