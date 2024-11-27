$(document).ready(function() {

    })


    $('form').on('submit', function(e){
        e.preventDefault();

        const addTarefa = $('#tarefa-nova').val();
        const novoItem = $('<li></li>');
        
        $(`<li>${addTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ol');
        $('#tarefa-nova').val('');

        $(novoItem).on('click', function(){
            $(this).toggleClass('riscado')
        })
        $('#delete-tarefa').click(function(){
            $(novoItem).empty();
        })
    })
    


