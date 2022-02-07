<template>
	<Header />
	<main>
		<div>
			<h1>Choisis ta ville</h1>
		</div>
		<div class="cities">
			<div class="montpellier">
				<router-link to="/Montpellier">
					<h2>Montpellier</h2>
					<img src="../assets/villemtp.jpg" alt="Montpellier" class="pic mtp" />
				</router-link>
			</div>
			<div class="grenoble">
				<router-link to="/Grenoble">
					<h2>Grenoble</h2>
					<img src="../assets/villegre.jpg" alt="Grenoble" class="pic gre" />
				</router-link>
			</div>
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

h1 {
	padding-bottom: 1rem;
	margin-bottom: 1rem;
	font-size: 7rem;
	font-weight: bold;
	margin-top: 4rem;
	margin-bottom: 4rem;
	color: #000;
	text-transform: uppercase;
}

.cities {
	display: flex;
	justify-content: space-around;
}

h2 {
	color: #fff;
	font-size: 4rem;
	cursor: pointer;
	transition: 0.3s ease-in-out;
}

h2:hover {
	transform: scale(1.4);
	transition: 0.3s ease-in-out;
}

.pic {
	width: 32em;
	height: 32em;
	border-radius: 50%;
	box-shadow: 0 0 15px #000;
	transition: 0.3s ease-in-out;
	object-fit: cover;
}

.pic:hover {
	transition: 0.3s ease-in-out;
	box-shadow: 0 0 15px 0 #fff;
}

a {
	text-decoration: none;
}
</style>
