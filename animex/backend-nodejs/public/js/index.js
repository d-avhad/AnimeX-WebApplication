anime_name=""
quotes=""
character=""

//fetching random quotes for main page display.
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {  
					  anime_name=quote["anime"]
					  quotes=quote["quote"]
					  character=quote["character"]
					  hideSpinner();
					  document.getElementById("quote_id").innerHTML=quotes
					  document.getElementById("citation").innerHTML=character+" from "+anime_name
					  
					  
				})


function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 


function anime_quotes() {
            document.location="AnimeQuotes";
        }



function battlefield () {
	
	 document.location="BattleField"
}


function animeFacts() {
	
	 document.location="Facts"
	
	
}