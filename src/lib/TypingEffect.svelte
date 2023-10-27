<script lang="ts">
    export let  text: string;
    export let  tailwind: string;
    export let  textAnim: string;
    export let  textdelay: number;
    export let  style: string;

    import { onMount, onDestroy } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    let displayText: string[] = [];
  
    let currentIndex = 0;
    let timer: number;
  
    onMount(() => {
        displayText = [];
  
      const typeNextCharacter = () => {
        let currentString = "";
  
        // Append word
        while (currentIndex < text.length) {
          currentString += text[currentIndex];
          if (text[currentIndex] === ' ') {
            currentIndex++;
            break;
          }
          currentIndex++;
        }
  
        // Add it to array
        if (currentIndex < text.length) {
          displayText = [...displayText, currentString];
          timer = setTimeout(typeNextCharacter, textdelay);
        } else {
          displayText = [...displayText, currentString];
        }
      };
  
      // Delay, then start.
      timer = setTimeout(typeNextCharacter, 100);
  
      return () => {
        clearTimeout(timer);
      };
    });
  
    onDestroy(() => {
      dispatch('done');
    });
  </script>
  
  <div class={tailwind}>
    {#each displayText as text, index}
      <span
        class={textAnim}
        style={style ? style : undefined}
      >
        {text}
      </span>
    {/each}
  </div>
