let userRole = "Employee";
let dietaryServices = false;

if (userRole === "Employee") { 
    dietaryServices = true
} else if (userRole === "Enrolled Member") {
    dietaryServices = true
} else if (userRole === "Subscriber") {
    dietaryServices = true
} else {
    // dietaryServices remains false
}

let userMessage = (dietaryServices ? "Dietary Services Available" : "Enroll or Subscribe to access services")

console.log("User Message:", userMessage);
