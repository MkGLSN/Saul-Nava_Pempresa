var linkProjetos = [
	{
		linkProjeto: "img/histos.pdf",
		linkImg:
			"img/saul2.jpg",
		span: "2024 - Actual",
		title: "Desarrollo Personal",
		subTitle: "Negocios Internacionales",
		resumo:
		"Estudiar Negocios Internacionales en TecMilenio ha sido una de las decisiones más importantes y enriquecedoras de mi vida. Esta carrera no solo me ha permitido adquirir un profundo conocimiento sobre las dinámicas del comercio global, sino que también me ha dado las herramientas necesarias para desarrollarme en un mundo cada vez más interconectado. He aprendido a ver más allá de las fronteras y a entender cómo los mercados, las culturas y las economías se entrelazan de manera compleja pero fascinante.",
		like: 0
	},
	{
		linkProjeto: "https://mkglsn.github.io/GL-SN/",
		linkImg:
			"img/logos.png",
		span: "2024 - Actual",
		title: "Marketing",
		subTitle: "Emprendimiento",	
		resumo:
			"Este es uno de mis pryectos mas satisfactorios, en conjunto con mi amigo/socio Greco Sl, iniciamos una microempresa dedicada al desarrollo de marketing especializado en redes sociales, creacion de paginas web y programacion MOLBO, este de acuerdo a las necesidades del cliente, y esto a su vez tomando en cuenta el estudio y analicis que realizamos para poder tomar la mejor decicion, el desarrolo de mi marca Personal ah sido y sera una de mis prioridades,",
		like: 0
	},
	{
		linkProjeto: "https://codepen.io/denersonpinas/full/MWoEpGy",
		linkImg:
			"img/sperf.jpg",
		span: "2024 - Atual",
		title: "Projeto Calculadora",
		subTitle: "Front-end",
		resumo:
			"Projeto produziodo para conclusão de desafio proposto pelo grupo alura, em seu evento #imersaodev, o projeto tinha foco em inicialização de dev no mercado de programação e as linguagens propostas era HTML, CSS e JS com foco em JavaScrip. Este desafio tinha como objetivo mostrar a utilização de arrays e laço de repetiçao com JS.",
		like: 0
	}
];

function Projetos() {
	var elementProjetos = document.getElementById("projetos");
	var elemento = "";
	console.log(linkProjetos.length);

	for (let i = 0; i < linkProjetos.length; i++) {
		const projeto = linkProjetos[i];

		elemento += '<div class="container-projeto">';
		elemento += '<a href="' + projeto.linkProjeto + '" target="_blanck">';
		elemento += '<img src="' + projeto.linkImg + '" alt="' + projeto.title + '">';
		elemento += "<div>";
		elemento += "<span>" + projeto.span + "</span>";
		elemento += "<h1>" + projeto.title + "</h1>";
		elemento += "<h2>" + projeto.subTitle + "</h2>";
		elemento += "<p>" + projeto.resumo + "</p>";
		elemento += "</div>";
		elemento += "</a>";
		elemento += '<div class="like" onclick="like(' + i + ')">';
		elemento += '<i class="far fa-heart"></i>';
		elemento += '<p id="like' + i + '">' + projeto.like + "</p>";
		elemento += "</div>";
		elemento += "</div>";
	}

	elementProjetos.innerHTML = elemento;
}

function like(i) {
	document.getElementById("like" + i).innerHTML = linkProjetos[i].like += 1;
}

function mudaTema() {
	var elementButton = document.getElementById("clear");
	document.body.classList.toggle("clear");

	if (document.body.classList == "clear") {
		elementButton.innerHTML = "DARK MODE";
	} else {
		elementButton.innerHTML = "CLEAR MODE";
	}
}
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const seekbar = document.getElementById("seekbar");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "🎶";
  } else {
    audio.pause();
    playPauseBtn.textContent = "🎶";
  }
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekbar.value = progress;
});

seekbar.addEventListener("input", () => {
  const seekTo = (seekbar.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});
