arr=[]
anime_names=[]
anime_chars=[]
anime_lines=[]
global_name=""
global_score=0
question_count=0;
global_game_end=0



// taking all anime names.
fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(animes => {//console.log(animes)
	
			for (let i = 0; i < 40; i++) {
					val=Math.floor(Math.random() * (animes.length-2)) + 1
					arr.push(animes[val]);
					
					}
            })

// taking 10 random anime quotes.
fetch("https://animechan.vercel.app/api/quotes")
          .then((response) => response.json())
          .then((quotes) =>{ //console.log(quotes)
							 for (let i=0; i<quotes.length; i++) {
								 
								 anime_names.push(quotes[i]['anime'])
								 anime_chars.push(quotes[i]['character'])
								 anime_lines.push(quotes[i]['quote'])
								 	 
								 
							 }
		  
		  
		  
		  
		  });
		  

// function to handle start game button. Starting point for game.
function start_game() {
	
	global_name=""
	global_score=0
	question_count=0;
	global_game_end=0

	document.getElementById("start_button").style.display='none';
			
	data_process()
	
}  // end start game


// function to create and display flash cards.

function fill_card_data(cnt,name,chars,lines,arr)	{
	
	global_name=name
	var seconds=0
	var track=10
	var x = setInterval(function() {    
	 
	  
	  document.getElementById("cnt").innerHTML="TIME "+track+" S" 
	  
	  if(track==10) {
	  document.getElementById("scores").innerHTML='SCORE:'+global_score
	  document.getElementById("game_card").classList.remove("move_obj")
	  document.getElementById("card_title").innerHTML=(cnt+1)
	  document.getElementById("game_card_body1").innerHTML=lines
	  document.getElementById("game_card_body2").innerHTML="- By "+ chars
	  document.getElementById("game_card").style.display="block";
	 
	  }
	  
	  track--;
	  
	 // show option card
	 if(track==-1) {
		  
		  clearInterval(x);
		  set_options(global_name)
		  set_display()
		  
	  }
	   
	},1000)

} // end fill card function.	
		  

// function to randomy set options including the correct one.
function set_options(name) {
	let temp = Math.floor(Math.random() * 4) + 1;

	for(let i=1; i<=4; i++) {

	if(temp==i)	
	document.getElementById("opt"+temp).innerHTML=temp+". "+name;
	else
	document.getElementById("opt"+i).innerHTML=i+". "+arr[i];	


	}
	
} // end set options.


//function to display options.
function set_display() {
	for(let i=0; i<4; i++){
		document.getElementById("opt"+(i+1)).disabled=false	;
	}
	document.getElementById("game_card").style.display='none';
	document.getElementById("opt_list").style.display='block';
	
} // end set display.



function data_process() {
	
	fill_card_data(question_count,anime_names[question_count],anime_chars[question_count],anime_lines[question_count],arr)	
}


// function to validate the answer confirmed by Player.
function validate_answer(id) {
	
	question_count++
	//console.log("id",id)
	str_val=document.getElementById(id).innerHTML;
	//console.log(str_val)
	
	if(global_name==str_val.substring(3)) {
		
		global_score=global_score+10;
		document.getElementById(id).innerHTML='Correct &#x2713;';
		document.getElementById("scores").innerHTML='SCORE: '+global_score
		
	}
	else {	
		document.getElementById(id).innerHTML='Wrong!!';
		document.getElementById("scores").innerHTML='SCORE:'+global_score+' Correct Answer: '+global_name	
	}
	
	for(let i=0; i<4; i++) {
		document.getElementById("opt"+(i+1)).disabled=true;
	}

	let dummy=0
	var y=setInterval(function() { 
		dummy++;
		if(dummy==3){
			 clearInterval(y);
			 if(question_count<10) {
				document.getElementById("opt_list").style.display='none';
				data_process()
				
			 }
			 else {
				 document.getElementById("opt_list").style.display='none';
				 global_game_end=1
				 display_score()
				 
			 }
		}

	},1000)


	
} // end  validate function


// function to display score at the end of game.
function display_score() {
	
	
	var myModal = new bootstrap.Modal(document.getElementById("score_modal"), {});
	var model_label=document.getElementById("modal_body_head");
	model_label.innerHTML="YOU GOT :"+global_score

	var model_label1=document.getElementById("modal_body1_head");

	if(global_score==100)
	model_label1.innerHTML="Excellent !! You  are <i>ALL MIGHT !! </i> "

	else if(global_score>=70)
	model_label1.innerHTML="Yayy on learning path.You are <i>future pirate emperor MONKEY.D.LUFFY !! </i> "

	else 
	model_label1.innerHTML="Yoo <i>USOPP</i>, you can do well next time !! "


	m_but=document.getElementById("modal_close_but")
	m_main=document.getElementById("score_modal")
	

	myModal.show();

	m_but.addEventListener('click', function () {
  
	location.reload();
	});
	
	m_main.addEventListener('hidden.bs.modal', function () {
		
	location.reload();
	});

    document.getElementById("start_button").style.display='block'

 }


// function to handle home button.
function go_home() {

	document.location="/"
	
}

// function to display game rules
function get_rules() {
	
	var myModal = new bootstrap.Modal(document.getElementById("rules"), {});
	myModal.show()
}



//module.exports = set_options;

// workaround so that both Node context, like with Jest and  also with pure browser-side JS works.
if (typeof module === 'object') {
    module.exports = set_options;
}

