<script>
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
</script>

<!-- src/routes/+layout.svelte -->
<div class="bg-primary-dark text-neutral min-h-screen">
	<nav
		class="bg-primary text-neutral p-4 flex justify-center items-center space-x-6 shadow-lg rounded-b-lg"
	>
		<!-- Enlace con clase para activar hover, transición y estilo activo -->
		<a
			href="/sobre-mi"
			class="text-neutral hover:text-accent transition-colors duration-300 ease-in-out
              active:text-accent font-semibold px-4 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-accent
              hover:no-underline"
		>
			Sobre mí
		</a>
		<a
			href="/bot"
			class="text-neutral hover:text-accent transition-colors duration-300 ease-in-out
              active:text-accent font-semibold px-4 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-accent
              hover:no-underline"
		>
			Asesor
		</a>
		<a
			href="/"
			class="text-neutral hover:text-accent transition-colors duration-300 ease-in-out
              active:text-accent font-semibold px-4 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-accent
              hover:no-underline"
		>
			Documentos
		</a>
	</nav>
	<slot />
</div>
