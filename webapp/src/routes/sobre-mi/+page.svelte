<!-- <script>
	import { onMount } from 'svelte';

	let aboutData = {
		name: 'Jazz',
		title: 'Asesor Legal Especialista en Derecho Laboral',
		description: `
			Soy un modelo generativo de lenguaje con conocimiento en el campo del derecho laboral, condiciones de trabajo y contratos laborales. 
			Mi misión es ayudarte a resolver tus inquietudes legales y ofrecerte un servicio de acuerdo al contexto que me proporciones.`,
		services: [
			'Consultas sobre derechos laborales',
			'Asesoría en contratos de trabajo',
			'Defensa ante despidos injustificados',
			'Condiciones de trabajo'
		],
		image: '/images/about-me.jpg' // Ruta a una imagen representativa
	};

	onMount(() => {
		// Puedes agregar aquí lógica adicional, como animaciones o cargar datos dinámicos
	});
</script>

<div class="bg-primary-dark text-neutral min-h-screen p-8">
	<div class="max-w-4xl mx-auto bg-primary-light rounded-lg shadow-lg p-6">
		<div class="flex flex-col md:flex-row items-center md:items-start">
			<img
				src={aboutData.image}
				alt={aboutData.name}
				class="w-48 h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6 border-4 border-accent"
			/>
			<div>
				<h1 class="text-3xl font-bold text-accent">{aboutData.name}</h1>
				<h2 class="text-xl font-semibold text-neutral-light mt-2">{aboutData.title}</h2>
			</div>
		</div>

		<p class="mt-6 text-lg leading-relaxed">{aboutData.description}</p>

		<div class="mt-8">
			<h3 class="text-2xl font-semibold text-accent mb-4">¿Como puedo ayudarte?</h3>
			<ul class="space-y-2">
				{#each aboutData.services as service}
					<li class="flex items-center space-x-2">
						<span class="text-accent text-xl">✔</span>
						<span class="text-lg">{service}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
 -->

<script>
	import { PUBLIC_CHATBOT_NAME } from '$env/static/public'; // Por si tienes un nombre dinámico
</script>

<section class="bg-background-default text-neutral py-10 px-6 sm:px-20">
	<div class="max-w-4xl mx-auto text-center">
		<h1 class="text-4xl font-bold mb-6">🤖 Quién soy?</h1>
		<p class="text-lg text-accent-light leading-relaxed">
			Bienvenido a la página de presentación de <strong>{PUBLIC_CHATBOT_NAME || 'DocsBot'}</strong>,
			el asesor legal diseñado para guiarte en cuestiones laborales. Con conocimiento actualizado en
			normativas legales, estoy aquí para ofrecerte:
		</p>
	</div>
	<div class="max-w-4xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 text-left">
		<div class="bg-primary-contrast p-6 rounded-lg shadow-md">
			<h2 class="text-2xl text-primary-light font-semibold mb-4">📜 Conocimientos legales</h2>
			<p class="text-text-secondary">
				Estoy preparado para resolver dudas sobre contratos, derechos laborales, despidos, y más. Mi
				base de datos incluye información actualizada y relevante del ámbito jurídico.
			</p>
		</div>
		<div class="bg-primary-contrast p-6 rounded-lg shadow-md">
			<h2 class="text-2xl text-primary-light font-semibold mb-4">💡 Soluciones prácticas</h2>
			<p class="text-text-secondary">
				Ofrezco recomendaciones adaptadas a tus necesidades, ayudándote a tomar decisiones
				informadas en el ámbito laboral.
			</p>
		</div>
		<div class="bg-primary-contrast p-6 rounded-lg shadow-md">
			<h2 class="text-2xl text-primary-light font-semibold mb-4">🔍 Asesoría personalizada</h2>
			<p class="text-text-secondary">
				Mi función es comprender tus consultas y proporcionar respuestas específicas para cada
				situación que enfrentes.
			</p>
		</div>
		<div class="bg-primary-contrast p-6 rounded-lg shadow-md">
			<h2 class="text-2xl text-primary-light font-semibold mb-4">🌍 Disponibilidad</h2>
			<p class="text-text-secondary">
				Siempre disponible para ayudarte, sin importar el día o la hora. Todo a tu disposición de
				manera inmediata.
			</p>
		</div>
	</div>
</section>
