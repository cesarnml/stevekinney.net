<script lang="ts">
	import Link from '$lib/components/link.svelte';
	export let href: string;
</script>

<Link
	{href}
	{...$$restProps}
	class="font-normal underline-offset-4 hover:text-black hover:underline dark:hover:bg-primary-900"
	active="font-bold underline bg-primary-200 dark:bg-primary-800 hover:bg-primary-300 dark:hover:text-primary-50 dark:decoration-primary-600"
	exact
>
	<slot />
</Link>
