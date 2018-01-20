$(document).ready(function(){
    $.ajax({
        type:"GET",
        dataType:"json",
        url:"https://api.myjson.com/bins/tls49",
        success:function(response){
            var data=formObject(response);
            constructDOM(data);
        }
    });
        function formObject(response){
            let flags =[],categoryObject=[],length=response.length;
            for(var i=0;i<length;i++){
                let index=flags.indexOf(response[i].language);
                if(index>=0)
                {
                        categoryObject.[index].movie.push(response[i]);
                        continue;

                }
                flags.push(response[i].language);
                let objectSchema={
                    category: response[i].language,movies:[];
                }
                objectSchema.movies.push()
                categoryObject.push
            }



        }
        function constructDOM(data)
        {
            for(var i=0;i<data.length;i++){

            }           
    
            <div class="movie fleft">
            </div>                

        }

   
});