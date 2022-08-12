function linkMateria(link){
    window.location.href = link;
}

function mostrarNotificacao(id){
    var div = $('#'+id);

    if(div.hasClass('invisivel')){
        div.removeClass('invisivel');
    }else{
        div.addClass('invisivel');
    }
}