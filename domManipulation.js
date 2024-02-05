function subscribe(){
    debugger;
    let email = document.getElementById("email").value;
    console.log(email);
    if(email !== '')
    {
        alert(email +"Subscribed!");
    }
    else{
        alert("Please Enter Email to subscribe");
    }
};

function getElements(){
    

    //based on Class or ID, time consuming as looking all over the document
    const element1 = document.querySelector(".main")
    console.log(element1);

    //only on Id
    const element2 = document.getElementById("comments");
    console.log(element2);
    
    const element3 = document.getElementById("header");
    console.log(element3);

    //jquery
    //const $ele = $('#header');
};


