// $("#button-send").click(function(e){
//     e.preventDefault();
//     const date = $("#input-date").val();
//     const key = "twas7PMQufH9W9FyyNvT7bpGCEQ29cx4gt2XNoTZ";
//     $.ajax({
//         url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`,
//         type: "GET",
//         success: function(result){
//             const media = $(".media");    
//             console.log(result);
//             $(".title").text(result.title);
//             $(".author").html(`<strong>Author:</strong> ${result.copyright}`);
//             $(".media").attr("src", result.url);  
//             $(".text").text(result.explanation);

//             if(result.media_type == "image"){
//                 media.html(`<img class="media" src="${result.url}"/>`)
//             }else{
//                 media.html(`<iframe class="media" src="${result.url}"> </iframe>`)
//             }
//         },
//     });
// });