// Require
// const headerFunction=require('./HeaderFunction');
// 1 tane function'da böyle çağırıyoruz.
// headerFunction();

const headerFunction=require('./HeaderFunction').header;
const navigationFunction=require('./HeaderFunction').navigation;

// Ana 
const mainFunction=require('./MainFunction');
const footerFunction=require('./FooterFunction');

// 1 tane function'da böyle çağırıyoruz.
// headerFunction();
headerFunction();
navigationFunction();
mainFunction();
footerFunction();