//take input val - create url string - put input val into place div 
//translate temp to F - put temp into temp div

//takes in a city, spits out a url
function tempURL(location) {
    var str = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=235e37b59bc2368babbe5494832de925";
    return str;
}

//takes in a number, changes it to fahrenheit, spits out temp text string
function tempoutput(kelvins) {
    var fahr = kelvins * (9/5) - 459.67;
    var temp = fahr.toString();
    return 'Temperature: ' + temp + String.fromCharCode(176) + 'F';
}

$(document).ready(function () {
    $(document).submit(function (event) {
        event.preventDefault();
    });
    $('#submitplace').click( function() {
        var location = $('#place').val();
        $('#input-place').text(location);
        var tempinfo = tempURL(location);
        $.get(tempinfo, function(weather) {
            var temp = weather.main.temp;
            console.log(weather.main.temp);
            var temptext = tempoutput(temp);
            $('#temp').text(temptext);
            $('#place').val("");
                }, 'json');
    });
});