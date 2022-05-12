function audioPlayer(){
           var currentSong = 0;
           $("#audioPlayer")[0].src = $("#start li a")[0];
           //$("#audioPlayer")[0].play();
           $("#start li a").click(function(e){
              e.preventDefault();
              $("#audioPlayer")[0].src = this;
              $("#audioPlayer")[0].play();
              $("#start li").removeClass("current-song");
               currentSong = $(this).parent().index();
               $(this).parent().addClass("current-song");
           });

           $("#audioPlayer")[0].addEventListener("ended", function(){
              currentSong++;
               if(currentSong == $("#start li a").length)
                   currentSong = 0;
               $("#start li").removeClass("current-song");
               $("#start li:eq("+currentSong+")").addClass("current-song");
               $("#audioPlayer")[0].src = $("#start li a")[currentSong].href;
               $("#audioPlayer")[0].play();
           });
       }

function audioPlayer_echo(){
            var currentSong = 0;
              $("#audioPlayer_echo")[0].src = $("#echo_chamber li a")[0];
             // $("#audioPlayer")[0].play();
              $("#echo_chamber li a").click(function(e){
                 e.preventDefault();
                 $("#audioPlayer_echo")[0].src = this;
                 $("#audioPlayer_echo")[0].play();
                 $("#echo_chamber li").removeClass("current-song");
                  currentSong = $(this).parent().index();
                  $(this).parent().addClass("current-song");
                 });

                 $("#audioPlayer_echo")[0].addEventListener("ended", function(){
                 currentSong++;
                  if(currentSong == $("#echo_chamber li a").length)
                      currentSong = 0;
                  $("#echo_chamber li").removeClass("current-song");
                  $("#echo_chamber li:eq("+currentSong+")").addClass("current-song");
                  $("#audioPlayer_echo")[0].src = $("#echo_chamber li a")[currentSong].href;
                  $("#audioPlayer_echo")[0].play();
                 });
             }
