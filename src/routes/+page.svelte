<script lang="ts">
    import FadeInBox from "$lib/FadeInBox.svelte";
    import TypingEffect from "$lib/TypingEffect.svelte";
</script>

<!-- Front Home Page -->
<div class="w-full h-screen flex items-center justify-center bg-black p-4">
    <div class="text-white text-center md:text-left">
        <h1 class="text-2xl">WC3: Learn, Practice, Build</h1>
        <TypingEffect
            tailwind="text-lg text-gray-300"
            style=""
            text="A club at West High School dedicated to providing learning pathways of CS for students."
            textAnim="animate-breath"
            textdelay={150}
            />
    </div>
</div>

<!-- Scrolling details -->
<div class="w-full bg-black p-16">
    <div class="lg:w-96">
        <FadeInBox id={0} tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Learn</h2>
            <p class="text-lg text-gray-300">
                Explore a large variety of topics in the field of Computer Science. From web development to machine learning, we have it all. 
                In-club lectures during club meetings will help you learn the basics of a topic. 
                Then, apply your knowledge to a project of your choice. We also have a large library of resources for you to use.
            </p>
        </FadeInBox>

        <FadeInBox id={1} tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Practice</h2>
            <p class="text-lg text-gray-300">
                Long lists of programming assignments, projects, quizzes, and more to make sure you understand and remember what you need.
            </p>
        </FadeInBox>

        <FadeInBox id={2} tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Learn</h2>
            <p class="text-lg text-gray-300">
                The best way to learn is through experience. Build you own hands-on programming project, game, whataver it is that you are learning.
            </p>
        </FadeInBox>
    </div>
</div>

<div class="w-full bg-black p-16">
    <div class="lg:w-96 ml-auto">
            <FadeInBox id={3} tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">
                    Lectures
                </h2>
                <p class="text-lg text-gray-300">
                    Slides during Club Meetings that cover over content! All previous slids are posted, all under the CC-BY-NC.
                </p>

                <img src="https://img.icons8.com/ios/50/FFFFFF/link--v1.png" class="inline w-4 h-4" alt="link-icon"/>
                <a href="/lectures" class="text-md text-blue-400">View Lectures</a>
            </FadeInBox>

            <FadeInBox id={4} tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">
                    Assignments
                </h2>
                <p class="text-lg text-gray-300">
                    All assignment descriptions will be on this website soon.
                </p>
            </FadeInBox>

            <FadeInBox id={5} tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">
                    Projects
                </h2>
                <p class="text-lg text-gray-300">
                    All project descriptions will be on this website soon
                </p>
            </FadeInBox>
    </div>
</div>

<!-- Meeting and Club Information Chunk -->
<div class="w-full bg-black p-16">
    <FadeInBox id={7} tailwind="my-8">
        <h1 class="text-2xl text-white">Meetings and Club Information</h1>
    </FadeInBox>

    <div class="flex flex-col lg:flex-row">
        <FadeInBox id={8} delay={0}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Dates and Times</h1>
                <p>
                    We meet at 4:00 PM on Fridays in West High. The start date will be on September 9th, 2023. To find out more information such as room numbers, sign up for the club using this URL!
                </p>
                
                <img src="https://img.icons8.com/ios/50/FFFFFF/link--v1.png" class="inline w-4 h-4" alt="link-icon"/>
                <a href="https://tinyurl.com/wc3signup" class="text-sm text-blue-400"> https://tinyurl.com/wc3signup </a>
            </div>
        </FadeInBox>

        <FadeInBox id={9} delay={0.25}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Registration</h1>
                <p>
                    Registration for the club is that simple google form questionare. Note that we do require all members to be in the Iowa City School District.
                </p>
            </div>
        </FadeInBox>

        <FadeInBox id={10} delay={0.5}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">Recommendations</h1>
                <p>
                    The club has a hard prerequisite of a passion in Computer Science. In addition, it is recommended that members either have the knowledge of AP Computer Science A or equivalent, to joining this club.
                </p>
            </div>
        </FadeInBox>
    </div>
</div>

