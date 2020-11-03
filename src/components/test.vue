<template>
</template>
<script>
export default {
  name: "notify",
  data() {
    return {
      iswork:true,
      notice:'nothing'
    }
  },
  watch:{
    notice(newval){
      this.$notify({
      title:'比赛通知',
      message:newval,
      duration:0
      })
    }
  },
  created() {
    this.intervalNotify()
  },
  methods: {
    intervalNotify() {
      let self=this
      var ajaxObj=new XMLHttpRequest()
      var url='http://jsonplaceholder.typicode.com/users'
      setInterval(()=>{ 
        if(this.iswork){
          console.log(this.notice)
        ajaxObj.open('get',url,true)
        ajaxObj.send()
        ajaxObj.onreadystatechange=function(){
        if(ajaxObj.readyState==4&&ajaxObj.status==200){
          var response=JSON.stringify(JSON.parse(ajaxObj.responseText)[1]['name']).replaceAll("\"", "")
          self.notice=response
          }}
        }
        },5000)
      }
  }
}
</script>