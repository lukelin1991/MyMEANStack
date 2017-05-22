$(document).ready(function(){
        $('button').click(function(){
          $.get('https://api.github.com/users/lukelin1991', displayName);
     });
      function displayName(data){
       if (data.name){
         $('body').append("<p>"+data.name+"</p>");
       }
      }
    }
    );
