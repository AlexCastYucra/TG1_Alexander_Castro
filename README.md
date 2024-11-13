Primer sprint para entrega de Taller de Grado I

Crear un enviroment dentro de webapp con:

```
SECRET_OPENAI_API_KEY="sk-XXXXXXXXXXXXXXX"
PUBLIC_PROCESS_FILES_SERVER="http://127.0.0.1:5000"
```

Para ejecutar el proyecto

dentro de backend
inicar el entorno virtual

> py -3 -m venv .venv
> .venv\Scripts\activate

instalar las dependencias

> pip install Flask
> pip install Flask-CORS
> pip install chromadb

Ejecutar en Backend una ruta para el guardado de datos de chroma

> chroma run --path C:/Users/HP/ALEXANDER/chromad_path
> En un nuevo entorno virtual
> flask run

Dentro de webapp instalar

> npm install svelte
> npm install vite

Ejecutar webapp con

> npm run dev -- --open
