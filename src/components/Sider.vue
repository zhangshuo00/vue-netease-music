<template>
	<!-- <div id="siderNav"> -->
		<aside id="siderNav">
			<ul>
				<li><router-link to="/" exact><img src="../assets/wangyiyunyinle.png"/>发现音乐</router-link></li>
				<li><router-link to="/fm" exact><img src="../assets/FM.png"/>私人FM</router-link></li>
				<li><router-link to="/viedo" exact><img src="../assets/photo_viedo.png"/>视频</router-link></li>
				<li><router-link to="/friends" exact><img src="../assets/user-group.png"/>朋友</router-link></li>
			</ul>
		</aside>
	<!-- </div> -->
</template>

<script>
export default {
	name:'siderNav'
}
</script>

<style>
#siderNav{
	width:14%;
	background-color: #e6e6e6;
}
img{
	width: 20px;
	margin-right: 10px;
}
ul{
	padding-left: 30px;
}
ul li{
	font-size: 14px;
	list-style: none;
	margin-bottom: 12px;
	cursor: pointer;
}
a{
	text-decoration: none;
	color: black;
}
.router-link-active{
	color: #da4436
}
</style>