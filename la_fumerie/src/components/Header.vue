<template>
	<header>
		<img
			alt="La Fumerie vodka bar et bar à bière à Montpellier et Grenoble"
			src="../assets/logoF.png"
		/>
	</header>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style lang="scss" scoped>
img {
	margin-top: 1vh;
	margin-bottom: 3vh;
	width: 33%;
	filter: invert(1);
	object-fit: cover;
}

@media screen and (max-width: 320px) {
	img {
		width: 15rem;
	}
}
</style>
