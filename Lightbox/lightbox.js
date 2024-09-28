// function to iclude htmll popup code

function includePopupHTML(){
    let html = '<div id="my-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="Lightbox/arrowImges/close.png" alt=""></span><img id="leftarrow" src="Lightbox/arrowImges/arrow-left.png" alt=""><img id="rightarrow" src="Lightbox/arrowImges/arrow-right.png" alt=""><img src="" alt=""><img id="mainPopupImage" src="images/lady.jpg" alt=""></div>';


    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild)
}


let img;
let current;

//function to init plugin

function imagePopupInit(target){

    //select all images with class target
    img = document.getElementsByClassName(target);
    
    // add event listener on all selected images
    for(i=0; i < img.length; i++){
        //addd pointer
        img[i].style.cursor = 'pointer';

        //add event listener
        img[i].addEventListener('click', function(){
            document.getElementById("mainPopupImage").src = this.src;
            document.getElementById("my-popup").style.display = 'block';
            checkArrow();
        })
    }
    
    includePopupHTML();

    //next button
    document.getElementById('rightarrow').addEventListener('click', function(){
        nextimg();
    })
    //prev button
    document.getElementById('leftarrow').addEventListener('click', function(){
        previmg();
    })

}


//close button

function closePopUp(){
    document.getElementById("mainPopupImage").src = '';
    document.getElementById("my-popup").style.display = 'none';
}

//next image
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopupImage").src = img[current].src;
    checkArrow();
}

//prev image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopupImage").src = img[current].src;
    checkArrow();
}

function getCurrentImage(){
    for(i=0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopupImage").src){
            current = i;
        }
    }
}

function checkArrow(){
    getCurrentImage();
    if(current == "0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';

    }
}