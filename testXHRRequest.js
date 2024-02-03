
var url = 'https://api.publicapis.org/entries';
const httpRequest = new XMLHttpRequest(url);

/*inline function*/
const createRequest = function (url) {
    httpRequest.addEventListener('readystatechange',(url)=>
    {
        if(httpRequest.readyState === 3){
            console.log("ReadyState is 3");
        }
        if(httpRequest.readyState === 4){
            modifyHttpResponse(httpRequest);
        }
    });
    httpRequest.open('GET',url);
    httpRequest.send();
};


const modifyHttpResponse =function(httpRequest){
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            ShowSuccessUI(httpRequest.responseText);
        }
        else{
            UpdateUIError(httpRequest.status+ ':'+ httpRequest.responseText);
        }
    }      
}

const ShowSuccessUI= function(data){
    console.log(data);
}

const UpdateUIError= function(data){
    console.log(data);
}

createRequest(url);



