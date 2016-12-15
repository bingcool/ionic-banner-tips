ionic-banner-tips
------
ionic-banner-tips是一个基于ionic,利用angularjs实现的app的banner小提示的组件功能，使用了gulp和sass的前端开发工具，当然在实际的使用中，我们只需要用到dist文件下的css和js文件即可。  
实现功能
------
### 固定的banner  
1、自适应实现文本(可以包含html代码)的的水平滚动显示，或者静态显示      
2、可以设置高度和样式主题，目前自定义7种       
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
```
<link rel="stylesheet" type="text/css" href="path/ionic-banner-tips.css">    
<script type="text/javascript" src="path/ionic-banner-tips.js"></script>
```  
(2)在app的module包含依赖bing.ionic.content.banner       
```   
angular.module('starter',['ionic','bing.ionic.content.banner'],function() {					
})
```			
(3)固定的banner的用法     
首先的在控制器中依赖$ionicContentBanner     
```   
$ionicContentBanner.showstablebanner({     
		text:'各位旅客您们好，欢迎您们来到广州！',     
		type:'info',    
});   
```
可配置值：    
icon: 'ion-close-circled', //关闭banner的图标        
text: null,                //显示的文本内容,可以包含html         
type: 'info',			   //显示的主题类型，可选'info','warning','error'          
left:200,				   //文本距离左边的距离,默认200px         
height:30,				   //banner的高度,默认30px            
delegateHandle:null,       //ion-content的delegate-handle,默认为null,可以设置    
下面是一个demo：    
![banner](/test/img/banner1.gif "banner")    
(4)动态的banner的用法
比如下拉刷新数据时   
```
 $scope.refreshItems = function() {

	$ionicContentBanner.showstablebanner({     
			icon: 'ion-ios-close-empty',
	        transition: 'vertical', 
	        autoClose: 3000,          
	        type: 'info',     
	        $deregisterBackButton: angular.noop,     
	        closeOnStateChange: true,            
	        delegateHandle:null          
	});    
}       
```   
可配置值：     
icon: 'ion-ios-close-empty',//关闭banner的图标     
transition: 'vertical',//banner出现的动画,可选'vertical','fade'     
autoClose: 3000,//显示多少毫秒自动消失,默认3000ms,即3s                
type: 'info',//显示的类型,可选'info','error'           
$deregisterBackButton: angular.noop,           
closeOnStateChange: true,//设置状态改变的时候，是否关闭banner             
delegateHandle:null//ion-content的delegate-handle,默认为null,可以设置               
下面是一个demo：           
![banner](/test/img/banner2.gif "banner")             




