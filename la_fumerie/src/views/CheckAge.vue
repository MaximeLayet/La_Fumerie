<template>
	<Header />
	<main>
		<div class="question">As-tu plus de 18 ans ?</div>
		<div class="btn">
			<button id="yes">OUI</button>
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

<style>
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
	margin-bottom: 25vh;
}

button {
	cursor: pointer;
	font-size: 2vh;
	font-weight: bold;

	border-radius: 50%;
	border: 5px solid #0d0d0d;
}

#yes {
	padding: 3vh 2.5vh;
}

#no {
	padding: 3vh 2vh;
}

button:hover {
	filter: invert(1);
}
</style>
