export default function KontaktFormular(){
    return(
        <>
        <div className="kontakt-grid" id="kontakt-mig">
        <div  className="kontakt-overskrift">
            <h2>Har jeg vagt din nysgerrighed?
            Jeg er klar på at skabe noget fantastisk sammen og vil glæde mig at høre fra dig.</h2>
            <h3>Jeg sidder oftest klar ved tasterne og du er velkommen til at benytte kontakt formularen eller kontakte mig direkte </h3>
        </div>
        <div className="direktmail">
            <h3>Direkte mail</h3>
            <a href="mailto:morten-kris@live.dk" className="mail-button">Morten-kris@live.dk</a>
        </div>
        
        <div className="contact-form-container">
      <h2 className="kontakt-mig-overskrift">Kontakt mig</h2>
      <form id="contact-form" action="https://formspree.io/f/mpwaevjo" method="post" enctype="text/plain">
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="company">Firma</label>
        <input type="text" id="company" name="company" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Besked</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    </div>
        </>
    )
}