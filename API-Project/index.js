let url = 'https://api.spacexdata.com/v4/launches/latest';

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        displayResults(json)
    })

function displayResults(json){
  // image
  let spaceXRocketImage = json.links.flickr.original[0]
  console.log(spaceXRocketImage)
  // name
  let spaceXRocketName = json.name
  console.log(spaceXRocketName)
  // date
  let spaceXDate = json.date_local
  console.log(spaceXDate)
  // details
  let spaceXDetails = json.details
  console.log(spaceXDate)
  // youtube
  let spaceXVideo = json.links.webcast
  console.log(spaceXVideo)
  // wikipedia link
  let spaceXWiki = json.links.wikipedia
  console.log(spaceXWiki)

document.getElementById("name").innerText = spaceXRocketName

document.getElementById("date").innerText = spaceXDate

document.getElementById("details").innerText = spaceXDetails

let link = document.getElementById("wikipedia")
link.setAttribute("href", spaceXWiki);
document.body.appendChild(link)

document.getElementById("video").innerText = spaceXVideo
  
}