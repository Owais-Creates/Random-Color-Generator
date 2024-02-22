// Characters for hex code generation
const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Selecting the elements of HTML
const btn = document.querySelector('button');
const colorContainer = document.querySelector('#colorContainer');
const colorHexCode = document.querySelector('#hexCode')

// Adding the response on the "Click"
btn.addEventListener('click', () => {

    let colorCode = generateHexColors(hexCode);
    colorContainer.style.background = colorCode;
    colorHexCode.textContent = colorCode

})

// This function generates a random number between 0 and 15.
const randomNumberGenerator = () => {

    return Math.floor(Math.random() * hexCode.length)

}

// This function generates the final "HexCode" which will be used in the above "Click" event listener to generate a random Color.
const generateHexColors = () => {

    let hash = "#"
    for (i = 0; i < 6; i++) {
        hash += hexCode[randomNumberGenerator()]
    }
    return hash;
}

// ---------------------------------------------------------------------------------------------------



