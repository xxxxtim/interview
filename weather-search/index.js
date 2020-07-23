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
// location api
var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d63101e58c97cede4bf7e6de47a55e9d51595471535");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("https://my-json-server.typicode.com/varbark/fake_json_api/cities", requestOptions)
    .then(response => response.json())
    .then(result =>
        render(result),

    )
    .catch(error => console.log('error', error));




function render(result) {
    const dataSelect = document.getElementById("local");
    let inner = "";
    console.log(dataSelect)
    result.map((value, index) => {
        inner = inner + `<option value=${index}>${value}</option>`
    })
    dataSelect.innerHTML = inner;
}

