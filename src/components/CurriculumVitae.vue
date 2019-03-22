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
              <p></p>
            </div>
            <div class="entry">
              <h1>2011 – 2013</h1>
              <p class="jobtitle">Supporter, Elgiganten Tilst</p>
              <p>Teknisk hjælp til købte produkter. Klargøring og opsætning af computere, smartphones og TV. Derudover håndtering af reklamationssager.</p>
            </div>
            <div class="entry">
              <h1>2008 – 2010</h1>
              <p class="jobtitle">Supporter, Elgiganten Tilst</p>
              <p>Teknisk hjælp til købte produkter. Klargøring og opsætning af computere, smartphones og TV. Derudover håndtering af reklamationssager.</p>
            </div>
            <div class="entry">
              <h1>– 2008</h1>
              <div>Diverse ungdomsarbejde - herunder opvasker, flaskedreng og avisbud</div>
            </div>
          </div>
        </div>

        <!-- <div id="projects">
        <h1>PROJEKTER</h1>
        <p>github</p>
        <p>home assistant / iot</p>
        <p>discord bot</p>
        <p>robort</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, itaque.
          Quia officia illum distinctio eius quisquam eaque voluptate. Vitae, qui?
          Fuga in optio nam, aliquid soluta ipsa! Hic, voluptatem inventore!
          Eligendi quod similique nisi quo vero atque nobis sunt at.
        </p>
        </div>-->
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

