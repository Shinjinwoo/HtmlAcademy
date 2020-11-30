$(document).ready ( function() {
    $('#btnLoad2').click ( function() {
        // 버튼 : btnLoad2 클릭시 이벤트 발생
        $.getJSON('ajax-stuinfo.json',function(jsonData){
            //ajax-stuinfo.json 파일 안에서 jsonData를 불러들인다.
            var tagList = "";
            //태그 리스트 생성
            $.each(jsonData.stuinfo, function() {
                //stuinfo 라는 Json 객체에서 
                //schoolyear 라는 키값의 밸류들을 가져온다.
                tagList += "<li>" + this.schoolyear + "</li>";
            });
            $('#listArea').empty();
            //리스트뷰 초기화
            $('#listArea').append(tagList);
            //리스트 뷰에 태그 리스트를 추가.
            $('#listArea').listview('refresh');
            //리스트 뷰를 갱신.
        });
    });
});
