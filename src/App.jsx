import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('9th September 2026 — 20 years completed');
  const [year, setYear] = useState(new Date().getFullYear());

  const setMsg = (text) => {
    setMessage(text);
  };

  const celebrateBtn = () => {
    setMsg('20 YEARS! From KSh 6,500 to transforming schools across Kenya');
    setTimeout(() => setMsg('9th September 2026 — 20 years completed'), 5000);
  };

  const statsBtn = () => {
    setMsg('KCSE 2025: 8.95 (515 candidates) · Defeated Mukumu 8.90!');
    setTimeout(() => setMsg('9th September 2026 — 20 years completed'), 5000);
  };

  const resetBtn = () => {
    setMsg('9th September 2026 — 20 years completed');
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-white font-['Segoe_UI',Arial,sans-serif] text-[#1a1a1a] min-h-screen">
      <div className="max-w-[480px] md:max-w-full mx-auto bg-white min-h-screen px-4 md:px-12 lg:px-24 xl:px-32">
        
        {/* Header */}
        <div className="pt-4 pb-2 border-b-2 border-[#e8e8e8]">
          <div className="text-[0.8rem] md:text-[1.2rem] font-bold text-[#cc0000] tracking-[0.5px]">
            Blog Updates<span className="text-[#1a1a1a]">.</span>
          </div>
          <div className="text-[0.6rem] md:text-[0.8rem] text-[#666] mt-0.5">
            Stories that inform & inspire
          </div>
        </div>

        {/* Article */}
        <div className="py-4 md:py-8">
          <span className="inline-block bg-[#cc0000] text-white text-[0.6rem] md:text-[0.8rem] font-bold px-[0.7rem] py-[0.15rem] uppercase tracking-[0.5px] mb-2">
            Featured Story
          </span>
          <h1 className="text-[1.4rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.3] text-[#1a1a1a] mb-1">
            20 Years in the Classroom: Two Decades of Sacrifice, Service, Results and Purpose
          </h1>
          <div className="text-[0.7rem] md:text-[0.9rem] text-[#666] border-b border-[#f0f0f0] pb-3 mb-3">
            <strong className="text-[#1a1a1a] font-semibold">9th September 2006 — The Day My Professional Journey Began</strong><br />
            By Mwalimu Malata Benson · Updated: 9th September 2026
          </div>

          {/* Message Box */}
          <div className="bg-[#f8f8f8] border border-[#e8e8e8] px-3 py-1.5 text-[0.8rem] md:text-[1rem] text-[#1a1a1a] text-center my-2 min-h-[2.2rem] flex items-center justify-center">
            {message}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 my-3 flex-wrap">
            <button 
              onClick={celebrateBtn}
              className="bg-[#cc0000] text-white px-4 py-1.5 font-semibold text-[0.75rem] md:text-[0.9rem] uppercase tracking-[0.5px] hover:bg-[#aa0000] transition-colors"
            >
              Celebrate 20 Years
            </button>
            <button 
              onClick={statsBtn}
              className="bg-transparent text-[#1a1a1a] border-2 border-[#1a1a1a] px-4 py-1.5 font-semibold text-[0.75rem] md:text-[0.9rem] uppercase tracking-[0.5px] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              2025 Results
            </button>
            <button 
              onClick={resetBtn}
              className="bg-[#e8e8e8] text-[#1a1a1a] px-4 py-1.5 font-semibold text-[0.75rem] md:text-[0.9rem] uppercase tracking-[0.5px] hover:bg-[#d0d0d0] transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 bg-[#f8f8f8] py-2 md:py-4 mb-4 border border-[#e8e8e8]">
            <div className="text-center">
              <span className="block text-[1.2rem] md:text-[2rem] font-bold text-[#1a1a1a]">20</span>
              <span className="text-[0.55rem] md:text-[0.7rem] text-[#666] uppercase tracking-[0.3px]">Years Service</span>
            </div>
            <div className="text-center">
              <span className="block text-[1.2rem] md:text-[2rem] font-bold text-[#1a1a1a]">5</span>
              <span className="text-[0.55rem] md:text-[0.7rem] text-[#666] uppercase tracking-[0.3px]">Schools</span>
            </div>
            <div className="text-center">
              <span className="block text-[1.2rem] md:text-[2rem] font-bold text-[#1a1a1a]">8.95</span>
              <span className="text-[0.55rem] md:text-[0.7rem] text-[#666] uppercase tracking-[0.3px]">KCSE 2025 Mean</span>
            </div>
          </div>

          {/* Story paragraphs - single column */}
          <div className="py-3 border-b border-[#f0f0f0]">
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              On 9th September 2006, I walked through the gates of <strong className="text-[#1a1a1a]">St. James Bulimbo Girls</strong>, now known as Mary Seat of Wisdom Bulimbo Girls, in Kakamega County, as a young teacher beginning a journey whose destination I could not see. Today, 9th September 2026, I look back with immense gratitude. I have completed 20 years in the teaching profession and entered my 21st year of service.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              The school stands at the boundary of Kakamega and Bungoma counties, between Harambee Market and Watoya Market. It was there that my professional journey began—not on a permanent government appointment, but on BOM terms, earning a modest <strong className="text-[#1a1a1a]">KSh 6,500 per month</strong>. My rent at Harambee Market was KSh 700.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              I had just left Moi University after completing my teacher training, whose climax was teaching practice at Umoja High School in Eldoret between May and July 2006. I arrived at Bulimbo Girls with little money, but with something far more valuable: a determination to serve the child.
            </p>
          </div>

          {/* Quote */}
          <div className="bg-[#f8f8f8] px-4 py-3 border-l-4 border-[#cc0000] my-3">
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.6] italic text-[#333]">
              "Welcome to Bulimbo Girls and do your best to serve the child."
            </p>
            <div className="font-normal font-semibold text-[0.75rem] md:text-[0.85rem] text-[#666] mt-0.5">
              — Madam Electine Wabuyabo Kisiangani, Principal
            </div>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Those few words became a professional philosophy that has remained with me for two decades. I learnt very early that teaching is not merely about completing a syllabus, attending lessons or earning a salary. Teaching is about serving the child.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              4.20 A.M. — The Beginning of a Culture of Sacrifice
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Every morning, I left my house early enough to arrive at school at about 4.20 a.m. My responsibility was to oversee the waking up and preparation of students for morning preps, which began at 5.00 a.m. and ended at 6.00 a.m. The response of the girls encouraged me. They appreciated my presence.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              Becoming the First Male Boarding Master
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              In 2007, I was entrusted with another responsibility. I became the Boarding Master—the first male Boarding Master in a girls' school. I took that responsibility very seriously.
            </p>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              I even bought a <strong className="text-[#1a1a1a]">Hero Jet bicycle for KSh 5,500</strong>, which became an important tool in enabling me to move around as I discharged this sacred responsibility.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              Bulimbo Girls — Where Kiswahili Became a Brand
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Through sacrifice, teamwork and dedication, remarkable results began to emerge. Working alongside my Kiswahili counterpart, <strong className="text-[#1a1a1a]">Mr. Alex Chegenye</strong>, we pushed the subject to greater heights. Kiswahili eventually achieved a <strong className="text-[#1a1a1a]">mean score of 8.4 in KCSE</strong>, helping to establish the subject as a brand at Bulimbo Girls.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              2008 — Mandera and a New Chapter
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              In August 2008, I attended an interview at <strong className="text-[#1a1a1a]">Sheikh Ali Boys in Mandera</strong>. I succeeded and secured my first TSC appointment. Suddenly, the young teacher from Bulimbo Girls was moving to a completely different environment bordering Somalia and Ethiopia. But I carried the same philosophy with me: Wherever I am posted, I must serve the child to the best of my ability.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              When Teaching Went Beyond the Classroom
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              At Mandera, I worked closely with colleagues, among them <strong className="text-[#1a1a1a]">Mr. Abdikhalif</strong>, now Principal of Arabia Boys in Mandera. Together, we trained a Somali-dramatised dance. In 2009, that team reached the national level at Kaaga Girls in Meru.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              2010 — Ngozi Girls and the Birth of a Writer
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              In October 2010, I was posted to <strong className="text-[#1a1a1a]">Ngozi Girls in Lungalunga</strong>, at the Kenya-Tanzania border. This became another defining chapter. I eventually wrote <em>'Pepeto ya Isimujamii'</em>, which I later published in 2015.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              St. Peter's Boys Mumias — The Dream of 10.3
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              My journey later brought me to <strong className="text-[#1a1a1a]">St. Peter's Boys High School, Mumias</strong>, in 2014. Mr. Owuor Godfrey, the Principal, had developed an interest in my work from as early as 2007. In <strong className="text-[#1a1a1a]">KCSE 2015, Kiswahili achieved a mean score of 10.3</strong>, placing the school second behind Sacred Heart Mukumu Girls. That 10.3 remains a record yet to be broken at St. Peter's Boys.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              The Dream of Defeating Mukumu
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              From 2015, I developed one particular academic ambition: One day, I would defeat Sacred Heart Mukumu Girls in Kiswahili mean score. For years, that remained a dream. Then came <strong className="text-[#1a1a1a]">KCSE 2025 when Musingu High School achieved a Kiswahili mean score of 8.95</strong>, while Sacred Heart Mukumu Girls recorded 8.90. The dream had finally become reality. A dream pursued for ten years had finally been achieved — I could finally say: Mission accomplished.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              2017 — I Left Teaching to Try Politics
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              In 2017, I made a completely different decision. I resigned from teaching and ventured into politics, contesting for the position of MCA for Bukhayo Central Ward in Busia County. I lost to Hon. Kassaman. But losing an election did not mean losing my purpose.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              20th January 2019 — Musingu Boys
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              On 20th January 2019, I reported to <strong className="text-[#1a1a1a]">Musingu Boys High School</strong> in Kakamega South Sub-County. I joined a team. And together, we began another journey.
            </p>
          </div>

          {/* Results */}
          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              Musingu Boys KCSE Performance
            </div>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-0.5 my-2">
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2016</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">6.53</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2017</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">5.00</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2018</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">5.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2019</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">6.70</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2020</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">7.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2021</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">7.70</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2022</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">7.90</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2023</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">8.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-[#666] font-semibold">2024</span>
                <span className="font-bold text-[#1a1a1a] text-[0.9rem] md:text-[1.1rem]">8.50</span>
              </div>
              <div className="bg-[#cc0000] border border-[#cc0000] text-center py-1.5 text-[0.7rem] md:text-[0.85rem]">
                <span className="block text-white/80 font-semibold">2025</span>
                <span className="font-bold text-white text-[0.9rem] md:text-[1.1rem]">8.95</span>
              </div>
            </div>
            <p className="text-[0.7rem] md:text-[0.85rem] text-[#666] mt-0.5">515 candidates · Defeated Mukumu (8.90) in 2025</p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              Results Are Built, Not Wished For
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Quality results do not happen by accident. They are built through:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0.5 gap-x-4 my-0.5">
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Sacrifice</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Commitment</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Teamwork</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Discipline</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Consistency</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Collaboration</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Strategic Planning</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Mentorship</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Hard Work</li>
              <li className="list-none text-[0.78rem] md:text-[0.9rem] text-[#333] py-0.5 flex items-center gap-0.5 before:content-['>'] before:text-[#cc0000] before:font-bold">Belief in Learners</li>
            </ul>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              My Passion for Boarding Has Never Died
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Throughout the schools where I have worked, I have consistently found myself serving as a Boarding Master. This is not by accident. I have a deep passion for boarding. I believe that some of the roots of academic indiscipline begin in the boarding environment when teachers withdraw and leave students to manage themselves.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              From Teacher to Mentor
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Today, my passion for teaching has developed into a wider mission. Principals from different schools now invite me to share knowledge and experience with teachers and students. I have been invited across <strong className="text-[#1a1a1a]">Kenya's eight regions</strong>.
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              Gratitude to the Teachers Who Walked With Me
            </div>
            <p className="leading-[1.8] text-[0.85rem] md:text-[1.1rem] text-[#333]">
              To every colleague who stood beside me: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every student who responded to my mentorship: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every principal who opened the school gate for me: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every teacher who embraced teamwork: <strong className="text-[#1a1a1a]">ASANTE</strong>
            </p>
          </div>

          <div className="py-3 border-b border-[#f0f0f0]">
            <div className="font-bold text-[0.85rem] md:text-[1.1rem] text-[#1a1a1a] mb-0.5">
              The Journey Continues
            </div>
            <p className="text-[0.85rem] md:text-[1.1rem] leading-[1.7] text-[#333]">
              Today, I celebrate 20 years of teaching and the beginning of my 21st year.<br />
              I celebrate the young teacher who arrived at Bulimbo Girls in 2006 with KSh 6,500 in his pocket but a heart full of determination.<br />
              I celebrate the bicycle that carried me through boarding responsibilities.<br />
              I celebrate the early mornings.<br />
              Above all, I celebrate many of students who have gone through my hands since 2006.
            </p>
          </div>

          {/* Final quote */}
          <div className="bg-[#f8f8f8] px-4 py-3 border-l-4 border-[#cc0000] my-3">
            <p className="text-[1rem] md:text-[1.3rem] font-semibold text-[#1a1a1a]">
              MAY I CONTINUE TO HAVE THE STRENGTH, WISDOM AND HUMILITY TO SERVE THE CHILD.
            </p>
          </div>

          <div className="border-b-0 pb-0">
            <p className="text-[1rem] md:text-[1.3rem] font-bold text-[#1a1a1a]">20 YEARS DOWN. THE CALLING REMAINS.</p>
            <p className="text-[0.8rem] md:text-[1rem] text-[#666] mt-0.5">
              <strong className="text-[#1a1a1a]">Mwalimu Malata Benson</strong><br />
              Teacher – Mentor – Writer – Publisher – Educational Consultant – Political Analyst
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f8f8] px-4 py-3 text-center text-[0.65rem] md:text-[0.8rem] text-[#666] border-t-2 border-[#e8e8e8]">
          <strong className="text-[#cc0000]">Blog Updates</strong> · Stories that inform & inspire<br />
          <span>© {year} · 20 Years of Sacrifice, Service, Results & Purpose</span>
        </div>
      </div>
    </div>
  );
}

export default App;