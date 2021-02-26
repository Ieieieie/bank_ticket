document.addEventListener("turbolinks:load", function(){
    $(function(){
        var bank_code = "";
      $("#bank-name").on("keyup", function(){
        // $("#preview").val($(this).val());
        console.log($(this).val())
        $.ajax({
            url: "https://bank.teraren.com/banks/search.json",
            type: "get",
            data: {name: $(this).val()},
            dataType: "json"
          }).done(function(json){
            bank_code = json[0]['code'];
            if (json.length != 0){
                $('#bank-list').empty();
                $.each(json, function(i, info){
                    $("#bank-list").append($("<option>").val(info['name']));
                })
            }
          })
      })
      $("#branch-name").on("keyup", function(){
        $.ajax({
            url: 'https://bank.teraren.com/banks/' + bank_code + '/branches/search.json',
            type: "get",
            data: {name: $(this).val()},
            dataType: "json"
          }).done(function(json){
            console.log(json)

            if (json.length != 0){
                $('#branch-list').empty();
                $.each(json, function(i, info){
                    $("#branch-list").append($("<option>").val(info['name']));
                })
            }
          })
      })
    })
  })