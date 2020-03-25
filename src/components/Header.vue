<template>
  <header id="header">
    <div class="header-search">
        <form role="search" class="search-form">
        <input class="search-input" type="search" placeholder="搜索音乐，视频，歌词，电台"/>
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" alt="">
        </form>
    </div>
    <div class="header-login">
        <img style="width:20px;margin:0" src="../assets/user.png" alt="">
        <span style="color:rgb(243, 220, 220);font-size:14px">未登录</span>
    </div>
    <div class="header-set">
        <router-link to="/setting"><img src="../assets/设 置.png" alt=""></router-link>
    </div>
  </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style>
#header{
    height: 50px;
    display: flex;
    flex-direction: row;
    background-color: #da4436;
}
.header-search{
    display: flex;
    align-items: center;
    margin-left: 400px;
}
.search-form{
    width: 250px;
    border:1px solid hsla(0,0%,59.2%,.2);
    background-color: rgba(227,231,236,.1);
    align-items: center;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    height: 30px;
}
.search-form .search-input{
    width: 200px;
    padding-left: 10px;
    background-color: transparent;
    border-style: none;
    color: white;
}
.search-input::-webkit-input-placeholder{
    color:rgb(243, 220, 220);
}
.header-login{
    margin-left: 100px;
    display: flex;
    align-items: center;
}
.header-set{
    margin-left: 100px;
    display: flex;
    align-items: center;
}
</style>