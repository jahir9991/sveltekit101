<script>
	export let dotLoader = true;
</script>

<span class="inline-block">
	<svg width="233" height="72" viewBox="0 0 233 72" fill="none" xmlns="http://www.w3.org/2000/svg">
		<defs xmlns="http://www.w3.org/2000/svg">
			<linearGradient id="myGradient">
				<stop offset="0" stop-color="#ff40f8" />
				<stop offset=".5" stop-color="#fb3d8f" />
				<stop offset="1" stop-color="#ff684b" />
			</linearGradient>
		</defs>
		<path
			d="M204.551 72L189.544 50.9841L174.69 72H163L183.542 43.7941L164.108 16.6898H175.718L189.857 36.3638L203.843 16.6898H214.979L195.619 43.3936L216.394 71.9933L204.551 72Z"
			fill="#231f20"
		/>
		<path
			d="M104 44.0099C104 27.9075 116.199 16 132.734 16C149.268 16 161.474 27.8352 161.474 44.0099C161.474 60.1846 149.274 72 132.714 72C116.154 72 104 60.1188 104 44.0099ZM151.484 44.0099C151.484 32.8848 143.484 24.8698 132.734 24.8698C121.983 24.8698 113.984 32.8848 113.984 44.0099C113.984 55.1349 121.99 63.1499 132.714 63.1499C143.439 63.1499 151.484 55.1349 151.484 44.0099Z"
			fill="#231f20"
		/>
		<path
			d="M42 44.0099C42 27.9075 54.4532 16 71.3315 16C88.2097 16 100.663 27.8352 100.663 44.0099C100.663 60.1846 88.2163 72 71.3315 72C54.4466 72 42 60.1188 42 44.0099ZM90.4715 44.0099C90.4715 32.8848 82.3053 24.8698 71.3315 24.8698C60.3576 24.8698 52.1914 32.8848 52.1914 44.0099C52.1914 55.1349 60.3774 63.1499 71.3315 63.1499C82.2856 63.1499 90.4715 55.1349 90.4715 44.0099Z"
			fill="#231f20"
		/>

		<path d="M0 16H10.3982V63.2109H39.6794V72H0V16Z" fill="#231f20" />

		<circle cx="220" cy="6" r="10" fill="url('#myGradient')">
			<animate
				attributeName="opacity"
				dur="1s"
				values="0;1;0"
				repeatCount="indefinite"
				begin="0.1"
			/>
		</circle>

		{#if dotLoader}
			<circle stroke="none" cx="71" cy="44" r="20" fill="url('#myGradient')">
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.1"
				/>
			</circle>

			<circle stroke="none" cx="133" cy="44" r="20" fill="url('#myGradient')">
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.2"
				/></circle
			>
		{/if}
	</svg>

</span>

<style>
	/* img { */
	svg {
		margin: 0 auto;
		height: 80px;
		width: 120px;
		opacity: .4;
	}
	.cls-2 {
		fill: url(#linear-gradient);
	}
	.cls-2 {
		fill: url(#linear-gradient);
	}
</style>
