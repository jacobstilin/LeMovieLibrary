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
})(jQuery);



(function($){
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
            $('tbody').html('');
            $.each(data, function(index, value){
                $('tbody').append(
                    "<tr>" +
                    "<td>" + value.Title + "</td>" +
                    "<td> <form id='my-form4'> <input type='hidden' id='id' name='id' value ="+value.MovieId+" > <button type='submit'>Details</button> </form> </td>" +
                    
                    "</tr>"
                );
            });
        }
        )
        e.preventDefault();
    }

    $('#my-form2').submit( processForm2 );
})(jQuery);




(function($){
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
    $('#my-form3').submit( processForm3 );
 })(jQuery);


 (function($){
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
    $('#my-form4').submit( processForm4 );
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

