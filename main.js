canvas=document.getElementById('myCanvas');
var canvas=new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set(
            {
                top:block_y,
                left:block_x
            });
            canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		block_x = 0;
		new_image('https://getwallpapers.com/wallpaper/full/c/3/a/512268.jpg');
            console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 150;
		new_image('https://vignette.wikia.nocookie.net/powerrangers/images/5/55/Mmpr-green4.png/revision/latest?cb=20130729210654');
            console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('https://vignette.wikia.nocookie.net/powerrangers/images/4/4f/Prjf-masteryellow.png/revision/latest?cb=20130724185909');
            console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 475;
		new_image('https://tse2.mm.bing.net/th?id=OIP.NWXYkqh9OCyYMzHEPvmgfAHaRv&pid=Api&P=0');
            console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 600;
		new_image('https://vignette1.wikia.nocookie.net/powerrangers/images/9/9e/Prjf-masterblue.png/revision/latest?cb=20130724185909');
		console.log("b");
	}
	
}

