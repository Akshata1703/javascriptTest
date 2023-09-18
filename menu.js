const menu = (day) =>{
    switch(day){
        case "Monday":
            console.log("Rice Idli");
            break;
        case "Tuesday":
            console.log("Veg. Burger");
            break;
        case "Wednesday":
            console.log("Garlic Bread with Cheese");
            break;    
        case "Thursday":
            console.log("Sandvich");
            break;
        case "Friday":
            console.log("Shahi Paneer");
            break; 
        case "Saturday":
            console.log("Dosa ");
            break;    
        case "Sunday":
            console.log("Plain Cheese Pizza");
            break;   
        default:
            console.log("Invalid day");     
            break;
    }
};
console.log(menu("Monday"));