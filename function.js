window.addEventListener("load", init);

 function init(){
    document.getElementById("asunto").addEventListener("change", revisar);
}

function revisar(){
        if(document.getElementById("asunto").value=="normas"){
            document.getElementById("normasInput").style.display="block"; 
            document.getElementById("normasLabel").style.display="block"; 
        }
        else{
                document.getElementById("normas Input").style.display="none"; 
                document.getElementById("normasLabel").style.display="none";
            }