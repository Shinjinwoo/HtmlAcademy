$(document).ready( function() {
    $('#btnLoad1').click ( function () {
        //버튼 : btnLoad1 클릭시 이벤트 발생.
        $.ajax ({
            url : 'ajax-stuinfo.xml',
            // 데이터를 받아올 파일의 url을 지정한다
            type : 'get',
            // get 형식으로 데이터를 받아옴 ( 보낼 경우에는 post 등이 있음)
            dataType : 'xml',
            // 파일의 확자자명, 데이터의 타입은 xml 형식
            timeout : 10000,
            // 타임아웃 : 응답제한 시간 ms (밀리초 ) 로 나타냄 
            success : function(xmlData) {
            //성공 콜백 함수이다.
            //xmlData를 인자로 성공적으로 불러올경우 아래 문장 실행.
                var tagList = "";
                //변수 태그 리스트 선언
                $(xmlData).find('student').each(function() {
                    tagList += "<li>" + $(this).find('gradepoint').text() + "</li>";
                    // xmlData를 student 태그에서 찾음 
                    // each() 메서드는 매개 변수로 받은 것을 사용해 for in 반복문과 같이
                    // 배열이나 객체의 요소를 검사할 수 있는 메서드이다.
                    // 태그리스트에 문장의 접두와 접미로<li> </li> 테그를 붙여주고
                    // 태그의 내용안에 gradepoint를 text 형식으로 받아온다.
                });
                $('#listArea').empty(); // 리스트뷰를 비움
                $('#listArea').append(tagList);
                // 리스트뷰에 tagList에 저장된 부분 리스트를 추가
                $('#listArea').listview('refresh'); // 리스트뷰를 새로 고침
            },
            error : function() {
            //실패 콜백 함수이다.
                $("#listArea").html("<p>Error!!</p>");
            }
        });
    });
});