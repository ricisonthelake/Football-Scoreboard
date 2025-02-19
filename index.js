class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.el = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset")
        };

        this.interval = null;
        this.remainingSeconds = 0;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:");
            const inputSeconds = prompt("Enter number of seconds:");


            if (inputMinutes < 61) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.remainingSeconds += inputSeconds,
                    this.updateInterfaceTime();
            }

        });
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("timer__btn--start");
            this.el.control.classList.remove("timer__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add("timer__btn--stop");
            this.el.control.classList.remove("timer__btn--start");
        }
    }

    start() {
        if (this.remainingSeconds === 0) return;

        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            if (this.remainingSeconds === 0) {
                this.stop();
            }
        }, 1000);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
                <div class=" timer timer__parts">
                    <h3 class="timer__part timer__part--minutes">00</h3>
                    <h3 class="timer__part">:</h3>
                    <h3 class="timer__part timer__part--seconds">00</h3>
                </div>
                <div class="timer__btns">
                    <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                        <span class="material-icons">play_arrow</span>
                    </button>
                    <button type="button" class="timer__btn timer__btn--reset">
                        <span class="material-icons">timer</span>
                    </button>
        `
    }
}

new Timer(
    document.querySelector(".timer")
);

let homeScore = 0;
let guestScore = 0;
let homeTimeOutsLeft = 3;
let guestTimeOutsLeft = 3;
let currentQuarter = 1;
let currentDown = 1;
let ToGo = 10;
let yardLine = 30;

document.getElementById("homePoints").textContent = homeScore;
document.getElementById("guestPoints").textContent = guestScore;
homeTolEl = document.getElementById("homeTol");
guestTolEl = document.getElementById("guestTol");
quarterEl = document.getElementById("quarter");
downEl = document.getElementById("down");
yardsToGoEl = document.getElementById("yardsToGo");
onYardLineEl = document.getElementById("onYardLine");


function addOneToHome() {
    homeScore = homeScore + 1;
    homePoints.textContent = homeScore;
}

function addTwoToHome() {
    homeScore = homeScore + 2;
    homePoints.textContent = homeScore;
}

function addThreeToHome() {
    homeScore = homeScore + 3;
    homePoints.textContent = homeScore;
}

function addSixToHome() {
    homeScore = homeScore + 6;
    homePoints.textContent = homeScore;
}

function addOneToGuest() {
    guestScore = guestScore + 1;
    guestPoints.textContent = guestScore;
}

function addTwoToGuest() {
    guestScore = guestScore + 2;
    guestPoints.textContent = guestScore;
}

function addThreeToGuest() {
    guestScore = guestScore + 3;
    guestPoints.textContent = guestScore;
}

function addSixToGuest() {
    guestScore = guestScore + 6;
    guestPoints.textContent = guestScore;
}

function addOneToQuarter() {
    if (currentQuarter < 4) {
        currentQuarter = currentQuarter + 1;
        quarterEl.textContent = currentQuarter;
    }
}

function addOneToDown() {
    if (currentDown < 4) {
        currentDown = currentDown + 1;
        downEl.textContent = currentDown;
    }
}

function subtractOnefromDown() {
    if (currentDown - 1 < 1) {
        alert("current down cannot be less than 1")

    } else if (currentDown <= 4) {
        currentDown = currentDown - 1;
        downEl.textContent = currentDown;
    }
}

function subtractOneFromHomeTol() {
    if (homeTolEl.textContent > 0) {
        homeTimeOutsLeft = homeTimeOutsLeft - 1;
        homeTolEl.textContent = homeTimeOutsLeft;
    }
}

function subtractOneFromGuestTol() {
    if (guestTolEl.textContent > 0) {
        guestTimeOutsLeft = guestTimeOutsLeft - 1;
        guestTolEl.textContent = guestTimeOutsLeft;
    }
}

function addOneToYardsToGo() {
    if (ToGo + 1 > 99) {
        alert("Yards to go cannot be greater than 99")
    } else {
        ToGo = ToGo + 1;
        yardsToGoEl.textContent = ToGo;
    }
}

function subtractOneToYardsToGo() {
    if (ToGo - 1 < 1) {
        alert("Yards to go cannot be less than 1")
    } else {
        ToGo = ToGo - 1;
        yardsToGoEl.textContent = ToGo;
    }
}

function addTenToYardsToGo() {
    if (ToGo + 10 > 99) {
        alert("Yards to go cannot be less than 1")
    } else {
        ToGo = ToGo + 10;
        yardsToGoEl.textContent = ToGo;
    }
}
function subtractTenToYardsToGo() {

    if (ToGo - 10 < 1) {
        alert("Yards to go cannot be less than 1")
    } else {
        ToGo = ToGo - 10;
        yardsToGoEl.textContent = ToGo;
    }
}



function addOneToOnYardLine() {
    if (yardLine + 1 > 50) {
        alert("Yard line cannot be greater than 50")
    } else {
        yardLine = yardLine + 1;
        onYardLineEl.textContent = yardLine;
    }
}

function subtractOneToOnYardLine() {
    if (yardLine - 1 < 1) {
        alert("Yards to go cannot be less than 1")
    } else {
        yardLine = yardLine - 1;
        onYardLineEl.textContent = yardLine;
    }
}

function addTenToOnYardLine() {
    if (yardLine + 10 > 50) {
        alert("Yard line cannot be greater than 50")
    } else {
        yardLine = yardLine + 10;
        onYardLineEl.textContent = yardLine;
    }
}

function subtractTenToOnYardLine() {
    console.log("yardLine = " + yardLine)
    if (yardLine - 10 < 1) {
        alert("Yardline cannot be less than 1")
    } else {
        yardLine = yardLine - 10;
        onYardLineEl.textContent = yardLine;
    }
}
