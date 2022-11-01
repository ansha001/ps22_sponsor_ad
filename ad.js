let i=0;
images=[];
// time=[5000,4000,3000,2000,1000];
time=1000
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
    
    i = weightedRandom(1, 5)-1
    console.log(i)
    // if(i<images.length-1){
    //     i++;
    // }else{
    //     i=0;
    // }
    setTimeout("changeImg()",time);
}

// function weighted_random(weights) {
//     var i;

//     for (i = 0; i < weights.length; i++)
//         weights[i] += weights[i - 1] || 0;
    
//     var random = Math.random() * weights[weights.length - 1];
    
//     for (i = 0; i < weights.length-1; i++)
//         if (weights[i] > random)
//             return i;
//     return i;
// }

function weightedRandom(min, max) {
    return Math.round(max / (Math.random() * max + min));
}
