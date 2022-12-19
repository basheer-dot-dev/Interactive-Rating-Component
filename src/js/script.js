let rateValue;
let currentValue;
let currentElement;
let isSubmitted = false;

//Rating bar start
//checks if rating button that is clicked contains the class 'selected'. If true, then calls add selection function, else, calls remove selection function (start)
const trial = (eve) => {
    let tempElement = eve.target;
    let hasClassBool = tempElement.classList.contains('selected');
    if (hasClassBool) {
        removeSelection(tempElement);
    } else if (!hasClassBool) {
        addSelection(tempElement);
    }
};
//(end)


//click event listeners for rating buttons and submit button (start)
let e1 = document.getElementById('1');
let e2 = document.getElementById('2');
let e3 = document.getElementById('3');
let e4 = document.getElementById('4');
let e5 = document.getElementById('5');
let submitButton = document.getElementById('submit');
let before = document.getElementById('before');
let after = document.getElementById('after');
let ratingText = document.getElementById('chosen-rating');

e1.addEventListener('click', trial);
e2.addEventListener('click', trial);
e3.addEventListener('click', trial);
e4.addEventListener('click', trial);
e5.addEventListener('click', trial);
submitButton.addEventListener('click', () => {
    isSubmitted = true;
    submit();
});
//(end)

//function to remove selection on clicked rating button if it has been clicked before and clears the rating value (start)
function removeSelection(element) {
    element.classList.replace('selected', 'unselected');
    currentValue = undefined;
    rateValue = undefined;
}
//(end)


//function to add selection to clicked rating button and remove selection from the current element and update rating value (start)
function addSelection(element) {
    let hasCurrentElement = (currentValue !== undefined);
    if (hasCurrentElement) {
        currentElement = document.getElementById(currentValue);
        currentElement.classList.replace('selected', 'unselected');
    }
    currentValue = element.id;
    element.classList.replace('unselected', 'selected');
    rateValue = element.id;
}
//(end)

//Rating Bar end

//Submit Button Start
const submit = () => {
    if (isSubmitted)
        before.classList.replace('shown', 'hidden');
        let ratingTextNode = document.createTextNode(rateValue);
        ratingText.appendChild(ratingTextNode);
        after.classList.replace('hidden', 'shown');
}
