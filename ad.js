let i=0;
images=[];
time=[5000,4000,3000,2000,1000];
weights=[0,0,0,0,0]

images[0]="1.png";
images[1]="2.jpg";
images[2]="3.png";
images[3]="4.jpg";
images[4]="5.png";

window.onload=changeImg;
function changeImg(){
    document.slide.src=images[i];

    // i=Math.floor(Math.random()*images.length);
    
    i = weighted_random(weights)
    console.log(i)
    // if(i<images.length-1){
    //     i++;
    // }else{
    //     i=0;
    // }
    setTimeout("changeImg()",time[i]);
}


// function weighted_random(options) {
//     var i;

//     var weights = [];

//     for (i = 0; i < options.length; i++)
//         weights[i] = options[i].weight + (weights[i - 1] || 0);
    
//     var random = Math.random() * weights[weights.length - 1];
    
//     for (i = 0; i < weights.length; i++)
//         if (weights[i] > random)
//             break;
    
//     return i;
// }

function weighted_random(weights) {
    var i;

    for (i = 0; i < weights.length-1; i++)
        weights[i] += weights[i - 1] || 0;
    
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return i;
}