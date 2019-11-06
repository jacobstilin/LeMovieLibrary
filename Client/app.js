

(function($){
    function processForm( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );

    


    function processForm2( e ){
        var dict = {
            Title : this["title"].value,
            Genre : this["genre"].value,
        	Director: this["director"].value
        };

        $.ajax({
            url: 'https://localhost:44352/api/movie',
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        }).then(function(data) {
            $('#movieTable').html('');
            $('#movieHeader').append(
                "<tr>" +
                "<th> Title </th>" +
                "</tr>"
            );
            $.each(data, function(index, value){
                $('#movieTable').append(
                    "<tr>" +
                    "<td>" + value.Title + "</td>" +
                    "<td> <form id='my-form4'> <input type='hidden' id='id' name='id' value ="+value.MovieId+" > <button type='submit'>Details</button> </form> </td>" +
                    
                    "</tr>"
                );
            });
            $('#my-form4').submit( processForm4 );
        }
        )
        e.preventDefault();
    }

    $('#my-form2').submit( processForm2 );

    


    function processForm3( e ){
        var dict =  this["id"].value;
        console.log(dict);
        console.log(e);
        $.ajax({
            url: 'https://localhost:44352/api/movie/'+ dict,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        }).then(function(data) {
            $('movieHeader').html('');
            $('movieTable').html('');
                $('movieTable').append(
                    "<tr>" +
                    "<td>" + data.Title + "</td>" +
                    "<td>" + data.Genre + "</td>" +
                    "<td>" + data.Director + "</td>" +
                    "</tr>"
                );
        }
        )
        e.preventDefault();
    }
    $('#my-form3').submit( processForm3 );
 
    


    function processForm4( e ){
     
        var dict = this["id"].value;
        console.log(dict);
        console.log(e);
        
        $.ajax({
            url: 'https://localhost:44352/api/movie/'+ dict,
            dataType: 'json',
            type: 'get',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        }).then(function(data) {
            $('#detailsHeader').html('');
            $('#detailsTable').html('');
            $('#detailsHeader').append(
                "<tr>" +
                "<th> Title </th>" +
                "<th> Genre </th>" +
                "<th> Director </th>" +
                "</tr>"
            );
                $('#detailsTable').append(
                    "<tr>" +
                    "<td>" + data.Title + "</td>" +
                    "<td>" + data.Genre + "</td>" +
                    "<td>" + data.Director + "</td>" +
                    "</tr>"
                );
        }
        )
        e.preventDefault();
    }
    $('#my-form4').submit( processForm4 );
    
 
    
    
   function processForm5( e ){
       var newDict = {
           Title : this["title"].value,
           Genre : this["genre"].value,
           Director: this["director"].value
       };
       var dict =  this["id"].value;
       $.ajax({
           url: 'https://localhost:44352/api/movie/'+ dict,
           dataType: 'json',
           type: 'put',
           contentType: 'application/json',
           data: JSON.stringify(newDict),
           success: function( data, textStatus, jQxhr ){
               $('#response pre').html( data );
           },
           error: function( jqXhr, textStatus, errorThrown ){
               console.log( errorThrown );
           }
       }).then(function(data) {
           $('tbody').html('');
               $('tbody').append(
                   "<tr>" +
                   "<td>" + data.Title + "</td>" +
                   "<td>" + data.Genre + "</td>" +
                   "<td>" + data.Director + "</td>" +
                   "</tr>"
               );
       }
       )
       e.preventDefault();
   }
   $('#my-form5').submit( processForm5 );
})(jQuery);



// (function($){
//     function processForm3( e ){
//         var dict = {
//             Title : this["title"].value,
//             Genre : this["genre"].value,
//         	Director: this["director"].value
//         };

//         $.ajax({
//             url: 'https://localhost:44352/api/movie',
//             dataType: 'json',
//             type: 'post',
//             contentType: 'application/json',
//             data: JSON.stringify(dict),
//             success: function( data, textStatus, jQxhr ){
//                 $('#response pre').html( data );
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown );
//             }
//         });

//         e.preventDefault();
//     }

//     $('#my-form3').submit( processForm3 );
// })(jQuery);

// (function getAllMovies(){
//     $(document).ready(function() {
//         $.ajax({
//             type: 'get',
//             url: 'https://localhost:44352/api/movie',
//             dataType: 'json',
//             success: function(){
//                 $('.Movies').html('');
//             }
//         })
//         .then(function(data) {
//             $.each(data, function(index, value){
//                 $('myTable').append(
//                     "<tr>" +
//                     "<td>" + value.Title + "</td>" +
//                     "<td>" + value.Genre + "</td>" +
//                     "<td>" + value.Director + "</td>" +
//                     "</tr>"
//                 );
//             });
//         }
//         )
//     }
//     )
    
// })(jQuery);

