
global_file_name="../images/templates/im0.png"

function go_home() {

	document.location="/"
	
}


function generate_image() {
	var mod=new bootstrap.Modal(document.getElementById("canvas_modal"), {})
	var downloadLink = document.getElementById("download-link");
	var image_area = document.getElementById("image_body");
	var input_text = document.getElementById("input_text");
	var text_str=input_text.value
	
	text_str = text_str.replace(/<\/?[^>]+(>|$)/g, '');
	text_str = text_str.replace(/[\"><'`]/g, '');
	
	var canvas = document.createElement('canvas');
	
	image_area.innerHTML=""
	canvas.innerHTML=""
	ht=0
	wt=0
	
	canvas.width = 400
	canvas.height = 300
	
	var size_font=document.getElementById("size_text").value;
	var tx_font=document.getElementById("tx_font").value;
	var tx_align=document.getElementById("tx_align").value
	
	if(tx_align=='center'){
		
		ht= canvas.height / 2
		wt= canvas.width / 2
	}
	else if(tx_align=='left') {
		
		ht= 50
		wt= 50

	} else {
		
		wt=canvas.width - 50,
		ht=50
		
	}
	
    var ctx = canvas.getContext("2d");
    var image = new Image();
    image.src = global_file_name; 
	
    image.onload = function() {
      ctx.drawImage(image, 0, 0, image.width, image.height,  0, 0, canvas.width, canvas.height);
      ctx.font = size_font+"px Arial";
      ctx.fillStyle = tx_font;
	  ctx.textAlign = tx_align;
	  ctx.textBaseline = 'middle';  
	  wrapText(ctx, text_str, wt, ht,canvas.width, size_font);
	  
	  var dataURL = canvas.toDataURL();
	   
      downloadLink.href = dataURL;
	  
	  
	}
	image_area.appendChild(canvas);
	
	mod.show()
	
}


function open_car() {
	
	var par=document.getElementById("car_image_body")
	
	for (let i=1; i<9; i++) {
	new_div=document.createElement('div')
	new_div.classList.add('carousel-item')
	new_div.classList.add('data-bs-interval="4000"')
	new_div.innerHTML='<a   href="javascript:void(0)" onclick="chooseImage('+i+')"><img src = "images/templates/im'+i+'.png"   class="carousel-image d-block  mx-auto"   alt = "Template 2"></a>'
	par.appendChild(new_div)

	}
	document.getElementById("main_car").style.display='block'
	
}

function chooseImage(img_num) {
	
	global_file_name="../images/templates/im"+img_num+".png"
	document.getElementById("main_car").style.display='none'
	
}

function wrapText(context, c_text, x, y, maxWidth, lineHeight) {
	maxWidth=300
	lineHeight=parseInt(lineHeight)
	  
	var words = c_text.split(' ');
    var line = '';

	for(var n = 0; n < words.length; n++) {	
		var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
		  
	    if (testWidth > maxWidth && n > 0) {  
            context.fillText(line, x , y);
            line = words[n] + ' ';
            y =(y+ lineHeight);
          }
          else {
            line = testLine;
          }
		  
		 
     }
		

     context.fillText(line, x,y);
 }