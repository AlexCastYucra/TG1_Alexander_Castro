const config = {
	darkMode: 'media', // Activa el modo oscuro según las preferencias del sistema
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				// Colores de tema oscuro
				primary: {
					DEFAULT: '#2F4F4F', // Gris oscuro principal
					light: '#4F6A6A', // Gris más claro
					dark: '#1E3838', // Gris más oscuro
					accent: '#D3E0E0' // Contraste en temas oscuros
				},
				accent: {
					DEFAULT: '#A3C1AD', // Verde suave
					light: '#C8E0D4', // Verde más claro para hover o fondos
					dark: '#718D7D' // Verde más oscuro para bordes o detalles
				},
				neutral: {
					DEFAULT: '#FFFFFF', // Blanco principal
					light: '#F0F0F0', // Gris claro para fondos
					dark: '#B0B0B0', // Gris medio para detalles
					deep: '#D9D9D9' // Para componentes secundarios o fondos
				},
				text: {
					DEFAULT: '#333333', // Texto principal en gris oscuro
					secondary: '#555555', // Texto secundario
					muted: '#777777', // Texto poco resaltado o deshabilitado
					inverted: '#FFFFFF' // Texto sobre fondo oscuro
				},
				button: {
					primary: '#A3C1AD', // Botón primario
					secondary: '#4F6A6A', // Botón secundario
					accent: '#8FBC94', // Botón de acción (verde acentuado)
					hover: '#718D7D', // Color de hover para botones
					disabled: '#CCCCCC' // Botón deshabilitado
				},
				alert: {
					error: '#D9534F', // Rojo para alertas de error
					warning: '#F0AD4E', // Naranja para advertencias
					success: '#5CB85C', // Verde para confirmaciones
					info: '#5BC0DE' // Azul para información
				},
				background: {
					default: '#1E3838', // Fondo general en modo oscuro
					surface: '#2F4F4F', // Fondo para tarjetas o componentes
					highlight: '#3F5F5F' // Fondo para secciones destacadas
				},
				shadow: {
					light: 'rgba(0, 0, 0, 0.1)', // Sombra suave
					medium: 'rgba(0, 0, 0, 0.2)', // Sombra media
					dark: 'rgba(0, 0, 0, 0.3)' // Sombra oscura
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};

module.exports = config;
