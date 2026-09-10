import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('9th September 2026 — 20 years completed');
  const [year, setYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({ name: '', phone: '', interest: '' });
  const [formStatus, setFormStatus] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.interest) {
      setFormStatus('Thank you! Your message has been sent.');
      setFormData({ name: '', phone: '', interest: '' });
      setTimeout(() => setFormStatus(''), 5000);
    } else {
      setFormStatus('Please fill in all fields.');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  return (
    <div className="bg-gray-100 font-['Arial',sans-serif] text-[#1a1a1a] min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg">
        
        {/* Header - Clean with red bottom border like Teachers Updates */}
        <header className="border-b-4 border-[#cc0000] px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                <span className="text-[#cc0000]">Global Mentorship Branding</span> Updates
              </h1>
              <p className="text-sm text-gray-600">Stories that inform & inspire</p>
            </div>
            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              {new Date().toLocaleDateString('en-KE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="px-4 md:px-8 py-6 md:py-8">
          {/* Category and Title */}
          <div className="mb-6">
            <span className="inline-block bg-[#cc0000] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-2">
              Featured Story
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
              20 Years in the Classroom: Two Decades of Sacrifice, Service, Results and Purpose
            </h1>
            <div className="text-sm text-gray-500 mt-2 border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-700">9th September 2006 — The Day My Professional Journey Began</span>
              <span className="hidden md:inline mx-2">•</span>
              <br className="md:hidden" />
              By Mwalimu Malata Benson
              <span className="hidden md:inline mx-2">•</span>
              <br className="md:hidden" />
              Updated: 9th September 2026
            </div>
          </div>

          {/* TSC Updates News Links - Like Teachers Updates Related Posts */}
          <div className="my-6 p-4 bg-[#f8f8f8] border border-[#e8e8e8]">
            <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">📰 Latest Education News</h3>
            <div className="space-y-2">
              <a 
                href="https://teachersupdates.news/tsc-inducts-136-newly-recruited-secretariat-staff/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-[#cc0000] hover:underline hover:text-[#990000] transition-colors"
              >
                • TSC Inducts 136 Newly Recruited Secretariat Staff
              </a>
              <a 
                href="https://teachersupdates.news/tsc-re-advertises-1631-promotion-jobs-for-teachers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-[#cc0000] hover:underline hover:text-[#990000] transition-colors"
              >
                • TSC Re-Advertises 1,631 Promotion Jobs for Teachers
              </a>
              <a 
                href="https://teachersupdates.news/tvet-tutors-issue-21-day-ultimatum/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-[#cc0000] hover:underline hover:text-[#990000] transition-colors"
              >
                • TVET Tutors Issue 21-Day Ultimatum, Threaten Strike
              </a>
              <a 
                href="https://teachersupdates.news/kuppet-threatens-countywide-strike-over-intimidation-of-tsc-principal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-[#cc0000] hover:underline hover:text-[#990000] transition-colors"
              >
                • KUPPET Threatens Countywide Strike Over Alleged Intimidation of TSC Principal
              </a>
            </div>
          </div>

          {/* Message Box */}
          <div className="bg-[#f8f8f8] border-l-4 border-[#cc0000] px-4 py-3 text-sm md:text-base text-gray-800 my-4">
            {message}
          </div>

          {/* Stats in clean grid */}
          <div className="grid grid-cols-3 bg-[#f8f8f8] border border-gray-200 my-6">
            <div className="text-center py-3 border-r border-gray-200 last:border-r-0">
              <div className="text-2xl md:text-3xl font-bold text-[#cc0000]">20</div>
              <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider">Years Service</div>
            </div>
            <div className="text-center py-3 border-r border-gray-200 last:border-r-0">
              <div className="text-2xl md:text-3xl font-bold text-[#cc0000]">5</div>
              <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider">Schools</div>
            </div>
            <div className="text-center py-3">
              <div className="text-2xl md:text-3xl font-bold text-[#cc0000]">8.95</div>
              <div className="text-xs text-gray-600 uppercase font-semibold tracking-wider">KCSE 2025 Mean</div>
            </div>
          </div>

          {/* Story Content - Single Column with clean styling */}
          <div className="space-y-4">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              On 9th September 2006, I walked through the gates of <strong className="text-[#1a1a1a]">St. James Bulimbo Girls</strong>, now known as Mary Seat of Wisdom Bulimbo Girls, in Kakamega County, as a young teacher beginning a journey whose destination I could not see. Today, 9th September 2026, I look back with immense gratitude. I have completed 20 years in the teaching profession and entered my 21st year of service.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              The school stands at the boundary of Kakamega and Bungoma counties, between Harambee Market and Watoya Market. It was there that my professional journey began—not on a permanent government appointment, but on BOM terms, earning a modest <strong className="text-[#1a1a1a]">KSh 6,500 per month</strong>. My rent at Harambee Market was KSh 700.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              I had just left Moi University after completing my teacher training, whose climax was teaching practice at Umoja High School in Eldoret between May and July 2006. I arrived at Bulimbo Girls with little money, but with something far more valuable: a determination to serve the child.
            </p>

            {/* Quote */}
            <div className="bg-[#f8f8f8] px-4 py-4 border-l-4 border-[#cc0000] my-4">
              <p className="text-sm md:text-base italic text-gray-700 font-medium">
                "Welcome to Bulimbo Girls and do your best to serve the child."
              </p>
              <p className="text-xs md:text-sm text-gray-500 font-semibold mt-1">
                — Madam Electine Wabuyabo Kisiangani, Principal
              </p>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Those few words became a professional philosophy that has remained with me for two decades. I learnt very early that teaching is not merely about completing a syllabus, attending lessons or earning a salary. Teaching is about serving the child.
            </p>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                4.20 A.M. — The Beginning of a Culture of Sacrifice
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Every morning, I left my house early enough to arrive at school at about 4.20 a.m. My responsibility was to oversee the waking up and preparation of students for morning preps, which began at 5.00 a.m. and ended at 6.00 a.m. The response of the girls encouraged me. They appreciated my presence.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                Becoming the First Male Boarding Master
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                In 2007, I was entrusted with another responsibility. I became the Boarding Master—the first male Boarding Master in a girls' school. I took that responsibility very seriously.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                I even bought a <strong className="text-[#1a1a1a]">Hero Jet bicycle for KSh 5,500</strong>, which became an important tool in enabling me to move around as I discharged this sacred responsibility.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                Bulimbo Girls — Where Kiswahili Became a Brand
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Through sacrifice, teamwork and dedication, remarkable results began to emerge. Working alongside my Kiswahili counterpart, <strong className="text-[#1a1a1a]">Mr. Alex Chegenye</strong>, we pushed the subject to greater heights. Kiswahili eventually achieved a <strong className="text-[#1a1a1a]">mean score of 8.4 in KCSE</strong>, helping to establish the subject as a brand at Bulimbo Girls.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                2008 — Mandera and a New Chapter
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                In August 2008, I attended an interview at <strong className="text-[#1a1a1a]">Sheikh Ali Boys in Mandera</strong>. I succeeded and secured my first TSC appointment. Suddenly, the young teacher from Bulimbo Girls was moving to a completely different environment bordering Somalia and Ethiopia. But I carried the same philosophy with me: Wherever I am posted, I must serve the child to the best of my ability.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                When Teaching Went Beyond the Classroom
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                At Mandera, I worked closely with colleagues, among them <strong className="text-[#1a1a1a]">Mr. Abdikhalif</strong>, now Principal of Arabia Boys in Mandera. Together, we trained a Somali-dramatised dance. In 2009, that team reached the national level at Kaaga Girls in Meru.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                2010 — Ngozi Girls and the Birth of a Writer
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                In October 2010, I was posted to <strong className="text-[#1a1a1a]">Ngozi Girls in Lungalunga</strong>, at the Kenya-Tanzania border. This became another defining chapter. I eventually wrote <em>'Pepeto ya Isimujamii'</em>, which I later published in 2015.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                St. Peter's Boys Mumias — The Dream of 10.3
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                My journey later brought me to <strong className="text-[#1a1a1a]">St. Peter's Boys High School, Mumias</strong>, in 2014. Mr. Owuor Godfrey, the Principal, had developed an interest in my work from as early as 2007. In <strong className="text-[#1a1a1a]">KCSE 2015, Kiswahili achieved a mean score of 10.3</strong>, placing the school second behind Sacred Heart Mukumu Girls. That 10.3 remains a record yet to be broken at St. Peter's Boys.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                The Dream of Defeating Mukumu
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                From 2015, I developed one particular academic ambition: One day, I would defeat Sacred Heart Mukumu Girls in Kiswahili mean score. For years, that remained a dream. Then came <strong className="text-[#1a1a1a]">KCSE 2025 when Musingu High School achieved a Kiswahili mean score of 8.95</strong>, while Sacred Heart Mukumu Girls recorded 8.90. The dream had finally become reality. A dream pursued for ten years had finally been achieved — I could finally say: Mission accomplished.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                2017 — I Left Teaching to Try Politics
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                In 2017, I made a completely different decision. I resigned from teaching and ventured into politics, contesting for the position of MCA for Bukhayo Central Ward in Busia County. I lost to Hon. Kassaman. But losing an election did not mean losing my purpose.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
                20th January 2019 — Musingu Boys
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                On 20th January 2019, I reported to <strong className="text-[#1a1a1a]">Musingu Boys High School</strong> in Kakamega South Sub-County. I joined a team. And together, we began another journey.
              </p>
            </div>
          </div>

          {/* Results Table */}
          <div className="my-6 pt-4 border-t-2 border-gray-200">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-3">
              Musingu Boys KCSE Performance
            </h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-0.5">
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2016</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">6.53</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2017</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">5.00</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2018</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">5.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2019</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">6.70</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2020</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">7.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2021</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">7.70</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2022</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">7.90</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2023</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">8.40</span>
              </div>
              <div className="bg-[#f8f8f8] border border-[#e8e8e8] text-center py-2 text-xs md:text-sm">
                <span className="block text-[#666] font-semibold">2024</span>
                <span className="font-bold text-[#1a1a1a] text-sm md:text-base">8.50</span>
              </div>
              <div className="bg-[#cc0000] border border-[#cc0000] text-center py-2 text-xs md:text-sm">
                <span className="block text-white/80 font-semibold">2025</span>
                <span className="font-bold text-white text-sm md:text-base">8.95</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-[#666] mt-2">515 candidates · Defeated Mukumu (8.90) in 2025</p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-2">
              Results Are Built, Not Wished For
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-3">
              Quality results do not happen by accident. They are built through:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Sacrifice</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Commitment</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Teamwork</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Discipline</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Consistency</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Collaboration</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Strategic Planning</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Mentorship</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Hard Work</li>
              <li className="list-none text-sm md:text-base text-[#333] py-1 flex items-center gap-2 before:content-['>'] before:text-[#cc0000] before:font-bold">Belief in Learners</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
              My Passion for Boarding Has Never Died
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Throughout the schools where I have worked, I have consistently found myself serving as a Boarding Master. This is not by accident. I have a deep passion for boarding. I believe that some of the roots of academic indiscipline begin in the boarding environment when teachers withdraw and leave students to manage themselves.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
              From Teacher to Mentor
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Today, my passion for teaching has developed into a wider mission. Principals from different schools now invite me to share knowledge and experience with teachers and students. I have been invited across <strong className="text-[#1a1a1a]">Kenya's eight regions</strong>.
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#f8f8f8] border-l-4 border-[#cc0000]">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-2">
              Gratitude to the Teachers Who Walked With Me
            </h3>
            <p className="leading-relaxed text-sm md:text-base text-[#333]">
              To every colleague who stood beside me: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every student who responded to my mentorship: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every principal who opened the school gate for me: <strong className="text-[#1a1a1a]">ASANTE</strong>.<br />
              To every teacher who embraced teamwork: <strong className="text-[#1a1a1a]">ASANTE</strong>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-base md:text-lg text-[#1a1a1a] mb-1">
              The Journey Continues
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Today, I celebrate 20 years of teaching and the beginning of my 21st year.<br />
              I celebrate the young teacher who arrived at Bulimbo Girls in 2006 with KSh 6,500 in his pocket but a heart full of determination.<br />
              I celebrate the bicycle that carried me through boarding responsibilities.<br />
              I celebrate the early mornings.<br />
              Above all, I celebrate many of students who have gone through my hands since 2006.
            </p>
          </div>

          {/* Final quote */}
          <div className="bg-[#cc0000] text-white px-4 py-4 my-6">
            <p className="text-base md:text-xl font-bold text-center">
              MAY I CONTINUE TO HAVE THE STRENGTH, WISDOM AND HUMILITY TO SERVE THE CHILD.
            </p>
          </div>

          <div className="mt-6">
            <p className="text-lg md:text-2xl font-bold text-[#1a1a1a]">20 YEARS DOWN. THE CALLING REMAINS.</p>
            <div className="mt-2 p-4 bg-[#f8f8f8] border-l-4 border-[#cc0000]">
              <p className="text-sm md:text-base text-[#333]">
                <strong className="text-[#1a1a1a] text-base md:text-lg">Mwalimu Malata Benson</strong><br />
                <span className="text-[#666]">Teacher – Mentor – Writer – Publisher – Educational Consultant – Political Analyst</span>
              </p>
            </div>
          </div>
        </main>

        {/* Contact Form Section */}
        <div className="px-4 md:px-8 py-6 bg-[#f8f8f8] border-t-2 border-[#cc0000]">
          <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2">Get In Touch</h2>
          <p className="text-sm md:text-base text-[#666] mb-4">
            Interested in connecting with Mwalimu Malata Benson for mentorship, speaking engagements, or collaboration? Fill in the form below.
          </p>
          <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl">
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-semibold text-[#1a1a1a] mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[#e8e8e8] bg-white text-sm md:text-base text-[#1a1a1a] focus:outline-none focus:border-[#cc0000]"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm md:text-base font-semibold text-[#1a1a1a] mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[#e8e8e8] bg-white text-sm md:text-base text-[#1a1a1a] focus:outline-none focus:border-[#cc0000]"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-sm md:text-base font-semibold text-[#1a1a1a] mb-1">Description of Interest</label>
              <textarea
                id="interest"
                name="interest"
                rows="4"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-[#e8e8e8] bg-white text-sm md:text-base text-[#1a1a1a] focus:outline-none focus:border-[#cc0000]"
                placeholder="Briefly describe your interest or how you'd like to connect"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-[#cc0000] text-white px-6 py-2 font-semibold text-sm md:text-base uppercase tracking-[0.5px] hover:bg-[#990000] transition-colors"
            >
              Send Message
            </button>
            {formStatus && (
              <p className={`text-sm md:text-base mt-2 ${formStatus.includes('Thank you') ? 'text-green-700' : 'text-red-700'}`}>
                {formStatus}
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <footer className="bg-[#f8f8f8] px-4 md:px-8 py-4 text-center text-xs md:text-sm text-[#666] border-t-2 border-[#e8e8e8]">
          <strong className="text-[#cc0000]">Blog Updates</strong> · Stories that inform & inspire<br />
          <span>© {year} · 20 Years of Sacrifice, Service, Results & Purpose</span>
        </footer>
      </div>
    </div>
  );
}

export default App;