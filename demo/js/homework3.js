Jobs(XYZYdata);
function Jobs(data) {
    // var jobsList = [];
    var htmlText = '';
    data.jobList.map(function (item, index) {
        htmlText += '<li data-click="on" class="border-bottom">' + item.val + '</li><li><ul class="jobList">';
        item.job.map(function (item, i) {
            htmlText += '<li data-click="on" class="border-bottom">' + item.val + '</li><li><ul>';
            item.job.map(function (item, key) {
                htmlText += '<li class="border-bottom">' + item.val + '</li>';
            });
            htmlText += '</ul></li>';
        });
        htmlText += '</ul></li>';
    });
    document.getElementById('jobListCon').innerHTML = htmlText;
    //实现1
    /*document.querySelectorAll('.jobList>li').forEach(function (item, i) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            // console.dir(e);
            var ele;
            if(e.srcElement){
                ele = e.srcElement;
            }else{
                ele = e.target;
            }
            if(ele.getAttribute('data-click') == 'on'){
                if(ele.classList.contains('activated')){
                    ele.classList.remove('activated');
                    ele.nextElementSibling.style.display = 'none';
                }else{
                    ele.classList.add('activated');
                    ele.nextElementSibling.style.display = 'block';
                }
            }
        });
    });*/


    //事件委托实现2
    document.getElementById('jobListCon').addEventListener('click', function (e) {
        var target = e.target ? e.target : e.srcElement;
        if(target.tagName.toLowerCase() === 'li' && target.getAttribute('data-click') == 'on' && target.parentElement.classList.contains('jobList')){
            if(target.classList.contains('activated')){
                target.classList.remove('activated');
                target.nextElementSibling.style.display = 'none';
            }else{
                target.classList.add('activated');
                target.nextElementSibling.style.display = 'block';
            }
        }
    });
    /*$.each(data.jobList, function (index, item) {
        htmlText += '<li data-click="on" class="border-bottom">' + item.val + '</li><li><ul class="jobList">';
        $.each(item.job, function (i, item) {
            htmlText += '<li data-click="on" class="border-bottom">' + item.val + '</li><li><ul>'
            $.each(item.job, function (k, item) {
                htmlText += '<li class="border-bottom">' + item.val + '</li>';
            });
            htmlText += '</ul></li>';
        });
        htmlText += '</ul></li>';
    });
    $('#jobListCon').html(htmlText);
    $('.jobList>li').on('click', function () {
        if ($(this).attr('data-click') == 'on') {
            $(this).toggleClass('activated');
            $(this).next('li').toggle();
        }
    });*/
};