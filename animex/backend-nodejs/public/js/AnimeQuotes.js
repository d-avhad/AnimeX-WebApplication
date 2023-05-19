anime_list=[]
count=1
data=[]
global_page_num=0
global_total_page=0
t_data=document.getElementById("data_table")


// fetch data and fill out the table

fetch('https://animechan.vercel.app/api/available/anime')
      .then(response => response.json())
      .then(animes => {//console.log(animes)	
	   data_pagination(animes.slice(0,100))	
	   count=1
	   anime_list=animes
	   hideSpinner();
			
	  })   // fetch end
	  
	  
// function that handles pagination.
function data_pagination(data1) {

	data=data1
	var itemsPerPage = 10;
	var dataContainer=document.getElementById("data_table")
	var paginationContainer = document.getElementById("data_page");
	var totalPages = Math.ceil(data.length / itemsPerPage);
	global_total_page=totalPages
	var prev=document.createElement("li")
	prev.classList.add("page-item")
	prev.innerHTML='<a class="page-link" href="javascript:getprev()" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only"></span></a>'
	paginationContainer.appendChild(prev)

	for (let i = 1; i <= totalPages; i++) {
		
		var u_list=document.createElement("li");
		u_list.classList.add("page-item")
		//if(i==1)
		//u_list.classList.add("active")
		u_list.innerHTML='<a class="page-link bg-dark" href="#" onclick="showPage('+i+')">'+i+'</a>'
		paginationContainer.appendChild(u_list);	
	}

	var next=document.createElement("li")
	next.classList.add("page-item")
	next.innerHTML='<a class="page-link" href="javascript:getnext()" aria-label="Next"> <span aria-hidden="true">&raquo;</span><span class="sr-only"></span></a>'
	paginationContainer.appendChild(next)

	const links = paginationContainer.getElementsByTagName("a");
	for (let i = 0; i < links.length; i++) {
		  
		num = links[i];
		if (num.textContent == 1) {
			num.click()
		  
	  }
	  
	}
 
 }// end data_pagination
 
 
function showPage(pageNumber) {

	global_page_num=pageNumber

	var itemsPerPage=10	
	dataContainer=document.getElementById("data_table")	
	paginationContainer = document.getElementById("data_page");

	const startIndex = (pageNumber - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// get the data for the current page
	const currentPageData = data.slice(startIndex, endIndex); 

	var rowCount = dataContainer.rows.length;
	for (var i = rowCount - 1; i > 0; i--) {
				dataContainer.deleteRow(i);
			}

	count=1
	for(i=0; i<currentPageData.length; i++) {
					
		if(data[i]!='') {
			
			t = document.getElementById("data_table");				
			row = t.insertRow(count);
			cell0 = row.insertCell(0);
			cell1 = row.insertCell(1);					
			cell0.innerHTML = count;
			cell0.classList.add("text-center")					
			cell1.innerHTML = '<a href="#" style="text-decoration:none;" onclick="javascript:getdetails('+"'" +currentPageData[i]+"'"+')" >'+currentPageData[i]+'</a>'
			cell1.classList.add("text-center")														
			count=count+1
				
				
		}
	}// end for

	const links = paginationContainer.getElementsByTagName("a");
	 
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		if (link.textContent == pageNumber) {
			link.classList.add("active");
		} 
		else {
			link.classList.remove("active");
		}
		
	}
	  
 }// end showpage
	   

function getprev() {
	
	if(global_page_num!=1 ) {
		currentPage=global_page_num-1;
		showPage(currentPage)
	
	}
		
}//end prev


function getnext() {
	
	if(global_page_num!=global_total_page ) {
		currentPage=global_page_num+1;
		showPage(currentPage)
	
	}
		
}// end next


function fetch_quotes_by_anime(name) {
	
	var car_body=document.getElementById("car_body");
		
	fetch("https://animechan.vercel.app/api/quotes/anime?title="+name)
	.then((response) =>{  if (!response.ok) {
							throw new Error('Network response was not ok');
						   }
						  return response.json();})
	.then((quotes) => {  //console.log("Result",quotes)
						car_body.innerHTML="";
						for(let i=0; i<quotes.length; i++) {
							  
							var carouselItem = document.createElement("div"); 
							carouselItem.classList.add("carousel-item"); 
							  if(i==0)
							  carouselItem.classList.add("active");
							  carouselItem.setAttribute("data-bs-interval", "4000");  
							  carouselItem.innerHTML='<h6 class="h-100 text-center"><i>'+quotes[i]["quote"]+'</i><br>- By '+quotes[i]["character"]+'</h6>';	  
							  car_body.appendChild(carouselItem);
									  
						  }
						  
			  }).catch(error => {
					car_body.innerHTML="";
					console.error('No data Found', error);
					var carouselItem = document.createElement("div"); 
					carouselItem.classList.add("carousel-item"); 
					carouselItem.classList.add("active");
					carouselItem.setAttribute("data-bs-interval", "4000");  
					carouselItem.innerHTML='<h6 class="h-100 text-center"><i>No Data Found</i></h6>';	  
					car_body.appendChild(carouselItem);
					
	  });
			  
			  
		  
		 
} // end fetch_quotes_by_anime

	 	  
function getdetails(name) {
	
	var myModal = new bootstrap.Modal(document.getElementById("modal_anime"), {});
	var model_label=document.getElementById("modal_label");
	model_label.textContent = name;
	const modalContent = document.querySelector(".modal-content");
	modalContent.style.background='#FFE5B4';
	modalContent.style.color='blue';
	fetch_quotes_by_anime(name)
	myModal.show();
		
}

function search_anime_quotes() {
	
	var input= document.getElementById("search_input").value;

	// performing input sanitization
	const sanitizedInput = input.replace(/<\/?[^>]+(>|$)/g, '');
	const sanitizedInput2 = sanitizedInput.replace(/[\"><'`]/g, '');
	getdetails(sanitizedInput2)
		
}


function hideSpinner() {
    document.getElementById('spinner')
            .style.display = 'none';
} 



function go_home() {

	document.location="/"
	
}