function updateCountry() {
    var urlParameters= new URLSearchParams(window.location.search);
    var countryCode = urlParameters.get("code");

    fetch('https://restcountries.com/v2/alpha?codes=' + countryCode)
    .then(res => res.json())
    .then((country) =>{
        displayCountry(country);
        console.log(country)
    })
}

function displayCountry(country) {
    let name = country[0].name;
    let capital = country[0].capital;
    let altSpelling = country[0].altSpellings[0];
    let pop = country[0].population;
    console.log(name, capital, altSpelling, pop)

    document.getElementById("capital").innerText = capital;
    document.getElementById("pop").innerText = pop;
    document.getElementById("flag").src =  country[0].flags.png;
}

/*
[
    {
        "name": "Canada",
        "topLevelDomain": [
            ".ca"
        ],
        "alpha2Code": "CA",
        "alpha3Code": "CAN",
        "callingCodes": [
            "1"
        ],
        "capital": "Ottawa",
        "altSpellings": [
            "CA"
        ],
        "subregion": "Northern America",
        "region": "Americas",
        "population": 38005238,
        "latlng": [
            60,
            -95
        ],
        "demonym": "Canadian",
        "area": 9984670,
        "gini": 33.3,
        "timezones": [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00",
            "UTC-05:00",
            "UTC-04:00",
            "UTC-03:30"
        ],
        "borders": [
            "USA"
        ],
        "nativeName": "Canada",
        "numericCode": "124",
        "flags": {
            "svg": "https://flagcdn.com/ca.svg",
            "png": "https://flagcdn.com/w320/ca.png"
        },
        "currencies": [
            {
                "code": "CAD",
                "name": "Canadian dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "fr",
                "iso639_2": "fra",
                "name": "French",
                "nativeName": "français"
            }
        ],
        "translations": {
            "br": "Kanada",
            "pt": "Canadá",
            "nl": "Canada",
            "hr": "Kanada",
            "fa": "کانادا",
            "de": "Kanada",
            "es": "Canadá",
            "fr": "Canada",
            "ja": "カナダ",
            "it": "Canada",
            "hu": "Kanada"
        },
        "flag": "https://flagcdn.com/ca.svg",
        "regionalBlocs": [
            {
                "acronym": "NAFTA",
                "name": "North American Free Trade Agreement",
                "otherNames": [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        "cioc": "CAN",
        "independent": true
    }
]

*/