import { ContactInfo } from './contact-info';

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">CONTACT</p>
        <h2>保持联系</h2>
      </div>
      <ContactInfo />
    </section>
  );
}
