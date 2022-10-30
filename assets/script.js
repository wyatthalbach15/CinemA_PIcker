var userInput = document.querySelector("#user-input");
var searchButton = document.querySelector("#search-button");
var dropDown = document.getElementById("drop-down");
var tv = document.querySelector("#tv");
var film = document.querySelector("#film");
var form = document.getElementById("search-button");


function submitFunction(e) {
    e.preventDefault();
    if (userInput.value) {
        console.log(userInput.value);
        console.log(dropDown.value);
    };
    console.log(film.checked);
    console.log(tv.checked);
};


for(var i =0;i < dropDown.DOCUMENT_POSITION_DISCONNECTED.length; i++){
    if (dropDown.options[i].value == c ){
        dropDown.options[i].selected = true;
    }
}

form.addEventListener("click", submitFunction);

var imdbApiUrl = "https://imdb-api.com/en/API/AdvancedSearch/k_zns86b2w/?genres=fantasy";

// fetch(imdbApiUrl).then(function(response) {
//     if (response.ok){
//         response.json().then(function(data) {
//             console.log("--IMDb--");
//             console.log(data);
//         });
//     }
// });

var watchModeApiUrl = "https://api.watchmode.com/v1/title/tt0167260/sources/?apiKey=B5EKPpGzVjzybQt6fdVSnprxP9IXaVfuAUPtCiVC";

// fetch(watchModeApiUrl).then(function(response) {
//     if (response.ok){
//         response.json().then(function(data) {
//             console.log("--Streaming--");
//             console.log(data);
//         });
//     }
// });

// Gets streaming data
function getStreamingData(movieId) {
    var watchModeApiUrl = "https://api.watchmode.com/v1/title/" + movieId + "/sources/?apiKey=B5EKPpGzVjzybQt6fdVSnprxP9IXaVfuAUPtCiVC";

    fetch(watchModeApiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("--Streaming--");
                console.log(data);
                console.log(data[5].web_url);

                let streamingArray = [];
                let nameArray = []

                for (let i = 0; i < data.length; i++) {

                    // Checks if name array does not include the current name and pushes in a new object if true

                    if (!nameArray.includes(data[i].name)) {


                        let streamingObject = {
                            name: data[i].name,
                            url: data[i].web_url
                        };

                        streamingArray.push(streamingObject);
                        nameArray.push(data[i].name)
                    }

                }


                console.log("Name Array");
                console.log(nameArray);

                console.log("Streaming Array");
                console.log(streamingArray);

                return;
            });
        }
    });
}

// getStreamingData("tt0167260");