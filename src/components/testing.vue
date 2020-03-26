<template>
	<div id="testing">
		<!--<button @click="che">ce</button>-->
		<alltarget></alltarget>
		<overproof></overproof>
	</div>
</template>

<script>
import alltarget from "./alltarget"
import overproof from "./overproof"
//import alltarget from "./components/alltarget"
export default {
	components:{
		alltarget,
		overproof
	},
  	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	    }
	},
  	mounted(){
//	    this.ce();
	},
	methods: {
//		http://10.204.131.19/f/api/fetchAllMonitorData
//	  	ce(){
//	  		console.log(this.$route.query.num,this.$route.query.id)
//	  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
