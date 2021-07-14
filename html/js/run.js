// Inspiration: https://tympanus.net/codrops/2012/10/04/custom-drop-down-list-styling/
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('.drop_active_txt');
    this.opts = this.dd.find('ul.drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
        });
        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.html();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
            opt.siblings().removeClass('selected');
            opt.filter(':contains("' + obj.val + '")').addClass('selected');
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#noble-gases'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.wrap-drop').removeClass('active');
    });
});

//tab
$(document).ready(function() {

            //When page loads...
            $(".tab_content").hide(); //Hide all content
            $("ul.tabs li:first").addClass("active").show(); //Activate first tab
            $(".tab_content:first").show(); //Show first tab content

            //On Click Event
            $("ul.tabs li").click(function() {

                $("ul.tabs li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content").hide(); //Hide all tab content

                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(50); //Fade in the active ID content
                return false;
            });

        });

/*tab*/

$(document).ready(function() {

            //When page loads...
            $(".tab_content2").hide(); //Hide all content
            $("ul.tabs2 li:first").addClass("active").show(); //Activate first tab
            $(".tab_content2:first").show(); //Show first tab content

            //On Click Event
            $("ul.tabs2 li").click(function() {

                $("ul.tabs2 li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content2").hide(); //Hide all tab content

                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(50); //Fade in the active ID content
                return false;
            });

        });



/*간부재실현황*/
$(document).ready(function() {
    //When page loads...
            $(".cadre_speech").hide(); //Hide all content
            $(".ptl_cadre_article:first").addClass("active").show(); //Activate first tab
            $(".cadre_speech:first").show(); //Show first tab content

            //On Click Event
            $(".ptl_cadre_article").click(function() { 
                $(".ptl_cadre_article").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".cadre_speech").hide(); //Hide all tab content

                var activeTab = $(this).attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(50); //Fade in the active ID content
                return false;
            });
});


/*snb 메뉴 */
$(document).ready(function() {
    $('.snb_drop  .dep1 > a').click(function(){
        $(this).next('.dep2').slideToggle(100);
        $(this).parent().toggleClass('on'); $(this).parent().siblings('.dep1').removeClass('on'); $(this).parent().siblings().children('.dep2:visible').slideUp(0);
        
    });
});
  

$(document).ready(function() {
    $('.dep_list  .dep1 > a').click(function(){
        $(this).next('.dep2').slideToggle(100);
        $(this).parent().toggleClass('on'); $(this).parent().siblings('.dep1').removeClass('on'); $(this).parent().siblings().children('.dep2:visible').slideUp(0);
        
    });
});

$(document).ready(function() {
    $('.dep3_list  .dep2 li > a').click(function(){
        $(this).next('ul.dep3').slideToggle(100);
        $(this).parent().toggleClass('on'); $(this).parent().siblings('.dep2').removeClass('on'); $(this).parent().siblings().children('.dep3:visible').slideUp(0);
        
    });
});

//select 디자인
$(document).ready(function() {
$('.round_select').selectOrDie({
	size: 5
});
$('.s_round_select').selectOrDie({
	size: 5
});
$('.white_select').selectOrDie({
	size: 5
});
$('.gray_select').selectOrDie({
	size: 5
});
$('.round_select').parent().addClass('round_select');
$('.s_round_select').parent().addClass('s_round_select');
$('.white_select').parent().addClass('white_select');
$('.gray_select').parent().addClass('gray_select');
});

/*스크롤바 커스텀*/
		jQuery(document).ready(function() {
			jQuery('.scrollbar-inner').scrollbar();
		});

$(document).ready(function() {
	$('.bcNav li:last-child').addClass('on')
})


/* 서브페이지 탭메뉴 */
$(document).ready(function() {
	var list_tm = $(".dep_list .dep1 ul.dep2 li");
    var r_view = $(".sub_cont_inner .right_con");
    
    list_tm.click(function(e){
		e.preventDefault();
		$(".dep_list .dep1 ul.dep2 li").removeClass("select");
        $(this).addClass("select");
		
		var l_href = $(this).children("a").attr("href");
		r_view.hide();
        $(l_href).show();
        
    });
	
});

$(document).ready(function() {
	var tm = $(".tab_con li.tab_menu");
    var tc = $(".tab_con .tabcon_view");
    
    tm.click(function(e){
        e.preventDefault();
        $(this).siblings("li.tab_menu").removeClass("action");
        $(this).addClass("action");
		
    });
});
