<template>
  <div id="cvRoot">
    <div class="errorMsg">
      <h1 class="error">
        Please view on a desktop computer
        <br>🤷🏻‍♂️
      </h1>
    </div>

    <div id="cv">
      <div class="page" size="A4">
        <img src="../assets/profile.jpg" alt="Et billede af mig" id="profilepic">
        <h1 id="name">MIKKEL O. LAURSEN</h1>
        <h1 id="title">IKT-STUDERENDE</h1>

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
          <p>Sans for godt design, både grafisk og funktionelt.</p>
          <p>Motiveret af kløgtige/snedige/smarte/intelligente løsninger.</p>
          <p>Drevet af ny teknologi og state-of-the-arts.</p>
          <p></p>
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
              <div>Diverse ungdomsarbejde - herunder opvasker, flaskedreng og avisbud</div>
            </div>
          </div>
        </div>

        <div id="skills">
          <h1>FÆRDIGHEDER</h1>
          <div class="content">
            <div class="entry">
              <div class="headline">
                <p>HTML/CSS/JAVASCRIPT</p>
              </div>
              <div class="bar"></div>
            </div>

            <div class="entry">
              <div class="headline">
                <p>HTML/CSS/JAVASCRIPT</p>
              </div>
              <div class="bar"></div>
            </div>

            <div class="entry">
              <div class="headline">
                <p>HTML/CSS/JAVASCRIPT</p>
              </div>
              <div class="bar"></div>
            </div>
          </div>
        </div>

        <div id="projects">
          <h1>PROJEKTER</h1>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikkel-ol/bottenanna"
            >
              <img src="https://github.com/mikkel-ol/bottenanna/raw/master/logo.png" alt>
              <b>Botten Anna</b>
            </a>
            – en bot til chat-platformen Discord, der kan spille musik fra
            <img
              src="https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png"
              alt
            >YouTube. Udviklet med JavaScript og kørt på
            <img
              src="https://nodejs.org/static/favicon.png"
              alt
            >
            Node.js.
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikkel-ol/beepbot"
            >
              <img
                src="https://raw.githubusercontent.com/mikkel-ol/beepbot/master/etc/logo.png"
                alt
              >
              <b>Beep Bot</b>
            </a>
            som blandt andet soundboard til social Discord server med venner og bekendte. Hertil udvikling af website til styring. Ligeledes udviklet med JavaScript og Node.js.
          </p>
          <p>
            <b>Home Automation</b> via
            <a href="https://www.home-assistant.io/">
              <img src="https://www.home-assistant.io/images/favicon.ico" alt>
              <b>Home Assistant</b>
            </a> med blandt andet automatiske gardiner, smart belysning og stemmestyret kaffemaskine. Derigennem erfaring med
            <b>IoT</b>,
            <b>MQTT</b> og
            <b>YAML</b>.
          </p>
          <!-- <p>
            <b>Selvbygget 3D printer</b> med mange modificeringer - heriblandt
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://octoprint.org/"
            >
              <img src="https://octoprint.org/assets/img/tentacle-32x32.png" alt>
              <b>OctoPrint</b> som webinterface.
            </a>
          </p>-->
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marketplace.visualstudio.com/items?itemName=mikkel-ol.er-syntax-highlighting"
            >
              <img src="https://code.visualstudio.com/favicon.ico" alt>
              <b>Visual Studio Code extension</b>
            </a> med syntax highlighting til Entity-Relationship diagrammer (.er filer).
          </p>
          <p id="footer">
            Se mange af projekterne og andre skoleprojekter på
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

<script>
export default {
  name: "CV"
};
</script>

<style lang="scss" scoped>
@import "../styles/_cv.scss";
</style>

