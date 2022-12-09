let rateValue;
let rateArray = [1,2,3,4,5];
let newArray;
let prevElement;
let rateElement;
let tempElement;

function rate (value) {
    rateValue = value.toString();
    newArray = rateArray.splice(value, value);
    if (rateElement !== undefined){
        prevElement = rateElement;
    }
    rateElement = document.getElementById(rateValue);
    if (rateElement.classList.contains("selected")){
        rateElement.classList.remove("selected");
        rateElement.classList.add("unselected");
    } else if (rateElement.classList.contains("unselected")){
        rateElement.classList.remove("unselected");
        rateElement.classList.add("selected");
    }
    newArray.forEach(function(item){
        tempElement = document.getElementById(item.toString());
        if (tempElement.classList.contains("selected")){
        tempElement.classList.remove("selected");
        tempElement.classList.add("unselected");
        }
    }
    )
}