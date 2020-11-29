function goToPage(){
    var form = document.querySelector("#view")
    var input = form.value 
    if(input == "1" || input == ""){
        txt = "Please check your selection again"
    } else if(input == "2" || input == ""){
        txt =  "Origami Division"
        window.location.replace("Origami-site/")
    } else if(input == "3" || input == ""){
        txt = "Lego Division"
        window.location.replace("Lego-site/")
    } else {
        txt = "A error was encountered"
    }
    document.getElementById("error-msg").innerHTML = txt
}