function callWeatherReport(element){
	   let city = element.parentElement.firstElementChild.innerText.substring(10)
	
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2658b66e79ba602351e12efe0d9c1bd`).then((response) => {
	  return response.json();
  
	}).then((data) => {
	  alert(`Current temperature is ${data.main.temp - 273.15} degree C`);
  
	}).catch((error) => {
	  console.log(error);
	})
  }

  let restCountries = fetch("https://restcountries.eu/rest/v2/all")
	.then((response) => {
	  return response.json();
	})
	.then((data) => {
	  console.log(data);
  
  
	  
	  let container = document.createElement("div");
	  container.setAttribute("class", "container",);
	  document.body.append(container);
  
	  let CardComponent;
		
		data.forEach((element) => {
		CardComponent = document.createElement("div");
		CardComponent.classList.add("card", "text-center", "float-end", );
		CardComponent.setAttribute("style", " background-image: linear-gradient(black,orange);color:white; font-family:Times New Roman, Times, serif; width: 20rem; margin: 50px; height: 32rem;");
	   
	  
  //card-header
  let cardHeader;
  
		cardHeader = document.createElement("div");
		cardHeader.setAttribute("class", "card-header");
		cardHeader.innerText = element.name;
		CardComponent.appendChild(cardHeader);
  //Image
  let img;
  
		img = document.createElement("img");
		img.setAttribute("class", "card-img-top");
		img.setAttribute("style","height: 11rem;")
		img.setAttribute("src", element.flag);
		CardComponent.appendChild(img);
  //card- body
  let capital;
  
		cardBody = document.createElement("div");
		cardBody.classList.add("card-body", "text-center");
  
		capital = document.createElement("p");
		capital.innerText = 'Capital : ' + element.capital;
  let Region;
  
		region = document.createElement("p");
		region.innerText = 'Region : ' + element.region;
	let Latlng;
	
		latlng=document.createElement('p')
		latlng.innerText='Latlng : ' + element.latlng;
  let countryCode;
  
		countryCode = document.createElement("p");
		countryCode.innerText = 'Country code : ' + element.alpha3Code;
  
		cardBody.appendChild(capital);
		cardBody.appendChild(region);
		cardBody.appendChild(latlng);
		cardBody.appendChild(countryCode);
  //Button
  let Button;
  
		button = document.createElement("btn");
		// button.setAttribute("href", "#");
		button.setAttribute("onclick", "callWeatherReport(this)");
		button.classList.add("btn", "btn-primary");
		button.innerText = 'Click for weather';
		cardBody.appendChild(button);
  
		CardComponent.appendChild(cardBody);
  
		container.appendChild(CardComponent);
	  });
  
	  document.body.append(container);
	  })
	  .catch((error)=>{
		  console.log(error)
	  })
	