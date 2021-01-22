//Kilometer to Meter conversion
function kilometerToMeter(kmValue){
    var meter = ("");
    if(kmValue <= 0){
        return ("Negative Value or  isn't accepted or distance can't be 0");
    }
    else{
        var meter = kmValue * 1000
    }
    return meter;
}
var result = kilometerToMeter(-1);
console.log(result);


//Budget Calculator
function budgetCalculator(watch, phone, laptop){
    var totalBudget = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalBudget; 
}
var totalWatch = 2;  //Input quantity
var totalPhone = 2;  //Input quantity
var totalLaptop = 2; //Input quantity
if(totalWatch < 0 || totalPhone < 0 || totalLaptop < 0){
    console.log("Are you crazy?!");
}
else{
    var totalItems = budgetCalculator(totalWatch, totalPhone, totalLaptop)
    console.log(totalItems);
}


//Hotel Cost Calculator
 function hotelCost(stayOver){
     var totalCost = 0;
     if(stayOver <= 10 && stayOver > 0){
         totalCost = stayOver * 100;
     }
     else if(stayOver <= 0){
        return ("Have to stay at least one day.");
     }
     else if(stayOver <= 20){
        var firstTenDays = 10 * 100;
        var remainingDays = stayOver - 10;
        var secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
     }
     else{
         var firstTenDays = 10 * 100;
         var secondTenDays = 10 * 80;
         var remainingDays = stayOver - 20;
         var aboveTwentyDays = remainingDays * 50;
         totalCost = firstTenDays + secondTenDays + aboveTwentyDays; 
     }
     return totalCost;
 }
 var daysCount = hotelCost(5);
 console.log(daysCount);



//Mega friend
function megaFriend(friendArray){
    var longestName='';
    for (var i = 0; i < friendArray.length; i++){
        if (friendArray[i].length > longestName.length)
        longestName = friendArray[i];
    }
    return longestName;
}
var finalArray = megaFriend(['Shakil Ahmed', 'Tamim Iqbal', 'Shakib Al Hasan']);
console.log(finalArray);

    


