// Write your solution in this file!
var customerName = 'bob'
function upperCaseCustomerName() {
    customerName = 'BOB'
}

function setBestCustomer() {
    bestCustomer = "not bob" 
}

function overwriteBestCustomer() {
    if (bestCustomer === "not bob") {
        bestCustomer = "maybe bob"
    }    
}

const leastFavoriteCustomer = 'something'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "something else"
}

leastFavoriteCustomer()