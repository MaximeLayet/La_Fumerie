d
<template>
	<Header />
	<div class="first-block">
		<div class="info">
			<h2>Happy Hour</h2>
			<h3>18h - 21h</h3>
		</div>
		<div class="about">
			<h1>8 rue de l'Aguillerie<br />Montpellier</h1>
		</div>
	</div>
	<div class="main">
		<div class="circle">
			<p>Instagram</p>
		</div>
		<div class="circle">
			<p>Facebook</p>
		</div>
		<div class="circle">
			<p class="google">Mon Avis Google</p>
		</div>
		<div class="circle">
			<p>Mini-Map</p>
		</div>
	</div>
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
.first-block {
	display: grid;
	grid-template-columns: 50% 50%;
	margin-inline: 1.5vh;
	margin-bottom: 3vh;
}

.info {
	border-right: solid 0.75em #f2f2f2;
	border-top: solid 1.5rem #f2f2f2;
	border-left: solid 1.5rem #f2f2f2;
	border-bottom: solid 1.5rem #f2f2f2;
}

.about {
	border-left: solid 0.75em #f2f2f2;
	border-top: solid 1.5rem #f2f2f2;
	border-right: solid 1.5rem #f2f2f2;
	border-bottom: solid 1.5rem #f2f2f2;
	position: relative;
}

h1 {
	font-size: 1.7em;
	letter-spacing: 0.3em;
	line-height: 2.5em;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

h2 {
	font-size: 3em;
	letter-spacing: 0.3em;
}

h3 {
	font-size: 2em;
	letter-spacing: 0.1rem;
}

a {
	text-decoration: none;
	cursor: pointer;
}

.main {
	display: flex;
	justify-content: center;
}

.circle {
	margin-inline: 10vh;
	position: relative;
	width: 20vh;
	height: 20vh;
	border-radius: 50%;
	border: solid 2vh #fff;
}

p {
	position: absolute;
	top: 15%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 7vh;
	width: 40vh;
	font-weight: bold;
	background-color: #0d0d0d;
	color: #f2f2f2;
	padding: 0.5vh;
}

.google {
	font-size: 5vh;
	top: 25%;
}

.linkto:hover {
	box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px rgb(255, 255, 255),
		0 0 77px rgb(253, 253, 253), 0 0 100px rgb(255, 255, 255);
	text-shadow: 0 0 70px #000, 0 0 10px #000, 0 0 60px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0),
		0 0 100px rgb(0, 0, 0);
	transition: 0.3s;
}
</style>
