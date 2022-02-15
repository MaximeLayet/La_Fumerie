<template>
	<div>
		<Header />
		<h1>Choisis ta ville</h1>
		<main class="choice">
			<div id="mtp" class="city">
				<p id="mtp-responsive">Montpellier</p>
			</div>
			<div id="gre" class="city">
				<p id="gre-responsive">Grenoble</p>
			</div>
		</main>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
	components: {
		Header
	}
};
</script>

<style lang="scss" scoped>
$font-color1: #f1f1f1;
$font-color2: #0d0d0d;

h1 {
	text-transform: uppercase;
	font-size: 3em;
	letter-spacing: 0.3em;
	color: $font-color1;
}

.choice {
	display: flex;
	justify-content: space-around;
	padding-top: 2rem;
	padding-bottom: 4rem;

	.city {
		border-radius: 50%;
		width: 20rem;
		height: 20rem;
		cursor: url(../assets/beermug.png), pointer;
		p {
			font-size: 2em;
			text-transform: uppercase;
			font-style: italic;
			font-weight: bold;
			padding: 2rem;
			color: $font-color2;
			text-shadow: 1px 1px $font-color1;
		}
	}
}

#mtp {
	background: url(../assets/villemtp.jpg);
	background-size: cover;
	object-fit: cover;
}

#gre {
	background: url(../assets/villegre.jpg);
	background-size: cover;
	object-fit: cover;
}

a {
	text-decoration: none;
}

@media screen and (max-width: 320px) {
	.choice {
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
		padding-bottom: 0;

		.city {
			display: flex;
			margin-bottom: 2rem;
			p {
				padding: 0.5rem;
				text-shadow: none;
				border: 5px solid $font-color1;
				width: 75%;
				margin: 0 auto;
			}
		}
	}

	#mtp-responsive {
		background: url(../assets/villemtp.jpg);
		background-size: cover;
		object-fit: cover;
	}

	#gre-responsive {
		background: url(../assets/villegre.jpg);
		background-size: cover;
		object-fit: cover;
	}

	#mtp {
		background: none;
	}

	#gre {
		background: none;
	}
}
</style>
