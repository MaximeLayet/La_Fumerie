d
<template>
	<Header />
	<div class="about">
		<h1>8 rue de l'Aguillerie<br />Montpellier</h1>
	</div>
	<a href="https://www.instagram.com/lafumerie_mtp/" target="_blank"
		><div class="linkto">
			<p>Instagram</p>
		</div></a
	>
	<a href="https://www.facebook.com/LaFumerieMtp" target="_blank">
		<div class="linkto"><p>Facebook</p></div>
	</a>
	<a
		href="https://www.google.fr/maps/place/La+Fumerie/@43.6103076,3.8754126,17z/data=!3m1!4b1!4m5!3m4!1s0x12b6afa788015555:0xa8f41e13f27ed302!8m2!3d43.6103037!4d3.8776013"
		target="_blank"
	>
		<div class="linkto"><p>Vers la mini map</p></div>
	</a>
	<a
		href="https://www.google.fr/maps/place/La+Fumerie/@43.6104184,3.8776378,3a,75y,153.52h,84.26t/data=!3m8!1e1!3m6!1sAF1QipNbKKObJF_ov7whyAgiw9o7RCV1kOMnLddpPfw8!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNbKKObJF_ov7whyAgiw9o7RCV1kOMnLddpPfw8%3Dw203-h100-k-no-pi-0-ya91.99999-ro-0-fo100!7i12014!8i6007!4m7!3m6!1s0x12b6afa788015555:0xa8f41e13f27ed302!8m2!3d43.6103037!4d3.8776013!14m1!1BCgIgARICCAI"
		target="_blank"
	>
		<div class="linkto"><p>Vers la visite virtuelle</p></div>
	</a>
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

a {
	text-decoration: none;
	color: #f2f2f2;
}

.linkto {
	background-color: #f2f2f2;
	cursor: pointer;
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
	color: #0d0d0d;
	font-weight: bold;
}
</style>
