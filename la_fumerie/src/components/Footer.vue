<template>
	<footer>
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
.mentions {
	padding: 2vh;
}
</style>
