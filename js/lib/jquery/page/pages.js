var Pages = function(id, config, callBack) {
	this.config = {
		pageNum: 5, //总页数
		nowPage: 1, //当前页
		lastPage: true, //上一页按钮
		nextPage: true, //下一页按钮
		firstPage: false, //首页按钮
		tailPage: false, //尾页按钮
		jumpPage: false //跳页框
	}

	if (config && $.isPlainObject(config)) {
		$.extend(this.config, config);
	}

	this.pageNum = this.config.pageNum;
	this.nowPage = this.config.nowPage;

	if (callBack) {
		this.callBack = callBack;
	}

	if (id) {
		this.id = id;
		this.obj = $('#' + id);
		this.creatDom();
	} else {
		console.error('容器id不存在');
	}

}
Pages.prototype = {
	creatDom: function() {

		var _this = this,
			config = _this.config,
			pageBox = _this.obj;

		var pageNumWrap = $('<span class="page-num-wrap"></span>');

		if (config.firstPage) {
			var firstPage = $('<span class="firstPage"><<</span>');
			firstPage.click(function() {
				_this.firstPage();
			});
			pageNumWrap.append(firstPage);
		}

		if (config.lastPage) {
			var lastPage = $('<span class="lastPage"><</span>');
			lastPage.click(function() {
				_this.lastPage();
			});
			pageNumWrap.append(lastPage);
		}

		if (config.pageNum) {
			var pages = $('<span class="pageNums"></span>');
			
			if(config.pageNum<=10){
				for (var i = 1; i <= config.pageNum; i++) {
					if (config.nowPage == i) {
						pages.append($('<span class="page-num on" index=' + i + '>' + i + '</span>'));
					} else {
						pages.append($('<span class="page-num" index=' + i + '>' + i + '</span>'));
					}
				}
			}else{
				
				if (config.nowPage >= 1 && config.nowPage <= 6) {//如果当前页数大于等与1并小于等与6（这里表示点击前6页的链接，都显示的是1到10页的链接）
						for (var  i = 1; i <= 10; i++) {
							if (config.nowPage == i) {
								pages.append($('<span class="page-num on" index=' + i + '>' + i + '</span>'));
							} else {
								pages.append($('<span class="page-num" index=' + i + '>' + i + '</span>'));
							}
						}
					}
					if (config.nowPage > 6 && config.nowPage <= config.pageNum - 4) {//如果当前页数大于6，并且小于等与总页数；则循环显示当前页-5，到当前页+5的链接
						for (var i = config.nowPage - 5; i < config.nowPage + 5; i++) {
							if (config.nowPage == i) {
								pages.append($('<span class="page-num on" index=' + i + '>' + i + '</span>'));
							} else {
								pages.append($('<span class="page-num" index=' + i + '>' + i + '</span>'));
							}
						}
					}
					if (config.nowPage > config.pageNum - 4 && config.nowPage <= config.pageNum) {//如果当前页大于总页数-4，并且小于总页数（意思就是点击最末尾的四个链接，就显示最后十个链接）
						for (var i = config.pageNum - 9; i <= config.pageNum; i++) {
							if (config.nowPage == i) {
								pages.append($('<span class="page-num on" index=' + i + '>' + i + '</span>'));
							} else {
								pages.append($('<span class="page-num" index=' + i + '>' + i + '</span>'));
							}
						}
					}
				
			}
			
//			for (var i = 1; i <= config.pageNum; i++) {
//				if (config.nowPage == i) {
//					pages.append($('<span class="page-num on" index=' + i + '>' + i + '</span>'));
//				} else {
//					pages.append($('<span class="page-num" index=' + i + '>' + i + '</span>'));
//				}
//			}
			pages.children().click(function() {
				var obj = $(this);
				_this.pageNums(obj);
			});
			pageNumWrap.append(pages);
		}

		if (config.nextPage) {
			var nextPage = $('<span class="nextPage">></span>');
			nextPage.click(function() {
				_this.nextPage();
			});
			pageNumWrap.append(nextPage);
		}

		if (config.tailPage) {
			var tailPage = $('<span class="tailPage">>></span>');
			tailPage.click(function() {
				_this.tailPage();
			});
			pageNumWrap.append(tailPage);
		}

		pageBox.append(pageNumWrap);

		if (config.jumpPage) {
			var jumpPage = $('<span class="jumpPage">到第<input class="jumpVal" type="text" />页<span class="confirm">确定</span></span>');
			jumpPage.children('.confirm').click(function() {
				
				var jumpNum = parseInt($(this).siblings('.jumpVal').val());
				
				_this.jumpPage(jumpNum);
			});
			pageBox.append(jumpPage);
		}
		//console.log(pageNumWrap);
		pageBox.addClass('page-box');
	},
	lastPage: function() {
		var _this = this,
			pageBox = _this.obj,
			nowPage = _this.nowPage;
		if (nowPage > 1) {
			var nowNode = pageBox.find('.pageNums').children('.on');

			var lastNode = nowNode.prev('.page-num');
			nowNode.removeClass('on');
			lastNode.addClass('on');

			this.nowPage--;
			this.callBack();
		}
		
	},
	nextPage: function() {

		var _this = this,
			pageBox = _this.obj,
			nowPage = _this.nowPage,
			pageNum = _this.pageNum;

		if (nowPage < pageNum) {

			var nowNode = pageBox.find('.pageNums').children('.on');

			var nextNode = nowNode.next('.page-num');
			nowNode.removeClass('on');
			nextNode.addClass('on');

			this.nowPage++;

			this.callBack();
		}

	},
	pageNums: function(obj) {

		var nowPage = parseInt(obj.attr('index'));

		obj.siblings().removeClass('on');
		obj.addClass('on');
		this.nowPage = nowPage;
		this.callBack();
	},
	firstPage: function() {
		var _this = this,
			pageBox = _this.obj;
		pageBox.find('.pageNums').children().removeClass('on');
		pageBox.find('.pageNums').children().first().addClass('on');
		this.nowPage = 1;
		this.callBack();
	},
	tailPage: function() {
		var _this = this,
			pageBox = _this.obj;
		pageBox.find('.pageNums').children().removeClass('on');
		pageBox.find('.pageNums').children().last().addClass('on');
		this.nowPage = this.pageNum;
		this.callBack();
	},
	jumpPage: function(jumpNum) {
		
		var _this = this,
			pageNum = _this.pageNum,
			pageBox = _this.obj;
		var objArr = pageBox.find('.pageNums').children('.page-num');
		
		if (jumpNum <= pageNum && jumpNum > 0) {
			objArr.each(function() {
				var index = parseInt($(this).attr('index'));
				//console.log(index);
				if (index == jumpNum) {
					objArr.removeClass('on');
					$(this).addClass('on');

					return false;
				}
			});
			this.nowPage = jumpNum;
			
			this.callBack();
		}
	}
}