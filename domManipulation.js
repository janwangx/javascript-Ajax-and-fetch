const subscribeButton = document.getElementById("subscribe");
subscribeButton.addEventListener("click", subscribe);

function subscribe(){
    debugger;
    const email = document.getElementById("email").value;
    console.log(email);
    if(email !== "" && email !== undefined)
    {
        alert(email +" Subscribed!");
    }
    else{
        alert("Please Enter Email to subscribe");
    }
};

function getElements(){
    
    //based on Class or ID, time consuming as looking all over the document
    const element1 = document.querySelector(".main")
    console.log(element1);

    const element2 = document.getElementById("comments");
    console.log(element2);
    
    const element3 = document.getElementById("header");
    console.log(element3);

    //jquery
    //const $ele = $('#header');
};




