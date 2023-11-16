<script lang="ts">
    import FadeInBox from "../lib/FadeInBox.svelte";
    import TypingEffect from "../lib/TypingEffect.svelte";

    
</script>

<div class="w-screen h-screen -z-10 fixed bg-[url(https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg)] bg-cover"/>

<!-- Front Home Page -->
<div class="w-full h-screen flex items-center justify-center bg-black bg-opacity-80 p-4">
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

<!-- Scrolling details , left information, learn, practice, build. -->
<div class="w-full bg-black p-16 bg-opacity-90">
    <div class="lg:w-96">
        <FadeInBox tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Learn</h2>
            <p class="text-lg text-gray-300">
                Explore a large variety of topics in the field of Computer Science. From web development to machine learning, we have it all. 
            </p>
        </FadeInBox>
        <FadeInBox tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Practice</h2>
            <p class="text-lg text-gray-300">
                Programming assignments, projects, quizzes, and more to make sure you understand and remember what you need.
            </p>
        </FadeInBox>
        <FadeInBox tailwind="my-32 text-white transition-all">
            <h2 class="text-2xl">Build</h2>
            <p class="text-lg text-gray-300">
                The best way to learn is through experience. Build you own hands-on programming project, game, whataver it is that you are learning.
            </p>
        </FadeInBox>
    </div>
</div>

<!-- Second right information, lectures, assignments, and projects. -->
<div class="w-full bg-black p-16 bg-opacity-90">
    <div class="lg:w-96 ml-auto">
            <FadeInBox tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">
                    Lectures
                </h2>
                <p class="text-lg text-gray-300">
                    Slides during Club Meetings that cover over content! All previous slides are posted, all under the CC-BY-NC.
                </p>
                <img src="https://img.icons8.com/ios/50/FFFFFF/link--v1.png" class="inline w-4 h-4" alt="link-icon"/>
                <p class="inline text-md text-blue-400">This link will be updated soon.</p>
            </FadeInBox>
            <FadeInBox tailwind="my-32 text-white transition-all">
                <h2 class="text-2xl">
                    Assignments
                </h2>
                <p class="text-lg text-gray-300">
                    All assignment descriptions will be on this website soon.
                </p>
            </FadeInBox>
            <FadeInBox tailwind="my-32 text-white transition-all">
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
<div class="w-full bg-black p-16 bg-opacity-90">
    <FadeInBox tailwind="my-8">
        <h1 class="text-2xl text-white">Meetings and Club Information</h1>
    </FadeInBox>

    <div class="flex flex-col lg:flex-row">
        <FadeInBox delay={0}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">
                    Dates and Times
                </h1>
                <p>
                    We meet at 4:00 PM on Fridays in West High. The start date will be on September 9th, 2023. 
                    To find out more information such as room numbers, sign up for the club using this URL!
                </p>
                <img src="https://img.icons8.com/ios/50/FFFFFF/link--v1.png" class="inline w-4 h-4" alt="link-icon"/>
                <a href="https://tinyurl.com/wc3signup" class="text-sm text-blue-400"> https://tinyurl.com/wc3signup </a>
            </div>
        </FadeInBox>

        <FadeInBox delay={0.25}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">
                    Registration
                </h1>
                <p>
                    Registration for the club is that simple google form questionare. 
                    Note that we do require all members to be in the Iowa City School District.
                </p>
            </div>
        </FadeInBox>

        <FadeInBox delay={0.5}>
            <div class="text-white lg:w-64 mx-8">
                <h1 class="text-xl">
                    Recommendations
                </h1>
                <p>
                    The club has a hard prerequisite of a passion in Computer Science. 
                    In addition, it is recommended that members either have the knowledge of AP Computer Science A or equivalent, to joining this club.
                </p>
            </div>
        </FadeInBox>
    </div>
</div>

