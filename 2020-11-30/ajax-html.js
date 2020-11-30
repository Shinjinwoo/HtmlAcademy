$(document).ready( function() {
    $('#btnLoad3').click ( function () {
        $('#listArea').empty();
        //리스트 뷰를 비운다.
        $('#listArea').load('ajax-listinfo.html li', function(htmlData){
            //리스트 뷰에 'ajax-listinfo.hmtl'파일의 li태그에서 데이터를 불러온다.
            $('#listArea').listview('refresh');
            //리스트뷰를 갱신한다.

        });
    });
});

