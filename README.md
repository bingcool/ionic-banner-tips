ionic-banner-tips
------
ionic-banner-tips是一个基于ionic,利用angularjs实现的app的banner小提示的组件功能，使用了gulp和sass的前端开发工具，当然在实际的使用中，我们只需要用到dist文件下的css和js文件即可。  
实现功能
------
### 固定的banner  
1、自适应实现文本(可以包含html代码)的的水平滚动显示，或者静态显示      
2、可以设置高度和样式主题，目前自定义7中       
3、简单的配置使用，基于服务组件         
3、手动设置关闭         
### 动态的banner  
1、设置定时显示     
2、设置文本(可以包含html代码)     
3、默认设置2中主题，info和error分别用于提示信息和错误          
4、手动设置关闭         
5、简单配置,基于服务组件     

用法
------
(1)首先引入js和css    
###
<link rel="stylesheet" type="text/css" href="path/ionic-banner-tips.css">    
<script type="text/javascript" src="path/ionic-banner-tips.js"></script>
###    
(2)在app的module包含依赖bing.ionic.content.banner       
###   
angular.module('starter',['ionic','bing.ionic.content.banner'],function() {					
})			
(3)固定的banner的用法     
首先的在控制器中依赖$ionicContentBanner     
###     
$ionicContentBanner.showstablebanner({
	text:'各位旅客您们好，欢迎您们来到广州！',
	type:'info',
});



