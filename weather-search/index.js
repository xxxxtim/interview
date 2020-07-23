var datas = [
    "Changhua",
    "Chiayi",
    "Hsinchu",
    "Hualien",
    "Yilan",
    "Taipei",
    "Taichung",
    "Miaoli",
    "Nantou",
    "Pingtung",
    "Penghu",
    "Yunlin",
    "Chiayi",
    "Hsinchu",
    "Keelung",
    "Kaohsiung",
    "Taoyuan",
    "Tainan"
];

// weather API
// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=bd45fc9db8849cb46d00a451483ccd44");
// xhr.withCredentials = true
// xhr.send();

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=bd45fc9db8849cb46d00a451483ccd44", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

const dataSelect = document.getElementById("local");

var inner = "";
for (var i = 0; i < datas.length; i++) {

    inner = inner + '<option value=' + i + '>' + datas[i] + '</option>';
}
dataSelect.innerHTML = inner;





var sectors = new Array();
