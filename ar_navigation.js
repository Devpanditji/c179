let coordinates =  {}

$(document).ready(function (){
    get_coordinates();
})
function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')){
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinations.source_lat = source.split(";")[0]
        coordinations.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        cordinates.destination_lon = destination.split(";")[1]
    }else{
        alert("Coorinates not selected!")
        window.history.back();
    }
}