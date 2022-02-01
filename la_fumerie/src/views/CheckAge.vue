<template>
	<Header />
	<main>
		<div class="question">As-tu plus de 18 ans ?</div>
		<div class="btn">
			<router-link to="/main"><button id="yes">OUI</button></router-link>
			<a href="http://www.google.fr"><button id="no">NON</button></a>
		</div>
	</main>
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
body {
	margin: 0px;
	min-height: 100%;
	width: 100%;
}

main {
	margin-bottom: 10em;
}

.question {
	padding-bottom: 1vh;
	margin-bottom: 1vh;
	font-size: 3vh;
	font-weight: bold;
	margin-top: 4vh;
	margin-bottom: 4vh;
}

.btn {
	display: flex;
	justify-content: space-around;
}

button {
	width: 5em;
	height: 5em;
	font-size: 25px;
	cursor: pointer;
	font-weight: bold;
	border-radius: 50%;
	border: 5px solid #0d0d0d;
	transition: 0.3s;
	position: relative;
}

button::after {
	content: " ";
	animation: pulse 1.5s infinite ease-out;
}

@keyframes pulse {
	to {
		transform: scale(1.5);
		opacity: 0;
	}
}

button:hover {
	filter: invert(1);
	transform: scale(1.5);
	transition: 0.3s;
}
</style>
