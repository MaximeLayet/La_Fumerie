d
<template>
	<Header />
	<div class="about">
		<h1>8 rue de l'Aguillerie<br />Montpellier</h1>
	</div>
	<div class="linkto"><p>Instagram</p></div>
	<div class="linkto"><p>Facebook</p></div>
	<div class="linkto"><p>Vers la mini map</p></div>
	<div class="linkto"><p>Vers la visite virtuelle</p></div>
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Header,
		Footer
	}
};
</script>

<style scoped>
h1 {
	font-size: 1.5em;
}

.linkto {
	background-color: #fff;
	opacity: 0.7;
	margin: 2vh;
	margin-left: auto;
	margin-right: auto;
	width: 20%;
	height: 100%;
	padding: 30px;
}

.linkto:hover {
	opacity: 1;
}

p {
	color: #000;
	font-weight: bold;
}
</style>
