<template>
  <div class="find">
    <!-- 推荐歌单 -->
    <div>
      <p style="width:100%">推荐歌单</p>
      <hr>
      <div class="find-song-list">
        <div v-for="(item,idx) in info" :key="idx" class="song-list-box">
          <router-link :to="'/songlist/'+item.id">
            <span class="song-list-playC">{{parseInt(item.playCount/10000)+'万'}}</span>
            <img style="width:200px" :src='item.picUrl' alt="">
            <span class="song-list-title">{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'find',
  created(){
    this.getData()
  },
  data (){
    return{
      info: []
    }
  },
  methods:{
    getData:function(){
      this.axios.get('/personalized',{
        params:{
          limit:10
        }
      })
      .then(res=>{
        this.info = res.data.result
        // console.log(this.info)
      })
    }
  }
}
</script>

<style>
.find{
  float: left;
  width:78%;
  margin-left: 2%;
}
.find-song-list{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}
.song-list-box{
  width:200px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}
.song-list-box img{
  border-radius: 15px;
}
.song-list-title{
  font-size: 14px;
}
.song-list-playC{
  position: absolute;
  right: 5px;
  top:5px;
  color:white;
  font-size: 12px;
}
</style>