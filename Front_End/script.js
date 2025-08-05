var modeButton = document.getElementById("mode-select");

modeButton.addEventListener("click", () => {
    // document.body.classList.toggle("dark-mode");

    const currentMode = modeButton.innerText.trim();
    if (currentMode === "Light Mode") {
        darkMode();
    } else {
        lightMode();
    }
});





const lightMode = () => {

    const navBar = document.getElementsByClassName("navbar")[0];
    // navBar.style.backgroundColor = "white";
    navBar.style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.5)";
    modeButton.innerText = "Light Mode";
    // modeButton.style.color = "black";
    modeButton.style.border = "none";
    // modeButton.style.backgroundColor = "white";
    // modeButton.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.9)";
    const logo = document.getElementsByClassName("logo")[0];
    // logo.style.color = "black";

    const container = document.getElementsByClassName("container")[0];
    container.style.backgroundColor = "white";
    container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.7)";


    const generateBtn = document.getElementById("generate-btn");
    generateBtn.style.color = "black";
    generateBtn.style.backgroundColor = "white";
    generateBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.7)";
    generateBtn.style.border ="none";


    const aiModelInfo = document.getElementsByClassName("ai-model-info")[0];
    aiModelInfo.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    aiModelInfo.style.color = "black";


    const infoSection = document.getElementById("info-section");
    infoSection.style.backgroundColor = "white";
    infoSection.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.7)";

    const langItem = document.getElementsByClassName("lang-item");
    for(let i = 0; i < langItem.length; i++){
        langItem[i].style.color = "black";
        langItem[i].style.backgroundColor = "white";
        langItem[i].style.border = "none";
        langItem[i].style.boxShadow = " 0 0 10px rgba(0, 0, 0, 0.7)";
    }


    const footerSection = document.getElementsByClassName("footer-section")[0];
    footerSection.style.backgroundColor = "white";
    footerSection.style.color = "black";


    const lastPanel = document.getElementsByClassName("last-panel")[0];
    lastPanel.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.7)";

    containerPanelLightMode();
}




const darkMode = () => {
    const navBar = document.getElementsByClassName("navbar")[0];
    // navBar.style.backgroundColor = "black";
    navBar.style.boxShadow = " 0 0 10px rgba(255, 255, 255, 0.5)";
    modeButton.innerText = "Dark Mode";
    // modeButton.style.color = "white";
    // modeButton.style.backgroundColor = "black";
    modeButton.style.border = "none";
    // modeButton.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    // const logo = document.getElementsByClassName("logo")[0];
    // logo.style.color = "white";

    const container = document.getElementsByClassName("container")[0];
    container.style.backgroundColor = "black";
    container.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";

    const generateBtn = document.getElementById("generate-btn");
    generateBtn.style.color = "white";
    generateBtn.style.backgroundColor = "black";
    generateBtn.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
    generateBtn.style.border= "none";

    const aiModelInfo = document.getElementsByClassName("ai-model-info")[0];
    aiModelInfo.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    aiModelInfo.style.color = "white";

     const infoSection = document.getElementById("info-section");
    infoSection.style.backgroundColor = "black";
    infoSection.style.boxShadow = " 0 0 20px rgba(255, 255, 255, 0.7)";

    const langItem = document.getElementsByClassName("lang-item");
    for(let i = 0; i < langItem.length; i++){
        langItem[i].style.color = "white";
        langItem[i].style.backgroundColor = "black";
        langItem[i].style.border = "none";
        langItem[i].style.boxShadow = " 0 0 10px rgba(255, 255, 255, 0.7)";
    }

    const footerSection = document.getElementsByClassName("footer-section")[0];
    footerSection.style.backgroundColor = "black";
    footerSection.style.color = "rgb(255, 255, 255, 0.8)";

    const lastPanel = document.getElementsByClassName("last-panel")[0];
    lastPanel.style.boxShadow = " 0 0 20px rgba(255, 255, 255, 0.7)";




    containerPanelDarkMode();
}








const containerPanelDarkMode = () => {
    const langSelectOptions = document.getElementsByClassName("lang-select-options");
    for (let i = 0; i < langSelectOptions.length; i++) {
        langSelectOptions[i].style.backgroundColor = "black";
        langSelectOptions[i].style.color = "white";
        langSelectOptions[i].style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
        langSelectOptions[i].style.border = "none";
    }


    const codeArea = document.getElementsByClassName("code-area");
    for (let i = 0; i < codeArea.length; i++) {
        codeArea[i].style.backgroundColor = "black";
        codeArea[i].style.color = "grey";
        codeArea[i].style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
        codeArea[i].style.border = "none";
    }
}


const containerPanelLightMode =() => {
    const langSelectOptions = document.getElementsByClassName("lang-select-options");
    for (let i = 0; i < langSelectOptions.length; i++) {
        langSelectOptions[i].style.backgroundColor = "white";
        langSelectOptions[i].style.color = "black";
        langSelectOptions[i].style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        langSelectOptions[i].style.border = "none";
    }


    const codeArea = document.getElementsByClassName("code-area");
    for (let i = 0; i < codeArea.length; i++) {
        codeArea[i].style.backgroundColor = "white";
        codeArea[i].style.color = "black";
        codeArea[i].style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        codeArea[i].style.border = "none";
    }
}


















const inputLangSelect = document.querySelector('select[name="input-lang"]');
const inputlangImage = document.getElementById("input-lang-image");

inputLangSelect.addEventListener("change", () =>{
    const selectedLang = inputLangSelect.value;
    inputlangImage.src = getLangImagePath(selectedLang);
});



const outputLangSelect = document.querySelector('select[name="output-lang"]');
const outputLangImage = document.getElementById("output-lang-image");

outputLangSelect.addEventListener("change", () =>{
    const selectedLang = outputLangSelect.value;
    outputLangImage.src = getLangImagePath(selectedLang);
});


function getLangImagePath(lang) {
    switch (lang) {
        case "python":
            return "../png/python.svg";
        case "javascript":
            return "../png/javascript.svg";
        case "java":
            return "../png/java.svg";
        case "csharp":
            return "../png/csharp.svg";
        case "cpp":
            return "../png/c++.svg";
        case "c":
            return "../png/c.svg";
        case "dart":
            return "../png/dart.svg";
        case "fortran":
            return "../png/fortran.svg";
        case "golang":
            return "../png/golang.svg";
        case "lisp":
            return "../png/lisp.svg";
        case "matlab":
            return "../png/matlab.svg";
        case "objc":
            return "../png/objc.svg";
        case "perl":
            return "../png/perl.svg";
        case "ada":
            return "../png/ada.svg";
        case "r":
            return "../png/r.svg";
        case "php":
            return "../png/php.svg";
        case "ruby":
            return "../png/ruby.svg";
        case "rust":
            return "../png/rust.svg";
        case "scala":
            return "../png/scala.svg";
        case "sql":
            return "../png/sql.svg";
        case "swift":
            return "../png/swift.svg";
        case "typescript":
            return "../png/typescript.svg";
        default:
            return ""; // fallback for unsupported values
    }
}



