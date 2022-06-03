const unitedNationsCountryCode =['100', '108', '112', '116', '120', '124', '132', '140', '144', '148', '152', '156', '170', '174', '178', '180', '188', '191', '192', '196', '203', '204', '208', '212', '214', '218', '222', '226', '231', '232', '233', '242', '246', '250', '262', '266', '268', '270', '275', '276', '288', '296', '300', '308', '320', '324', '328', '332', '336', '340', '348', '352', '356', '360', '364', '368', '372', '376', '380', '384', '388', '392', '398', '400', '404', '408', '410', '414', '417', '418', '422', '426', '428', '430', '434', '438', '440', '442', '450', '454', '458', '462', '466', '470', '478', '480', '484', '492', '496', '498', '499', '504', '508', '512', '516', '520', '524', '528', '548', '558','562', '566', '578', '583', '584', '585', '586', '591', '598', '600', '604', '616', '620', '624', '626', '634', '642', '643', '646', '659', '662', '670', '674', '678', '682', '686', '688', '690', '694', '702', '703', '704', '705', '706', '710', '716', '724', '728', '729', '740', '748', '752', '756', '760', '762', '764', '768', '776', '780', '784', '788', '792', '795', '798', '800', '804', '807', '818', '826', '834', '840', '854', '858', '860', '862', '882', '887', '894', '020', '004', '028', '008', '051', '024', '032', '040', '036', '070', '052', '050', '056', '048', '096', '068', '076', '044', '064', '072', '084', '012', '104', '031', '544', '090'];

function generateRandomCountryCode() {
    let randomCountryCode = unitedNationsCountryCode[Math.floor(Math.random()*unitedNationsCountryCode.length)];
    return randomCountryCode;
}

const generateRandomFlag = () => {

    var randomCountryCode = generateRandomCountryCode();

    let countryName = '';

    switch (randomCountryCode) {
    case "156":
        countryName = "China";
        break;
    case "356":
        countryName = "India";
        break;
    case "840":
        countryName = "United States";
        break;
    case "360":
        countryName = "Indonesia";
        break;
    case "586":
        countryName = "Pakistan";
        break;
    case "076":
        countryName = "Brazil";
        break;
    case "566":
        countryName = "Nigeria";
        break;
    case "050":
        countryName = "Bangladesh";
        break;
    case "643":
        countryName = "Russia";
        break;
    case "484":
        countryName = "Mexico";
        break;
    case "392":
        countryName = "Japan";
        break;
    case "231":
        countryName = "Ethiopia";
        break;
    case "608":
        countryName = "Phillippines";
        break;
    case "818":
        countryName = "Egypt";
        break;
    case "704":
        countryName = "Viet Nam";
        break;
    case "180":
        countryName = "Democratic Republic of the Congo";
        break;
    case "792":
        countryName = "Türkiye";
        break;
    case "364":
        countryName = "Iran";
        break;
    case "276":
        countryName = "Germany";
        break;
    case "764":
        countryName = "Thailand";
        break;
    case "826":
        countryName = "United Kingdom";
        break;
    case "250":
        countryName = "France";
        break;
    case "380":
        countryName = "Italy";
        break;
    case "834":
        countryName = "Tanzania";
        break;
    case "710":
        countryName = "South Africa";
        break;
    case "104":
        countryName = "Myanmar";
        break;
    case "404":
        countryName = "Kenya";
        break;
    case "410":
        countryName = "South Korea";
        break;
    case "170":
        countryName = "Colombia";
        break;
    case "724":
        countryName = "Spain";
        break;
    case "800":
        countryName = "Uganda";
        break;
    case "032":
        countryName = "Argentina";
        break;
    case "012":
        countryName = "Algeria";
        break;
    case "729":
        countryName = "Sudan";
        break;
    case "804":
        countryName = "Ukraine";
        break;
    case "368":
        countryName = "Iraq";
        break;
    case "004":
        countryName = "Afghanistan";
        break;
    case "616":
        countryName = "Poland";
        break;
    case "124":
        countryName = "Canada";
        break;
    case "504":
        countryName = "Morocco";
        break;
    case "682":
        countryName = "Saudi Arabia";
        break;
    case "860":
        countryName = "Uzbekistan";
        break;
    case "604":
        countryName = "Peru";
        break;
    case "024":
        countryName = "Angola";
        break;
    case "458":
        countryName = "Malaysia";
        break;
    case "508":
        countryName = "Mozambique";
        break;
    case "288":
        countryName = "Ghana";
        break;
    case "887":
        countryName = "Yemen";
        break;
    case "524":
        countryName = "Nepal";
        break;
    case "862":
        countryName = "Venezuela";
        break;
    case "450":
        countryName = "Madagascar";
        break;
    case "120":
        countryName = "Cameroon";
        break;
    case "384":
        countryName = "Ivory Coast";
        break;
    case "408":
        countryName = "North Korea";
        break;
    case "036":
        countryName = "Australia";
        break;
    case "562":
        countryName = "Niger";
        break;
    case "144":
        countryName = "Sri Lanka";
        break;
    case "854":
        countryName = "Burkina Faso";
        break;
    case "466":
        countryName = "Mali";
        break;
    case "642":
        countryName = "Romania";
        break;
    case "454":
        countryName = "Malawi";
        break;
    case "152":
        countryName = "Chile";
        break;
    case "398":
        countryName = "Kazakhstan";
        break;
    case "894":
        countryName = "Zambia";
        break;
    case "320":
        countryName = "Guatemala";
        break;
    case "218":
        countryName = "Ecuador";
        break;
    case "760":
        countryName = "Syria";
        break;
    case "528":
        countryName = "Netherlands";
        break;
    case "686":
        countryName = "Senegal";
        break;
    case "116":
        countryName = "Cambodia";
        break;
    case "148":
        countryName = "Chad";
        break;
    case "706":
        countryName = "Somalia";
        break;
    case "716":
        countryName = "Zimbabwe";
        break;
    case "324":
        countryName = "Guinea";
        break;
    case "646":
        countryName = "Rwanda";
        break;
    case "204":
        countryName = "Benin";
        break;
    case "108":
        countryName = "Burundi";
        break;
    case "788":
        countryName = "Tunisia";
        break;
    case "068":
        countryName = "Bolivia";
        break;
    case "056":
        countryName = "Belgium";
        break;
    case "332":
        countryName = "Haiti";
        break;
    case "192":
        countryName = "Cuba";
        break;
    case "728":
        countryName = "South Sudan";
        break;
    case "214":
        countryName = "Dominican Republic";
        break;
    case "203":
        countryName = "Czech Republic";
        break;
    case "300":
        countryName = "Greece";
        break;
    case "400":
        countryName = "Jordan";
        break;
    case "620":
        countryName = "Portugal";
        break;
    case "031":
        countryName = "Azerbaijan";
        break;
    case "752":
        countryName = "Sweden";
        break;
    case "340":
        countryName = "Honduras";
        break;
    case "784":
        countryName = "United Arab Emirates";
        break;
    case "348":
        countryName = "Hungary";
        break;
    case "762":
        countryName = "Tajikistan";
        break;
    case "112":
        countryName = "Belarus";
        break;
    case "040":
        countryName = "Austria";
        break;
    case "598":
        countryName = "Papua New Guinea";
        break;
    case "688":
        countryName = "Serbia";
        break;
    case "376":
        countryName = "Israel";
        break;
    case "756":
        countryName = "Switzerland";
        break;
    case "768":
        countryName = "Togo";
        break;
    case "694":
        countryName = "Sierra Leone";
        break;
    case "418":
        countryName = "Laos";
        break;
    case "600":
        countryName = "Paraguay";
        break;
    case "100":
        countryName = "Bulgaria";
        break;
    case "434":
        countryName = "Libya";
        break;
    case "422":
        countryName = "Lebanon";
        break;
    case "558":
        countryName = "Nicaragua";
        break;
    case "417":
        countryName = "Kyrgyzstan";
        break;
    case "222":
        countryName = "El Salvador";
        break;
    case "795":
        countryName = "Turkmenistan";
        break;
    case "702":
        countryName = "Singapore";
        break;
    case "208":
        countryName = "Denmark";
        break;
    case "246":
        countryName = "Finland";
        break;
    case "178":
        countryName = "Congo";
        break;
    case "703":
        countryName = "Slovakia";
        break;
    case "578":
        countryName = "Norway";
        break;
    case "512":
        countryName = "Oman";
        break;
    case "275":
        countryName = "Palestine";
        break;
    case "188":
        countryName = "Costa Rica";
        break;
    case "430":
        countryName = "Liberia";
        break;
    case "372":
        countryName = "Ireland";
        break;
    case "140":
        countryName = "Central African Republic";
        break;
    case "544":
        countryName = "New Zealand";
        break;
    case "478":
        countryName = "Mauritania";
        break;
    case "591":
        countryName = "Panama";
        break;
    case "414":
        countryName = "Kuwait";
        break;
    case "191":
        countryName = "Croatia";
        break;
    case "498":
        countryName = "Moldova";
        break;
    case "268":
        countryName = "Georgia";
        break;
    case "232":
        countryName = "Eritrea";
        break;
    case "858":
        countryName = "Uruguay";
        break;
    case "070":
        countryName = "Bosnia and Herzegovina";
        break;
    case "496":
        countryName = "Mongolia";
        break;
    case "051":
        countryName = "Armenia";
        break;
    case "388":
        countryName = "Jamaica";
        break;
    case "634":
        countryName = "Qatar";
        break;
    case "008":
        countryName = "Albania";
        break;
    case "440":
        countryName = "Lithuania";
        break;
    case "516":
        countryName = "Namibia";
        break;
    case "270":
        countryName = "Gambia";
        break;
    case "072":
        countryName = "Botswana";
        break;
    case "266":
        countryName = "Gabon";
        break;
    case "426":
        countryName = "Lesotho";
        break;
    case "807":
        countryName = "North Macedonia";
        break;
    case "705":
        countryName = "Slovenia";
        break;
    case "624":
        countryName = "Guinea-Bissau";
        break;
    case "428":
        countryName = "Latvia";
        break;
    case "048":
        countryName = "Bahrain";
        break;
    case "226":
        countryName = "Equatorial Guinea";
        break;
    case "780":
        countryName = "Trinidad and Tobago";
        break;
    case "233":
        countryName = "Estonia";
        break;
    case "626":
        countryName = "Timor-Leste";
        break;
    case "480":
        countryName = "Mauritius";
        break;
    case "196":
        countryName = "Cyprus";
        break;
    case "748":
        countryName = "Eswatini";
        break;
    case "262":
        countryName = "Djibouti";
        break;
    case "242":
        countryName = "Fiji";
        break;
    case "174":
        countryName = "Comoros";
        break;
    case "328":
        countryName = "Guyana";
        break;
    case "064":
        countryName = "Bhutan";
        break;
    case "090":
        countryName = "Solomon Islands";
        break;
    case "499":
        countryName = "Montenegro";
        break;
    case "442":
        countryName = "Luxembourg";
        break;
    case "740":
        countryName = "Suriname";
        break;
    case "132":
        countryName = "Cabo Verde";
        break;
    case "583":
        countryName = "Micronesia";
        break;
    case "462":
        countryName = "Maldives";
        break;
    case "470":
        countryName = "Malta";
        break;
    case "096":
        countryName = "Brunei Darussalam";
        break;
    case "084":
        countryName = "Belize";
        break;
    case "044":
        countryName = "Bahamas";
        break;
    case "352":
        countryName = "Iceland";
        break;
    case "548":
        countryName = "Vanuatu";
        break;
    case "052":
        countryName = "Barbados";
        break;
    case "678":
        countryName = "Sao Tome & Principe";
        break;
    case "882":
        countryName = "Samoa";
        break;
    case "662":
        countryName = "Saint Lucia";
        break;
    case "296":
        countryName = "Kiribati";
        break;
    case "308":
        countryName = "Grenada";
        break;
    case "670":
        countryName = "Saint Vincent & Grenadines";
        break;
    case "776":
        countryName = "Tonga";
        break;
    case "690":
        countryName = "Seychelles";
        break;
    case "028":
        countryName = "Antigua and Barbuda";
        break;
    case "020":
        countryName = "Andorra";
        break;
    case "212":
        countryName = "Dominica";
        break;
    case "584":
        countryName = "Marshall Islands";
        break;
    case "659":
        countryName = "Saint Kitts & Nevis";
        break;
    case "492":
        countryName = "Monaco";
        break;
    case "438":
        countryName = "Liechtenstein";
        break;
    case "674":
        countryName = "San Marino";
        break;
    case "585":
        countryName = "Palau";
        break;
    case "798":
        countryName = "Tuvalu";
        break;
    case "520":
        countryName = "Nauru";
        break;
    case "336":
        countryName = "The Vatican";
        break;
    default:
        countryName = "Not a UN country flag!"

    };

    console.log(countryName);

    let randomFlag = document.querySelector('img');
        
    console.log(`https://countryflagsapi.com/png/${randomCountryCode}`);
        
    return fetch(`https://countryflagsapi.com/png/${randomCountryCode}`)
    .then(function(response) {
        return response.blob();
    }).then(function(myBlob) {
        let objectURL = URL.createObjectURL(myBlob);
        randomFlag.src = objectURL;
        document.getElementById('countryname').innerHTML = countryName;
    });

};

const button = document.querySelector('button');
button.onclick = generateRandomFlag;


