
$(document).ready(function(){
    var stations;

    $.get( "http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V", function( data ) {

        //alert( "Load was performed." );
        stations = $.xml2json(data);
        stations = stations['stations'];
        stations = stations['station'];
        console.log($.xml2json(data));
    });
    $('#src-input').keyup(function(){
       var data = $(this).val();
        var selectedStations =[];
        if(data !== ""){
            for(var i = 0 ; i<stations.length ; ++i){
                var thisStation = stations[i].name;

                if(thisStation.toLowerCase().indexOf(data.toLocaleLowerCase())!=-1){
                    selectedStations.push(thisStation);
                }
            }

        }else{
            for(var i = 0 ; i<stations.length ; ++i){
                var thisStation = stations[i].name;
                selectedStations.push(thisStation);
            }
        }
        populateSourceList(selectedStations);

    });
    function populateSourceList(selectedStations) {
        var results = $("#src-list");
        results.empty();
        results.css("display","block");
        href = "javascript:void(0)"
        for(var i = 0 ; i<selectedStations.length ; ++i){
            var thisStation = selectedStations[i];

            results.append("<a href=" + href + " style=\"z-index = 1\" class=\"list-group-item src-station\">" + thisStation + "</a>");
        }
    }
    $('#dest-input').keyup(function(){
        var data = $(this).val();
        var selectedStations =[];
        if(data !== ""){
            for(var i = 0 ; i<stations.length ; ++i){
                var thisStation = stations[i].name;

                if(thisStation.toLowerCase().indexOf(data.toLowerCase())!=-1){
                    selectedStations.push(thisStation);
                }
            }

        }
        else {
            for(var i = 0 ; i<stations.length ; ++i){
                var thisStation = stations[i].name;
                selectedStations.push(thisStation);
            }
        }
        populateDestList(selectedStations);
    });
    function populateDestList(selectedStations) {
        var results = $("#dest-list");
        results.empty();
        results.css("display","block");
        href = "javascript:void(0)"
        for(var i = 0 ; i<selectedStations.length ; ++i){
            var thisStation = selectedStations[i];

            results.append("<a href=" + href + " style=\"z-index = 1\" class=\"list-group-item dest-station\">" + thisStation + "</a>");
        }
    }
    document.addEventListener('click', function(e){

        if(e.target.id!=="src-input")
            $("#src-list").css("display","none");

        if(e.target.id==="src-input")
            $("#src-list").css("display","block");
        if(e.target.id!=="dest-input")
            $("#dest-list").css("display","none");

        if(e.target.id==="dest-input")
            $("#dest-list").css("display","block");
    });
    $("#src-list").on('click','.src-station',function(e) {

        $('#src-input').val($(this).text());
    });
    $("#dest-list").on('click','.dest-station',function(e) {

        $('#dest-input').val($(this).text());
    });
    $("#search-submit").on('click',function(e){
       displaySchedule();

    });
    var schedule ;
    function displaySchedule()
    {
        var srcStation =  $('#src-input').val();
        var desStation = $('#dest-input').val();
        if(srcStation === ""){
            alert("Source station is not selected");
            return;
        }
        if(desStation === ""){
            alert("Destination station is not selected");
            return;
        }
        if(srcStation === desStation){
            alert("Source and destination stations cannot be same");
            return;
        }
        var srcAbbr;
        var destAbbr;
        for(var i = 0 ; i<stations.length ; ++i){
            if(srcStation === stations[i].name){
                srcAbbr = stations[i].abbr;
            }
            if(desStation === stations[i].name){
                destAbbr = stations[i].abbr;
            }

        }


        //alert(srcAbbr + " " + destAbbr);
        console.log("http://api.bart.gov/api/sched.aspx?cmd=depart&orig="+srcAbbr+"&dest="+destAbbr+"&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1");
        $.get( "http://api.bart.gov/api/sched.aspx?cmd=depart&orig="+srcAbbr+"&dest="+destAbbr+"&date=now&key=MW9S-E7SL-26DU-VV8V&b=0&a=4&l=1", function( data ) {

            //alert( "Load was performed." );
            schedule = $.xml2json(data);
            //stations = stations['stations'];
            //stations = stations['station'];
            console.log($.xml2json(data));


        var routeDiv = $("#route-display");
        routeDiv.empty();
        routeDiv.css('display','block');
        routeDiv.append(" <h3>All routes from "+srcStation+" to "+desStation+"</h3>");
        var srcdest = schedule.schedule;
            srcdest = srcdest.request;
        srcdest = srcdest.trip;
        for(var i = 0 ; i<srcdest.length ; ++i){
            var thisTrip = srcdest[i];
            var legs = srcdest[i].leg;
            routeDiv.append("<p><b>"+srcStation+"</b> Departure time "+thisTrip.origTimeMin+"  <b>"+desStation+"</b> arrival time "+thisTrip.destTimeMin+" <b>Total Fare</b> = $"+thisTrip.fare+"</p>");
            console.log("<p>"+srcStation+" Departure time :"+thisTrip.origTimeMin+"  "+desStation+" arrival time :"+thisTrip.destTimeMin+" <b>Total Fare</b> = $"+thisTrip.fare+"</p>");
            var text = "";
            text = text + " <table class=\"table\"> <thead> <tr> <th>Source</th> <th>Destination</th> <th>Dep Time</th> <th>Arr Time</th> <th>Line</th> <th>Towards</th> </tr> </thead> <tbody>"
            console.log(legs instanceof Array);
            console.log(typeof (legs));
            if(legs instanceof Array) {
                for (var j = 0; j < legs.length; ++j) {
                    var thisLeg = legs[j];
                    text = text + "<tr> <td>" + thisLeg.origin + "</td> <td>" + thisLeg.destination + "</td> <td>" + thisLeg.origTimeMin + "</td> <td>" + thisLeg.destTimeMin + "</td><td>" + thisLeg.line + "</td><td>" + thisLeg.trainHeadStation + "</td> </tr>";

                    if (j === (legs.length - 1)) {
                        text = text + "</tbody> </table>";

                    }
                }
            }
            else{
                text = text + "<tr> <td>" + legs.origin + "</td> <td>" + legs.destination + "</td> <td>" + legs.origTimeMin + "</td> <td>" + legs.destTimeMin + "</td><td>" +legs.line + "</td><td>" + legs.trainHeadStation + "</td> </tr>";
            }
            routeDiv.append(text);

        }
        });
    }
});