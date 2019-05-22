function calculateNum(){
    //here lies the code of Luke, butchered by
    //inexperience and conflicting google answers
    var operatorRef = document.getElementById("operator");
    var operator = operatorRef.options[operatorRef.selectedIndex].value;
    var num1 = document.getElementById("first").value;
    var num2 = document.getElementById("second").value;

    
    var outputRef = document.getElementById("output");
    outputRef.innerText = (eval(num1+" "+operator+" "+num2));
}