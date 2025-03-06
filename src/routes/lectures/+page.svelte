<script>
    const lectures = [
        {
            "topic":"Introduction to Computer Science",
            "field":"career",
            "slides":"https://docs.google.com/presentation/d/1Yv-cJ2LPczp-VXtaFbKte64NKB13FKZNySELMBbtsyY/edit?usp=sharing"
        },
        {
            "topic":"Competitive Programming",
            "field":"algorithms",
            "slides":"https://docs.google.com/presentation/d/1BX2GuMDtTC7VO7yklgiFgUbvB9fOInhN6CZV3gDTuq4/edit?usp=sharing"
        },
        {
            "topic":"Number Bases",
            "field":"cryptography",
            "slides":"https://docs.google.com/presentation/d/1I-9cj_KhKw1SlEk2sXn_IZqbwZcYX-LbVTh8PBNnKQU/edit?usp=sharing"
        },
        {
            "topic":"Hash and Checksums",
            "field":"cryptography",
            "slides":"https://docs.google.com/presentation/d/13DiNkcX-jUdWNIn3-9xYkyX81bU13Exd4bUEkad4ZJA/edit?usp=sharing"
        },
        {
            "topic":"PSEO/Dual-Enrollment classes",
            "field":"career",
            "slides":"https://docs.google.com/presentation/d/13DiNkcX-jUdWNIn3-9xYkyX81bU13Exd4bUEkad4ZJA/edit?usp=sharing"
        },
        {
            "topic":"Introduction to Machine Learning",
            "field":"ai/ml",
            "slides":"https://docs.google.com/presentation/d/1_wVCjlhRlyKTTfRoGNzkeQgsZ7oe6xwJouZlMXsY-eo/edit?usp=sharing"
        },
        {
            "topic":"Greedy Algorithms",
            "field":"algorithms",
            "slides":"https://docs.google.com/presentation/d/1KKoRF4hFvfTHV0SoZHLueqFm9C1y9-pGKvsnHTOrBQI/edit?usp=sharing"
        },
        {
            "topic":"Public/Private Key Exchange",
            "field":"cryptography",
            "slides":"https://docs.google.com/presentation/d/1t2Jde3PqBKxUBm_PKKFw4ofHtmJZZPCjmuVmyUceiYQ/edit?usp=drive_link"
        },
        {
            "topic":"Error Tracking and Monitoring [UIOWASEP'25]",
            "field":"software",
            "slides":"https://docs.google.com/presentation/d/1w0wWnTVUGCkXTO9vXmJs-maVvgzL24-T7g9HLsuC3rs/edit?usp=drive_link"
        },
        {
            "topic":"HLGraphRAG: Human-Like Graph Retrieval Augmentation for Information Synthesis [JSHS'25]",
            "field":"ai/ml",
            "slides":"https://docs.google.com/presentation/d/1LICGbE6xvC3w75UI2RPSO9pJDFUmPZrH6pFvcp65Pm8/edit?usp=drive_link"
        }
    ]
</script>

  
<div class="p-4 pt-20 h-screen">
    <h1 class="text-2xl text-white mt-4">Lectures/Presentation</h1>
    <p class="text-white mb-4">These are all licensed under CC-BY-NC</p>
    <div class="overflow-x-auto">
        <table class="table-auto border-collapse w-full text-left text-sm text-white bg-black">
          <thead>
            <tr>
              <th class="border-b border-white px-4 py-2">Topic</th>
              <th class="border-b border-white px-4 py-2">Field</th>
              <th class="border-b border-white px-4 py-2">Slides</th>
            </tr>
          </thead>
          <tbody>
            {#each lectures as lecture}
              <tr class="hover:bg-gray-800 transition">
                <td class="border-b border-white px-4 py-2">{lecture.topic}</td>
                <td class="border-b border-white px-4 py-2">{lecture.field}</td>
                <td class="border-b border-white px-4 py-2">
                  {#if lecture.slides}
                    <a href={lecture.slides} target="_blank" class="text-blue-400 hover:underline">View Slides</a>
                  {:else}
                    <span class="text-gray-400">N/A</span>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
</div>
