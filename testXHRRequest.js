
var url = 'https://api.publicapis.org/entries';
const httpRequest = new XMLHttpRequest(url);

/*inline function*/
const createRequest = function (url) {
    httpRequest.addEventListener('readystatechange',(url)=>{ modifyHttpResponse(httpRequest);});
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
        if(httpRequest.readyState === 3){
            console.log("ReadyState is 3");
    }      
}

const ShowSuccessUI= function(data){
    const ApiObj = JSON.parse(data);
    console.log(ApiObj);
    console.log(ApiObj.entries[0].API);
}

const UpdateUIError= function(data){
    console.log(data);
}

createRequest(url);



