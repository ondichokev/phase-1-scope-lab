var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
    window.bestCustomer = 'maybe bob'; 
}

const leastFavoriteCustomer = 'Charlie';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Alice'; 
}

