<template>
	<Header />
	<div class="slider">
		<button @click="prev" type="button" class="btn btn-left">
			<i class="fas fa-chevron-circle-left"></i>
		</button>
		<div
			class="container-slides"
			:style="{ transform: `translateX(${index}px)`, transition: `${transition}` }"
		>
			<img class="img-slider" src="../assets/Bas1.jpg" />
			<img class="img-slider" src="../assets/img1.jpg" />
			<img class="img-slider" src="../assets/img2.jpg" />
			<img class="img-slider" src="../assets/img3.jpg" />
			<img class="img-slider" src="../assets/img4.jpg" />
			<img class="img-slider" src="../assets/img5.jpg" />
			<img class="img-slider" src="../assets/img6.jpg" />
		</div>
		<button @click="next" type="button" class="btn btn-right">
			<i class="fas fa-chevron-circle-right"></i>
		</button>
	</div>
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
			<a href="https://www.instagram.com/lafumerie_mtp/" target="_blank">
				<p>Instagram</p>
			</a>
		</div>
		<div class="circle">
			<a href="https://www.facebook.com/LaFumerieMtp" target="_blank">
				<p>Facebook</p>
			</a>
		</div>
		<div class="circle">
			<a
				href="https://www.google.com/search?q=la+fumerie&sxsrf=APq-WBsHTlR6J9MPKPtj7P8MOJWdsfwDHA%3A1643278553290&source=hp&ei=2XDyYZ7uDsrwaMiMoNgG&iflsig=AHkkrS4AAAAAYfJ-6TlDvyPI9SKmZw0Y77O-YDtJTnje&ved=0ahUKEwjevrvT2dH1AhVKOBoKHUgGCGsQ4dUDCAc&uact=5&oq=la+fumerie&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgUIABCABDILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQ6CgguEMcBEKMCECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCjAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIAEELEDEIMBOg4ILhCABBCxAxDHARCjAjoECC4QJzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOgUILhCABDoICC4QgAQQsQM6BggAEAoQAzoLCC4QgAQQxwEQ0QM6BwgAEIAEEApQAFjYDGCVD2gAcAB4AIABjwGIAaYIkgEDNC42mAEAoAEB&sclient=gws-wiz#lrd=0x12b6afa788015555:0xa8f41e13f27ed302,1,,,"
				target="_blank"
			>
				<p class="google">Mon Avis Google</p>
			</a>
		</div>
		<div class="circle">
			<a href></a>
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
	},
	data: function () {
		return {
			index: 0,
			transition: "transform 2s ease"
		};
	},
	methods: {
		prev() {
			if (this.index === 0) {
				this.index = -1500;
				this.transition = "none";
			} else {
				this.index += 500;
				this.transition = "transform 2s ease";
			}
		},
		next() {
			if (this.index === -1500) {
				this.index = 0;
				this.transition = "none";
			} else {
				this.index -= 500;
				this.transition = "transform 2s ease";
			}
		}
	}
};
</script>

<style scoped>
.slider {
	width: 500px;
	height: 300px;
	margin: 100px auto 100px;
	overflow: hidden;
	position: relative;
}

.container-slides {
	display: flex;
}

.img-slider {
	width: 100%;
	height: auto;
}

.btn {
	outline: none;
	border: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: block;
	position: absolute;
	z-index: 1000;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background: transparent;
}

.fas {
	width: 15px;
}

.btn-left {
	top: 50%;
	left: 5px;
	transform: translateY(-50%);
}

.btn-right {
	top: 50%;
	right: 5px;
	transform: translateY(-50%);
}

body {
	margin: 0px;
	min-height: 100%;
	width: 100%;
}

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
}

h1 {
	font-size: 1.7em;
	letter-spacing: 0.3em;
	line-height: 2.5em;
	margin-top: 2rem;
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
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: solid 2vh #fff;
}

p {
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 7vh;
	width: 40vh;
	font-weight: bold;
	background-color: #0d0d0d;
	color: #f2f2f2;
	padding: 0.5vh;
	cursor: pointer;
}

.google {
	font-size: 5vh;
	top: 30%;
}

.linkto:hover {
	box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px rgb(255, 255, 255),
		0 0 77px rgb(253, 253, 253), 0 0 100px rgb(255, 255, 255);
	text-shadow: 0 0 70px #000, 0 0 10px #000, 0 0 60px rgb(0, 0, 0), 0 0 20px rgb(0, 0, 0),
		0 0 100px rgb(0, 0, 0);
	transition: 0.3s;
}
/* responsive  */

@media only screen and (max-width: 780px) {
	.first-block {
		display: flex;
		flex-direction: column;
		margin-inline: 1.5vh;
		margin-bottom: 3vh;
	}

	.info {
		border-right: solid 1.5em #f2f2f2;
	}

	.about {
		border-left: solid 1.5em #f2f2f2;
	}

	h1 {
		font-size: 1.7em;
		letter-spacing: 0.3em;
	}
}

@media only screen and (max-width: 1400px) {
	.main {
		flex-wrap: wrap;
	}

	.circle {
		margin: 2rem;
	}
}
</style>
