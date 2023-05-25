const stappen = ['Jouw Gegevens', 'CSSttR', 'WAfS', 'Brow. Tech.', 'Submit'];

const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');



function genereerStappen() {
  const progressContainer = document.getElementById('progress');
  const stappenTitel = document.getElementById('stappen-titel');

  stappenTitel.textContent = 'Stappen';

  stappen.forEach((stap, index) => {
    const stapElement = document.createElement('div');
    stapElement.classList.add('stap');
    stapElement.innerHTML = `<p>${stap}</p>`;
    progressContainer.appendChild(stapElement);
  });
}



function saveFormAnswers() {
  var nameInput = document.getElementById("input-name");
  var studentnummerInput = document.getElementById("input-studentnummer");

  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("studentnummer", studentnummerInput.value);
  }
}

function loadFormAnswers() {
  var nameInput = document.getElementById("input-name");
  var studentnummerInput = document.getElementById("input-studentnummer");

  if (typeof(Storage) !== "undefined") {
    var savedName = localStorage.getItem("name");
    var savedStudentnummer = localStorage.getItem("studentnummer");

    if (savedName) {
      nameInput.value = savedName;
    }

    if (savedStudentnummer) {
      studentnummerInput.value = savedStudentnummer;
    }
  }
};

function saveDarkModePreference(isDarkMode) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("darkMode", isDarkMode);
  }
}

function loadDarkModePreference() {
  if (typeof(Storage) !== "undefined") {
    var isDarkMode = localStorage.getItem("darkMode");

    if (isDarkMode === "true") {
      document.documentElement.setAttribute("data-theme", "dark");
      var darkModeButton = document.getElementById("theme-toggle");
      darkModeButton.innerHTML = 'Light Mode <i class="fas fa-sun">';
    } else {
      document.documentElement.removeAttribute("data-theme");
      var darkModeButton = document.getElementById("theme-toggle");
      darkModeButton.innerHTML = 'Dark Mode <i class="fas fa-moon">';
    }
  }
}




function addDarkModeButton() {
  var mainContainer = document.querySelector(".main-container");
  var firstDiv = mainContainer.querySelector("div:first-child");

  var darkModeButton = document.createElement('button');
  darkModeButton.setAttribute('id', 'theme-toggle');
  darkModeButton.innerHTML = 'Dark Mode <i class="fas fa-moon">';

  darkModeButton.addEventListener('click', function() {
    event.preventDefault();
    if (document.documentElement.hasAttribute("data-theme")) {
      document.documentElement.removeAttribute("data-theme");
      darkModeButton.innerHTML = 'Dark Mode <i class="fas fa-moon">';
      saveDarkModePreference(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      darkModeButton.innerHTML = 'Light Mode <i class="fas fa-sun">';
      saveDarkModePreference(true);
    }
  });

  firstDiv.insertBefore(darkModeButton, firstDiv.firstChild);
}

function addNaamStudentnummerButton() {
  var naamStudentnummer = document.getElementById("naamstudentnummer");

  var naamStudentnummerButton = document.createElement('button');
  naamStudentnummerButton.setAttribute('class', 'next'); 
  naamStudentnummerButton.setAttribute('id', 'next1');
  naamStudentnummerButton.textContent = 'Volgende';

  naamStudentnummerButton.addEventListener('click', function() {
    event.preventDefault();

    naamStudentnummer.style.display = "none";
    cssttr.style.display = "grid";
    progress.style.width = "185.6px";

    saveFormAnswers();
  });

  naamStudentnummer.appendChild(naamStudentnummerButton);
}

function addCssttrButtons() {
  var buttons = document.querySelector(".buttons1");

  var cssttrButtonBack = document.createElement('button');
  cssttrButtonBack.setAttribute('class', 'back'); 
  cssttrButtonBack.setAttribute('id', 'back1');
  cssttrButtonBack.textContent = 'Terug';

  var cssttrButtonNext = document.createElement('button');
  cssttrButtonNext.setAttribute('class', 'next'); 
  cssttrButtonNext.setAttribute('id', 'next2');
  cssttrButtonNext.textContent = 'Volgende';

  cssttrButtonBack.addEventListener('click', function() {
    event.preventDefault();
  
    var cssttr = document.getElementById("cssttr");
    var naamStudentnummer = document.getElementById("naamstudentnummer");

    cssttr.style.display = "none";
    naamStudentnummer.style.display = "grid";
    progress.style.width = "92.8px";
  });

  cssttrButtonNext.addEventListener('click', function() {
    event.preventDefault();
  
    var moeilijkheidsgraadFieldset = document.getElementsByClassName("moeilijkheidsgraad")[0];
    var duidelijkheidFieldset = document.getElementsByClassName("duidelijkheid")[0];
    var lesstofFieldset = document.getElementsByClassName("lesstof")[0];
  
    var selectedRadioButton1 = moeilijkheidsgraadFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton2 = duidelijkheidFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton3 = lesstofFieldset.querySelector("input[type='radio']:checked");
  
    var errorMessage1 = document.getElementsByClassName("error-message1")[0];
    var errorMessage2 = document.getElementsByClassName("error-message2")[0];
    var errorMessage3 = document.getElementsByClassName("error-message3")[0];
  
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "none";
    errorMessage3.style.display = "none";
  
    if (selectedRadioButton1 && selectedRadioButton2 && selectedRadioButton3) {
      var wafs = document.getElementById("wafs");
      var cssttr = document.getElementById("cssttr");
      
      cssttr.style.display = "none";
      wafs.style.display = "grid";
      progress.style.width = "278.4px";
    } else {
      if (!selectedRadioButton1) {
        errorMessage1.style.display = "block";
      }
  
      if (!selectedRadioButton2) {
        errorMessage2.style.display = "block";
      }
  
      if (!selectedRadioButton3) {
        errorMessage3.style.display = "block";
      }
    }
  });

  buttons.appendChild(cssttrButtonBack);
  buttons.appendChild(cssttrButtonNext);
}

function addWafsButtons() {
  var buttons = document.querySelector(".buttons2");

  var wafsButtonBack = document.createElement('button');
  wafsButtonBack.setAttribute('class', 'back'); 
  wafsButtonBack.setAttribute('id', 'back2');
  wafsButtonBack.textContent = 'Terug';

  var wafsButtonNext = document.createElement('button');
  wafsButtonNext.setAttribute('class', 'next'); 
  wafsButtonNext.setAttribute('id', 'next3');
  wafsButtonNext.textContent = 'Volgende';

  wafsButtonBack.addEventListener('click', function() {
    event.preventDefault();
  
    var cssttr = document.getElementById("cssttr");
    var wafs = document.getElementById("wafs");

    wafs.style.display = "none";
    cssttr.style.display = "grid";
    progress.style.width = "185.6px";
  });

  wafsButtonNext.addEventListener('click', function() {
    event.preventDefault();
  
    var moeilijkheidsgraadFieldset = document.getElementsByClassName("moeilijkheidsgraad")[1];
    var duidelijkheidFieldset = document.getElementsByClassName("duidelijkheid")[1];
    var lesstofFieldset = document.getElementsByClassName("lesstof")[1];
  
    var selectedRadioButton1 = moeilijkheidsgraadFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton2 = duidelijkheidFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton3 = lesstofFieldset.querySelector("input[type='radio']:checked");
  
    var errorMessage1 = document.getElementsByClassName("error-message1")[1];
    var errorMessage2 = document.getElementsByClassName("error-message2")[1];
    var errorMessage3 = document.getElementsByClassName("error-message3")[1];
  
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "none";
    errorMessage3.style.display = "none";
  
    if (selectedRadioButton1 && selectedRadioButton2 && selectedRadioButton3) {
      var wafs = document.getElementById("wafs");
      var bt = document.getElementById("bt");
      
      wafs.style.display = "none";
      bt.style.display = "grid";
      progress.style.width = "371.2px";
    } else {
      if (!selectedRadioButton1) {
        errorMessage1.style.display = "block";
      }
  
      if (!selectedRadioButton2) {
        errorMessage2.style.display = "block";
      }
  
      if (!selectedRadioButton3) {
        errorMessage3.style.display = "block";
      }
    }
  });

  buttons.appendChild(wafsButtonBack);
  buttons.appendChild(wafsButtonNext);
}

function addBtButtons() {
  var buttons = document.querySelector(".buttons3");

  var btButtonsBack = document.createElement('button');
  btButtonsBack.setAttribute('class', 'back'); 
  btButtonsBack.setAttribute('id', 'back3');
  btButtonsBack.textContent = 'Terug';

  var btButtonsNext = document.createElement('button');
  btButtonsNext.setAttribute('class', 'next'); 
  btButtonsNext.setAttribute('id', 'next4');
  btButtonsNext.textContent = 'Volgende';

  btButtonsBack.addEventListener('click', function() {
    event.preventDefault();

    var bt = document.getElementById("bt");
    var wafs = document.getElementById("wafs");

    bt.style.display = "none";
    wafs.style.display = "grid";
    progress.style.width = "278.4px";
  });

  btButtonsNext.addEventListener('click', function() {
    event.preventDefault();
  
    var moeilijkheidsgraadFieldset = document.getElementsByClassName("moeilijkheidsgraad")[2];
    var duidelijkheidFieldset = document.getElementsByClassName("duidelijkheid")[2];
    var lesstofFieldset = document.getElementsByClassName("lesstof")[2];
  
    var selectedRadioButton1 = moeilijkheidsgraadFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton2 = duidelijkheidFieldset.querySelector("input[type='radio']:checked");
    var selectedRadioButton3 = lesstofFieldset.querySelector("input[type='radio']:checked");
  
    var errorMessage1 = document.getElementsByClassName("error-message1")[2];
    var errorMessage2 = document.getElementsByClassName("error-message2")[2];
    var errorMessage3 = document.getElementsByClassName("error-message3")[2];
  
    errorMessage1.style.display = "none";
    errorMessage2.style.display = "none";
    errorMessage3.style.display = "none";
  
    if (selectedRadioButton1 && selectedRadioButton2 && selectedRadioButton3) {
      var bt = document.getElementById("bt");
      var submit = document.getElementById("submit");
  
      bt.style.display = "none";
      submit.style.display = "grid";
      progress.style.width = "464px";
    } else {
      if (!selectedRadioButton1) {
        errorMessage1.style.display = "block";
      }
  
      if (!selectedRadioButton2) {
        errorMessage2.style.display = "block";
      }
  
      if (!selectedRadioButton3) {
        errorMessage3.style.display = "block";
      }
    }
  });

  buttons.appendChild(btButtonsBack);
  buttons.appendChild(btButtonsNext);
}

function addSubmitButtons() {
  var buttons = document.querySelector(".buttons4");

  var submitButtonsBack = document.createElement('button');
  submitButtonsBack.setAttribute('class', 'back'); 
  submitButtonsBack.setAttribute('id', 'back4');
  submitButtonsBack.textContent = 'Terug';

  submitButtonsBack.addEventListener('click', function() {
    event.preventDefault();

    var submit = document.getElementById("submit");
    var bt = document.getElementById("bt");

    submit.style.display = "none";
    bt.style.display = "grid";
    progress.style.width = "371.2px";
  });

  var submitButton = buttons.querySelector("button[type='submit']");
  buttons.insertBefore(submitButtonsBack, submitButton);
}



genereerStappen();
addNaamStudentnummerButton();
addCssttrButtons();
addWafsButtons();
addBtButtons();
addSubmitButtons();
addDarkModeButton();
loadFormAnswers();
loadDarkModePreference();