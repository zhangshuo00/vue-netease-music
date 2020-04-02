<template>
  <div id="songListDetail">
      <div class="list-detail-head" v-if="playlist">
          <img :src="playlist.coverImgUrl" class="list-coverImg">
          <div class="list-title">
              <div style="display:flex">
                <img src="../assets/这是一个歌单.png" style="width:40px;height:40px">
                <div style="height:40px;font-size:22px">{{playlist.name}}</div>
              </div>
              <div>
                <img :src="playlist.creator.avatarUrl" style="width:20px;height:20px">
                <span>{{playlist.creator.nickname}}</span>
                <span>{{this.createTime}}</span>
              </div>
          </div>
      </div>
      <div class="list-content">
          <div class="list-content-head">
              <ul style="display:flex">
                  <li>歌曲列表</li>
                  <li>评论（{{playlist.commentCount}}）</li>
                  <li>收藏者</li>
              </ul>
          </div>
          <div class="list-content-section">
              <table>
                  <tr>
                      <td></td>
                      <td>操作</td>
                      <td>音乐标题</td>
                      <td>歌手</td>
                      <td>专辑</td>
                      <td>时长</td>
                  </tr>
                  <tr v-for="(item,idx) in playlist.tracks" :key="item.id">
                      <td>{{(idx+1)<10 ? '0'+(idx+1):idx+1}}</td>
                      <td></td>
                      <td>{{item.name}}</td>
                      <td>{{item.ar[0].name}}</td>
                      <td>{{item.al.name}}</td>
                  </tr>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'songListDetail',
    created(){
        this.getData()
    },
    data(){
        return {
            playlist:[],
            createTime:''
        }
    },
    methods:{
        getData:function(){
            // 获取此歌单的数据
            this.axios.get('/playlist/detail',{
                params:{id:this.$route.params.id}
            }).then(res=>{
                this.playlist = res.data.playlist
                console.log(this.playlist)
                let time =new Date(res.data.playlist.createTime);
                let year = time.getFullYear()
                let month = time.getMonth()+1
                let date = time.getDate()
                this.createTime = year+'-'+(month<10?'0'+month:month)+'-'+(date<10?'0'+date:date)
            })
        }
    }
}
</script>

<style>
#songListDetail{
    width: 84%;
    margin-left: 2%;
    margin-top: 2%;
    overflow-y: scroll;
}
.list-detail-head{
    display: flex;
}
.list-coverImg{
    width: 200px;
    border-radius: 10%;
}
.list-title{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
}
.list-content{
    margin-top: 50px;
}
.list-content-head ul li{
    padding-right: 30px;
}
table{
    width: 100%;
}
table tr td{
    padding-left: 10px;
    font-size: 14px;
    height: 35px;
}
table tr:nth-child(odd){
    background: #fafafa;
}
</style>