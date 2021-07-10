canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width= 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;

function add(){
   backgroung_imgTag = new Image(); 
   backgroung_imgTag = uploadBackground; 
   backgroung_imgTag.src = background_img; 

   greecar_imgTag = new Image(); 
   greecar_imgTag.onload = uploadgreencar;
   greecar_imgTag.src = greencar_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar(){
    ctx.drawImage(gc_image, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown (e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38"){
        up();
        console.log("up");
    
    }
    if (keyPressed == "40"){
        down();
        console.log("down");
    }

    if (keyPressed == "39"){
        right();
        console.log("right");}

     if (keyPressed == "37"){
     left();
    console.log("left");}
}

function up(){
    if (greencar_y >= 0){
        greencar_y = greencar_y - 10;
        console.log("When up is pressed x = " + greencar_x + " | y = " + greencar_y );
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if (greencar_y <= 500){
        greencar_y = greencar_y + 10;
        console.log("When down is pressed x = " + greencar_x + " | y = " + greencar_y );
        uploadBackground();
        uploadRover();
    }
}

function left(){
    if (greencar_x >= 0){
        greencar_x  = greencar_x - 10;
        console.log("When left is pressed x = " + greencar_x + " | y = " + greencar_y );
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if (greencar_x <= 700){
        greencar_x = greencar_x + 10;
        console.log("When right is pressed x = " + greencar_x + " | y = " + greencar_y );
        uploadBackground();
        uploadRover();
    }
}



