

window.onload = (event) => {

if(window.location.href.includes("#liver")){
    var element_to_scroll_to = document.getElementById('liver');
    element_to_scroll_to.scrollIntoView();
    console.log("liver")
} 

if(window.location.href.includes("#cedar")){
    var element_to_scroll_to = document.getElementById('cedar');
    element_to_scroll_to.scrollIntoView();
    console.log("cedar")
} 

if(window.location.href.includes("#tiger")){
    var element_to_scroll_to = document.getElementById('tiger');
    element_to_scroll_to.scrollIntoView();
    console.log("tiger")
} 



    console.log('page is fully loaded');
 };

