/**
 * Created by lenovo on 2017/9/21.
 */
//����itcast���� ��װ����¼� �ƶ���û�е���¼� ��start��end�¼�ģ��
var itcase={
    "tap": function (dom,collback) {
        var startTime,startX,startY;
        dom.addEventListener("touchstart", function (e) {
            //�ж��Ƿ��ǵ����¼�
            // 1 ��ָ��
            if(e.targetTouches.length>1){
                return;
            }
            startTime = Date.now();
             startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
        });
        dom.addEventListener("touchend", function (e) {
            if(e.targetTouches.length>1){
                return;
            }
            //2 �¼����300ms���ǵ����¼�
            if(Date.now()-startTime>300){
                return;
            }
            var endX = e.changedTouches[0].clientX;
            var endY = e.changedTouches[0].clientY;
            if(endX-startX<6&&endY-startY<6){
                collback&&collback(e);
            }
        });
    }
}