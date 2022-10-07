//input
const userNameInput = document.getElementById("user-name");
const userKmInput = document.getElementById("distance-km");
const userAgeInput = document.getElementById("user-age");
const submitBtn = document.getElementById("submit");
const kmPrice = 0.21;

//random numer
const rndNumber = Math.floor(Math.random() * (10000 - 99999) ) + 99999;


//on click 
submitBtn.addEventListener("click",  function () {
    //input value
    const userName = userNameInput.value;
    console.log(userName)
    const userKm =  parseInt(userKmInput.value); 
    const userAge = userAgeInput.value;

    //price without discount
    let ticketPrice = kmPrice * userKm;
    console.log(ticketPrice);

    //discounts
    const discount20 = ticketPrice * 0.2;
    const discount40 = ticketPrice * 0.4;
    
    if (userAge === "under-age"){
        ticketPrice -= discount20;
        console.log (ticketPrice);
    } else if (userAge === "over-age"){
        ticketPrice -= discount40;
        console.log(ticketPrice);
    };

    //final price
    const finalPrice = ticketPrice.toFixed(2)

    //output
    document.getElementById("result").innerHTML = `${finalPrice} euros.`
    document.getElementById("passager-name").innerHTML = userName;
    document.getElementById("ticket-distance").innerHTML += `${userKm} KM`;
    document.getElementById("offer-type").innerHTML = userAge;
    document.getElementById("ticket-number").innerHTML = rndNumber;

    //reset imput
    userNameInput.value = "";
    userAgeInput.value = "";
    userKmInput.value = "";
});

