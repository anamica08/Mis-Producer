document.getElementById("submit-button").onclick = async function readData(){
    event.preventDefault();
    let name = document.getElementById("fname").value+" "+document.getElementById("mname").value+" "+document.getElementById("lname").value;
    
    let gender = "Unknown";
    let ele = document.getElementsByName('gender'); 
              
     for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
         gender = ele[i].value; 
         } 
    let dob = document.getElementById("dob").value; //dd-mm-yyyy 
    let curr_address = document.getElementById("address1").value+", "+document.getElementById("address2").value+", "+document.getElementById("address3").value+", "+document.getElementById("address4").value+", "+document.getElementById("address5").value;
    let email = document.getElementById("email").value;
    let ph = document.getElementById("phone");
    let phonenumber = ph.options[ph.selectedIndex].value + " " + document.getElementById("number").value ;

    let positionSelection = document.getElementById("position");
    let position = positionSelection.options[positionSelection.selectedIndex].value;
    if(name != " " && gender !== "Unknown" && dob != " " && email !== " " && phonenumber != " "&& position !== " " ){
        const resp = await fetch('/application/publish',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name,gender,dob,curr_address,email,phonenumber,position})
        });
    }else{
        document.getElementById("error").innerText = "Please fill all the required Feilds."
    }
    

    console.log(resp);

    //after response 
    if(resp.status = 201){
        
    }

}