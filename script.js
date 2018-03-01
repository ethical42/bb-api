$(document).ready(function() {
    $.ajax({
        url: "https://brottsplatskartan.se/api/events",
        type:"GET",
        dataType:"jsonp",
    }).then(function(data) {
      // console.log(data.data[0]);

      for (var i = 0; i < data.data.length; i++) {
        var location_data = data.data[i].title_location;
        var location = '<td title="' + data.data[i].location_string + '">' + location_data + '</td>';

        var description_data = data.data[i].description;
        var description = '<td>' + description_data + '<br><a href="' + data.data[i].external_source_link + '" target="_blank">Läs mer</a></td>';

        var type_data = data.data[i].title_type;
        var type = '<td>' + type_data + '</td>';

        var date_human_data = data.data[i].date_human;
        var date_human = '<td>' + date_human_data + '</td>';

        $('.container table tbody').append('<tr>'
        + location
        + description
        + type
        + date_human
        + '</tr>');
      }
    });
});
