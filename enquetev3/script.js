var naamStudentnummer = document.getElementById("naamstudentnummer");
var cssttr = document.getElementById("cssttr");

const stappen = ['Jouw Gegevens', 'CSSttR', 'WAfS', 'Brow. Tech.', 'Submit'];

const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');



themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeStylesheet.innerHTML = `
      :root {
        /* Kleuren */
        --main-color: #eb5e28;
        --secondary-color: white;
        --darker-text: #f4f1eb;
        --lighter-text: white;
        --grey: #403d39;
        --white: #252422;
      }
    `;
    themeToggle.innerHTML = 'Light Mode <i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeStylesheet.innerHTML = '';
    themeToggle.innerHTML = 'Dark Mode <i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = 'Light Mode <i class="fas fa-sun"></i>';
  }



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



document.getElementById("next1").addEventListener("click", function() {
    naamStudentnummer.style.display = "none";
    cssttr.style.display = "grid";
    progress.style.width = "185.6px";
  });
  


document.getElementById("next2").addEventListener("click", function(event) {
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
  


document.getElementById("back1").addEventListener("click", function(event) {
    event.preventDefault();
  
    var cssttr = document.getElementById("cssttr");
    var naamStudentnummer = document.getElementById("naamstudentnummer");

    cssttr.style.display = "none";
    naamStudentnummer.style.display = "grid";
    progress.style.width = "92.8px";
  });  



document.getElementById("next3").addEventListener("click", function(event) {
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

  

document.getElementById("back2").addEventListener("click", function(event) {
    event.preventDefault();
  
    var wafs = document.getElementById("wafs");
    var cssttr = document.getElementById("cssttr");

    wafs.style.display = "none";
    cssttr.style.display = "grid";
    progress.style.width = "185.6px";
}); 



document.getElementById("next4").addEventListener("click", function(event) {
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
  
  


document.getElementById("back3").addEventListener("click", function(event) {
    event.preventDefault();

    var bt = document.getElementById("bt");
    var wafs = document.getElementById("wafs");

    bt.style.display = "none";
    wafs.style.display = "grid";
    progress.style.width = "278.4px";
}); 
  
  

document.getElementById("back4").addEventListener("click", function(event) {
    event.preventDefault();

    var submit = document.getElementById("submit");
    var bt = document.getElementById("bt");

    submit.style.display = "none";
    bt.style.display = "grid";
    progress.style.width = "371.2px";
}); 


genereerStappen();