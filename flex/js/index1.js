/**
 * Created by lenovo on 2017/9/21.
 */
window.onload = function () {
    var left_content = document.querySelector(".left_content");
    var contentHeight = left_content.offsetHeight;
    //��ȡ��������
    var ulBox = left_content.querySelector("ul:first-of-type");
    var ulBoxHeight = ulBox.offsetHeight;
    //��̬ʱ�����ֵ ��Сֵ
    var maxTop = 0;
    var minTop = contentHeight-ulBoxHeight;
    //console.log(minTop);
    //��̬ʱ���ֵ ��Сֵ
    var maxBoomTop = maxTop+100;
    var minBoomTop = minTop-100;
    //�϶�ulBox
    var startY,moveY,distanceY= 0,toltal =0;
    ulBox.addEventListener("touchstart", function (e) {
        startY = e.targetTouches[0].clientY;
        //console.log(startY);
    })
    ulBox.addEventListener("touchmove", function (e) {
        moveY = e.targetTouches[0].clientY;
        //console.log(moveY);
        distanceY = moveY-startY;
        //console.log(distanceY);
        //�ж� ����ƶ������Ƿ��ڶ�̬��Χ��
        //console.log(toltal + distanceY);
        if(toltal+distanceY>maxBoomTop||toltal+distanceY<minBoomTop){
            return;
        }
        ulBox.style.transition = "left .5s";
        ulBox.style.top = toltal+distanceY+"px";
    })
    ulBox.addEventListener("touchend", function (e) {
        if(toltal+distanceY<minTop){
            toltal=minTop;
            ulBox.style.transition = "left .5s";
            ulBox.style.top = minTop+"px";
        }
        else if(toltal+distanceY>maxTop){
            toltal=maxTop;
            ulBox.style.transition = "left .5s";
            ulBox.style.top = maxTop+"px";
        }
        else{
            toltal+=distanceY;
        }
    })
    //��ȡ����li ��li����Զ�������index
    var lis =ulBox.querySelectorAll("li");
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
    }
    //������װ�ĺ���
    itcase.tap(ulBox, function (e) {
       for(var i=0;i<lis.length;i++){
           lis[i].classList.remove("active");
       }
       //��ȡ��ǰli
        var li = e.target.parentNode;
        //��ȡli�ĸ߶�
        var liHeight = li.offsetHeight;
        li.classList.add("active");
        var li_index = li.index;
        ulBox.style.transition = "top .5s";
        if(-li_index*liHeight<minTop){
            toltal = minTop;
            ulBox.style.top = minTop+"px";
        }
        else{
            ulBox.style.top = -li_index*liHeight+"px";
            toltal = -li_index*liHeight;
        }
    })
};
