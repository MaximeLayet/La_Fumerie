d
<template>
	<Header />
	<div class="about">
		<h1>8 rue de l'Aguillerie<br />Montpellier</h1>
	</div>
	<div class="main">
		<div class="circle"></div>
		<div class="test"><p>Facebook</p></div>
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
h1 {
	font-size: 1.5em;
	padding-bottom: 5vh;
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
	position: relative;
	width: 20vh;
	height: 20vh;
	border-radius: 50%;
	border: solid 2vh #fff;
}

.test {
	position: absolute;
}

p {
	font-size: 375%;
	font-weight: bold;
	background-color: #0d0d0d;
	color: #f2f2f2;
	padding: 0.5vh;
}

.linkto:hover {
	box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px rgb(255, 255, 255),
		0 0 77px rgb(253, 253, 253), 0 0 100px rgb(255, 255, 255);
	text-shadow: 0 0 70px #000, 0 0 10px #000, 0 0 60px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0),
		0 0 100px rgb(0, 0, 0);
	transition: 0.3s;
}
</style>
