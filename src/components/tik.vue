<template>
</template>
<script>
import axios from 'axios'
import storage from'good-storage'
export default {
    name:'tz',
    methods:{
        open(){
            this.$alert('内容','比赛通知',{
                confirmButtonText:'确定',
            })
        },
        getCon(){
            let self=this
            axios({
                method:'get',
                url:'http://jsonplaceholder.typicode.com/users'
            }).then(function(res){
                let tic=res.data[1]['username']
                tic=JSON.stringify(tic)
                console.log(tic)
                if(tic!=storage.get("loc",undefined)){
                    storage.set("loc",tic)
                    self.$alert(tic,'比赛通知',{
                    confirmButtonText:'确定',
                    })
                }
                setTimeout(()=>{
                    self.getCon()
                },5000)
            }).catch(res => {
            console.log('请求失败：'+res.status+','+res.statusText)
            })
        }
    },
    mounted(){
        storage.remove("loc")
        let self=this
        function getCon(){
            axios({
                method:'get',
                url:'http://jsonplaceholder.typicode.com/users'
            }).then(function(res){
                let tic=res.data[1]['username']
                tic=JSON.stringify(tic)
                console.log(tic)
                if(tic!=storage.get("loc",undefined)){
                    storage.set("loc",tic)
                    self.$alert(tic,'比赛通知',{
                    confirmButtonText:'确定',
                    })
                }
                setTimeout(()=>{
                    self.getCon()
                },5000);
            }).catch(res => {
            console.log('请求失败：'+res.status+','+res.statusText)
            })
        }
        getCon()
    }
}
</script>