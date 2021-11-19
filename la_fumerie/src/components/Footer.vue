<template>
	<footer>
		<div class="about">
			<div class="about-child"><p>Contacts</p></div>
			<div class="about-child"><p>Qui a fait le site</p></div>
			<div class="about-child"><p>Laisse-nous ton avis</p></div>
		</div>
		<div class="mentions">&copy; {{ copyrightYear }}</div>
	</footer>
</template>

<script>
export default {
	data() {
		const copyrightYear = new Date().getFullYear();
		return {
			copyrightYear
		};
	}
};
</script>

<style scoped>
footer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-top: 2vh;
	border-top: 2px solid #fff;
}

.about {
	display: flex;
	justify-content: space-around;
}

.about-child:hover {
	transform: scale(1.2);
	cursor: pointer;
	transition: 0.3s;
}

.mentions {
	padding: 2vh;
	margin-left: auto;
	cursor: pointer;
	transition: 0.6s;
}
</style>
