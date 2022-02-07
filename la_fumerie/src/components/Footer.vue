<template>
	<footer>
		<div class="about">
			<a
				href="https://www.google.fr/search?q=la+fumerie&sxsrf=AOaemvJQMKBjH2rCfjPTiyqlIpYAlkUSsg%3A1637705437232&source=hp&ei=3WadYeC5C5HYaJrInOgB&iflsig=ALs-wAMAAAAAYZ107fr747GtJ7NruWEOL9bFd7o9bo-y&ved=0ahUKEwignNKWwK_0AhURLBoKHRokBx0Q4dUDCAc&uact=5&oq=la+fumerie&gs_lcp=Cgdnd3Mtd2l6EAMyEAguEIAEEIcCEMcBEK8BEBQyCwguEIAEEMcBEK8BMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATILCC4QgAQQxwEQrwE6BwgjEOoCECc6BwguEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBEKMCOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQsQMQgwE6CgguEMcBEKMCECc6CggAEIAEEIcCEBQ6CAgAEIAEELEDOgUILhCABDoICC4QgAQQsQM6BwgAEIAEEAo6CgguEMcBEK8BEA06BAgAEA06BwguEIAEEApKBQg8EgEyUM8HWLI1YIY6aANwAHgAgAF2iAH9CJIBAzguNJgBAKABAbABCg&sclient=gws-wiz#lrd=0x12b6afa788015555:0xa8f41e13f27ed302,1,,,"
				target="_blank"
			>
				<div class="about-child">
					<p>Laisse-nous ton avis</p>
					<img class="logo-google" src="../assets/google-icon-logo.png" /></div
			></a>
		</div>
		<a href="https://www.malt.fr/profile/maximelayet" target="_blank"
			><div class="about-me"><p>Réaliser avec amour par Maxime</p></div></a
		>
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
	margin-top: 2rem;
	border-top: 8px solid #fff;
}

a {
	text-decoration: none;
	color: #fff;
}

p {
	transition: 0.3s;
	font-size: 1.5rem;
}

p:hover {
	transform: scale(1.4);
	cursor: pointer;
	transition: 0.3s;
}

.logo-google {
	width: 2%;
}

.mentions {
	padding: 2rem;
	margin-left: auto;
	transition: 0.6s;
	color: #000;
}
</style>
