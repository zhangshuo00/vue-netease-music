<template>
  <footer id="footerAudio">
        <!-- <audio ref="audio"
            controls="controls"
            src="http://m7.music.126.net/20200329222815/911b546673f84e92e71fc70e1487b48f/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
        ></audio> -->
        <aplayer :audio="audio" :lrcType="3" @pause="onPause"/>
  </footer>
</template>

<script>
export default {
    name:'footerAudio',
    data() {
        return{
            audio:{
                name:'达拉崩吧（live）',
                artist:'周深',
                url:'http://m701.music.126.net/20200329225758/f17fcf34ecc7bf33125b2b4fc97e13f7/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1941678831/94f7/c04c/95d7/50d273a01c63d1ed974eaeb6bd9bcbaf.mp3'
            }
        }
    },
    methods:{
        onPause(){
            this.$refs.aplayer.pause();
        }
    }
}
</script>

<style>
#footerAudio{
    
}
.aplayer .aplayer-lrc{
    height: 20px;
}
</style>