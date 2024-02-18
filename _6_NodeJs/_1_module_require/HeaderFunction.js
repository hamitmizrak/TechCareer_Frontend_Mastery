// Function Header
const HeaderFunction=()=>{
    console.log("Header");
}

// Function Navigation
const NavigationFunction=()=>{
    console.log("Navigation");
}

// Dış dünyaya açmak
// NOT: 1 tane function olursa
// module.exports=HeaderFunction;

module.exports.header=HeaderFunction;
module.exports.navigation=NavigationFunction;