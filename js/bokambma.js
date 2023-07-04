

class Countries {
    constructor(name, code, capital) {
        this.name = name;
        this.code = code;
        this.capital = capital;
    }
        

}


function loadCountries() {

  fetch ("../dataFiles/countries.json")
    .then(res => res.json())
    .then((dataJSON) =>{
        console.log(dataJSON);
        
        addCountries(dataJSON);
        
    });    
}


function addCountries(dataJSON){

    let countryInfo = document.getElementById("selectBox");

    for (let x of dataJSON.Countries) {

        newRec = new Countries (
            x.name, x.code, x.capital
        )
        countryInfo.innerHTML +=
        `
        <option value="${x.code}"> ${x.name} </option>
        
        `;
    }
}

function showCountryInfo(e) {
    console.log(e)
//     var urlParameters= new URLSearchParams(window.location.search);
//     var country = urlParameters.get('countries.json');
    
    let countryBox = document.getElementById("selectBox");
    window.location.assign(`../pages/country.html?code=${countryBox.value}`);
    // /pages/country.html?code=CAN
//     for (let x of dataJSON.Countries) {

//         console.log(x.name);
//         console.log(x.code);

//         if (countryBox == x.code) {

//         }
    
//         countryBox.innerHTML +=
//         `
        
//             <option value="${x.code}"> ${x.name} </option>
      
//         `;
//    }
}
