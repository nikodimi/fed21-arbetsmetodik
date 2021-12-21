const startEl = document.querySelector(".start-box");
const quizEl = document.querySelector(".quiz-box");
const optionsEl = document.querySelector("#option-list");
const nextBtn = document.querySelector(".next-button");
const startBtn = document.querySelector(".startBtn");
const questionCounter = document.querySelector("#question-counter");
const pointCounter = document.querySelector("#point-counter");
const image = document.querySelector(".img-wrapper img");
const highScore = document.querySelector('.highscore');

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

// Fisher Yates shuffle function
// const shuffleArray = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
// };

// // Create our new array of students
// const create = () => {
//     newStudents = students.map((student) => {
//         return {
//             name: student.name,
//             image: student.image,
//         };
//     });

//     shuffleArray(newStudents);

//     randomNames = newStudents.map((student) => student.name);

//     render(newStudents);
// }


// Shuffle the array
// shuffleArray(newStudents);

// Create a new array with names from students array



// nextBtn.parentElement.style.display = "none";
startBtn.innerHTML = "Start";

let newStudents = [];
let questionNum;
let correctImage;
let correctName;
let totalQuestions;
let points;
let latestScore = false;


const render = () => {
    //

    console.log(newStudents);
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
    if (questionNum !== totalQuestions) {
        // questionNum++;
        render();
        nextBtn.disabled = true;
    } else {
        if (latestScore) {
            if (points > latestScore) {
                alert(`Wow du kan ju det här!`);
                latestScore = points;
                console.log(latestScore);
            } else if (points < latestScore) {
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
    let listItems = document.querySelectorAll(".list-item");

    if (e.target.tagName === "LI") {
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

const startGame = () => {
	startBtn.addEventListener("click", (e) => {
		// e.target.parentElement.remove("show");
		quizEl.classList.add("show");
        startEl.classList.remove('show');

        // newStudents = students.map((student) => {
        //     return {
        //         name: student.name,
        //         image: student.image,
        //     };
        // });

        // shuffleArray(newStudents);

        // randomNames = newStudents.map((student) => student.name);

        
        questionNum = 0;
        totalQuestions = newStudents.length;
        points = 0;


        nextBtn.innerHTML = "Next";
        nextBtn.disabled = true;
        create();
		// render();
		// game();
		// continueGame = true;

        if (latestScore) {
            highScore.innerHTML = `Current Highscore: ${latestScore}`;
        }
        
	})
};

const reset = () => {
	quizEl.classList.remove('show');
	startEl.classList.add('show');
    // optionsEl.innerHTML = '';
	// questionNum = 0;
	// points = 0;
    console.log(questionNum);
    console.log(totalQuestions);
    console.log(points);
    
    // highScore.innerHTML = `Current Highscore: ${latestScore}`;
	startGame();

}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

// Create our new array of students
const create = () => {
    newStudents = students.map((student) => {
        return {
            name: student.name,
            image: student.image,
        };
    });

    shuffleArray(newStudents);

    randomNames = newStudents.map((student) => student.name);

    render();
}

startGame();