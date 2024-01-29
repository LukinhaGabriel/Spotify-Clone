const $searchInput = document.getElementById("search__input");
const $resultArtist = document.getElementById("result-artist");
const $resultPlaylist = document.getElementById("result-playlist");




function displayResults(result){
    $resultPlaylist.classList.add("hidden");
    const $artistName = document.getElementById("artist-name");
    const $artistImg = document.getElementById("artist-img");

    result.forEach(element => {
        $artistName.innerText = element.name;
        $artistImg.src = element.urlImg;
    });

    $resultArtist.classList.remove("hidden");
}


function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

$searchInput.addEventListener("input", () => {
    const searchTerm = $searchInput.value.toLowerCase();

    if(searchTerm === ""){
        $resultPlaylist.classList.add('hidden');
        // $resultArtist.classList.remove('hidden');
        return;
    }; 
    requestApi(searchTerm);
})
