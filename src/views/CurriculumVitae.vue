<template>
  <div id="cvRoot">
    <vue-headful title="CV – Mikkel O. Laursen"/>

    <div class="errorMsg">
      <h1 class="error">
        Please view on a desktop computer
        <br>🤷🏻‍♂️
      </h1>
    </div>

    <div id="cv">
      <div class="page" size="A4">
        <div id="website">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mikkel.website/resume"
          >mikkel.website/resume</a>
        </div>
        <img src="../assets/profile.jpg" alt="Profilbillede" id="profilepic">
        <h1 id="name">MIKKEL O. LAURSEN</h1>
        <h1 id="title">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://bachelor.au.dk/ikt/"
          >IKT-STUDERENDE</a>
        </h1>

        <div id="contact">
          <img src="../assets/social/email.png" alt="E-mail">
          <a
            href="mailto:m@ikkel.dk?Subject=Vi%20vil%20gerne%20se%20dig%20til%20en%20samtale!"
          >m@ikkel.dk</a>
          <img src="../assets/social/phone-book.png" alt="Phone">
          <a href="tel:26789090">+45 26 78 90 90</a>
          <img src="../assets/social/linkedin.png" alt="LinkedIn">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/mikkellaursen"
          >mikkellaursen</a>
        </div>

        <div id="about">
          <p>Sans for godt design – grafisk som funktionelt.</p>
          <p>Motiveret af kløgtige og smarte løsninger.</p>
          <p>Drevet af nysgerrighed og forståelse.</p>
          <p>Interesseret i ny teknologi og state-of-the-art.</p>
          <p>Bidrager med ansvarlighed og snilde.</p>
        </div>

        <div id="experience">
          <h1>ERFARING</h1>
          <div id="timeline">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div id="expcontent">
            <div class="entry">
              <h1>2015 –</h1>
              <p class="jobtitle">Supporter, Elgiganten Tilst</p>
              <p>Teknisk hjælp til kunder. Klargøring og opsætning af computere, smartphones og TV. Sekundært håndtering af reklamationssager.</p>
            </div>
            <div class="entry">
              <h1>2013 –</h1>
              <p class="jobtitle">Konsulent, selvstændig</p>
              <p>Rådgivning, salg, programmering, support og reparation af alt inden for tech-verdenen til både virksomheder og private.</p>
            </div>
            <div class="entry">
              <h1>2008 – 2013</h1>
              <p class="jobtitle"></p>
              <div>Diverse ungdomsarbejde – herunder opvasker, flaskedreng og avisbud</div>
            </div>
          </div>
        </div>

        <div id="skills">
          <h1>KOMPETENCER</h1>
          <div class="content">
            <div class="entry">
              <h1>SPROG</h1>
              <p>C, C++, C#, XAML, Java, Python, HTML, CSS, JS, SQL, VHDL, Assembly</p>
            </div>

            <div class="entry">
              <h1>VÆRKTØJER</h1>
              <p>Scrum, Git, V-model, GNU Make, PlantUML</p>
            </div>

            <div class="entry">
              <h1>DOKUMENTATION</h1>
              <p>
                <span
                  class="texhtml"
                  style="font-family: 'CMU Serif', cmr10, LMRoman10-Regular, 'Times New Roman', 'Nimbus Roman No9 L', Times, serif; letter-spacing: -0.5px;"
                >
                  L
                  <span
                    style="text-transform: uppercase; font-size: 70%; margin-left: -0.36em; vertical-align: 0.3em; line-height: 0; margin-right: -0.15em;"
                  >a</span>T
                  <span
                    style="text-transform: uppercase; margin-left: -0.1667em; vertical-align: -0.5ex; line-height: 0; margin-right: -0.125em;"
                  >e</span>X</span>, UML, SysML, Doxygen
              </p>
            </div>

            <div class="entry">
              <h1>ANDET</h1>
              <p>RESTful API, Node.js, Unix, CI, Kommunikation, Kaffebryg ☕️</p>
            </div>
          </div>
        </div>

        <div id="projects">
          <h1>PROJEKTER</h1>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikkel-ol/beepbot"
            >
              <!-- <img
                src="https://raw.githubusercontent.com/mikkel-ol/beepbot/master/etc/logo.png"
                alt
              >-->
              <b>Beep Bot</b>
            </a>
            og
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikkel-ol/bottenanna"
            >
              <!-- <img src="https://github.com/mikkel-ol/bottenanna/raw/master/logo.png" alt> -->
              <b>Botten Anna</b>
            </a>
            – to bots til chat-platformen Discord, der blandt andet kan spille musik fra YouTube, fungere som soundboard og styres fra et selvdesignet website.
          </p>
          <p>
            <b>Home Automation</b> via
            <!-- <img src="https://www.home-assistant.io/images/favicon.ico" alt> -->
            Home Assistant med blandt andet automatiske gardiner, smart belysning og stemmestyret kaffemaskine.
          </p>
          <p>
            <b>Selvbygget 3D printer</b> med mange modificeringer – heriblandt
            <!-- <img src="https://octoprint.org/assets/img/tentacle-32x32.png" alt> -->
            OctoPrint som webinterface.
          </p>
          <p>
            <a
              target="_new"
              rel="noopener noreferrer"
              href="https://marketplace.visualstudio.com/items?itemName=mikkel-ol.er-syntax-highlighting"
            >
              <!-- <img src="https://code.visualstudio.com/favicon.ico" alt> -->
              <b>Visual Studio Code extension</b>
            </a> med syntax highlighting til Entity-Relationship diagrammer (.er filer).
          </p>
          <p id="footer">
            Se mange af projekterne og flere andre på
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikkel-ol/"
            >
              <img src="../assets/social/039-github.png" alt>
              <b>github.com/mikkel-ol</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "CV",
  mounted() {
    var favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "favicons/cv/favicon.ico";
    document.getElementsByTagName("head")[0].prepend(favicon);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_cv.scss";
</style>

