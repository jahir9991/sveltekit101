<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	let cursor ;
		// let cursorScale = document.querySelectorAll('.cursor-scale');
		let mouseX = 0,
		mouseY = 0;

       const  mm=(e)=>{
        mouseX = e.clientX;
		mouseY = e.clientY;
        }
	
	const init = () => {
		gsap.to({}, 0.01, {
			repeat: -1,

			onRepeat:  ()=> {
				gsap.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY
					}
				});
			}
		});

		
	};

	onMount(init);

    const onmouseleave=()=>{
        isGrow=false;
                
    }

    const onmousemove=()=>{
        isGrow=true;

    }

    let isGrow=false;

</script>

<div on:mousemove={mm}>


<div class="cursor " class:grow={isGrow} bind:this="{cursor}" />

<section class="hero-text">
	<div class="hero-text-content">
		<h1  class="cursor-scale" on:mouseleave={onmouseleave} on:mousemove={onmousemove}>GSAP Cursor</h1>
		<h2 class="cursor-scale " on:mouseleave={onmouseleave} on:mousemove={onmousemove}>Animation</h2>
	</div>
</section>
</div>

<style lang="postcss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style-type: none;
	}

	.hero-text {
		height: 100vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #000;
	}
	.hero-text h1 {
		font-size: 8vw;
		line-height: 1;
		font-weight: 700;
		background-color: #f4d03f;
		background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);
		-webkit-background-clip: text;
		color: transparent;
	}
	.hero-text h2 {
		font-size: 5vw;
		color: #fff;
		display: inline-flex;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0 60px;
		color: #16a085;
	}
	.footer-wrapper {
		padding: 40px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer-nav {
		display: flex;
		align-items: center;
	}
	.footer-nav li + li {
		margin-left: 16px;
	}
	.footer-nav li a {
		color: #16a085;
		font-size: 18px;
	}

	.cursor {
		position: fixed;
		width: 8px;
		height: 8px;
		margin-left: -20px;
		margin-top: -20px;
		border-radius: 50%;
		background: #ffd803;
		transition: transform 0.3s ease;
		transform-origin: center center;
		pointer-events: none;
		z-index: 1000;
	}

	.grow,
	.grow-small {
		transform: scale(15);
		background: #fff;
		mix-blend-mode: difference;
		border: none;
		border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
		overflow: hidden;
		animation: morph 3s linear infinite;
	}

	@keyframes morph {
		0%,
		100% {
			border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
		}
		34% {
			border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
		}
		67% {
			border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
		}
	}

	.grow-small {
		transform: scale(10);
	}
</style>
