<script lang="ts">
	import { FileDropzone, ProgressBar } from '@skeletonlabs/skeleton';
	import { PUBLIC_PROCESS_FILES_SERVER } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { PUBLIC_CHATBOT_NAME } from '$env/static/public';

	let files: FileList;
	let processing = false;
	let error = false;

	function onChangeHandler(e: Event): void {
		files = files;
	}

	async function startProcessing(event: Event) {
		processing = true;
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);
		const response = await fetch(`${PUBLIC_PROCESS_FILES_SERVER}/process`, {
			method: 'POST',
			body: data
		});
		let result = await response.json();
		if (result && result.success) {
			goto('/bot');
		} else {
			error = true;
		}
	}
</script>

<div class="dark flex justify-center items-center p-4 bg-background-default text-neutral-light">
	<div class="m-11 card h-full w-3/4 bg-background-surface text-neutral-light">
		<div class="p-4 md:p-10">
			<h1 class="text-primary-accent"><strong>Carga de informacion</strong></h1>
			<h3 class="mt-6 text-accent-light">Documentos en formato markdown:</h3>
			<form method="POST" on:submit|preventDefault={startProcessing} class="w-full">
				<div class="flex flex-col justify-center items-center">
					<FileDropzone name="documents" multiple bind:files on:change={onChangeHandler} />
					{#if files}
						<ol class="list w-full">
							{#each Array.from(files) as document, i}
								<li class="text-neutral-light">
									<span class="badge-icon p-4 variant-soft-primary">{i + 1}</span>
									<span class="text-xl">{document.name}</span>
								</li>
							{/each}
						</ol>
						<button
							class="w-2/4 btn variant-filled-secondary btn-lg mt-4 bg-accent-dark hover:bg-accent text-neutral-light"
							disabled={processing}
						>
							Empezar
						</button>
					{/if}
				</div>
			</form>
			{#if processing}
				<div class="p-8">
					<p class="text-accent">Vectorizando la informacion...</p>
					<ProgressBar height="h-3" meter="bg-warning-500" />
				</div>
				-
			{/if}
			{#if error}
				<aside class="alert variant-filled-error">
					<div>🚨</div>
					<div class="alert-message">
						<h3>Parece que ocurrio al procesar los documentos</h3>
					</div>
				</aside>
			{/if}
		</div>
	</div>
</div>
