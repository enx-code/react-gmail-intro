import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import EmailToolBar from "./EmailToolBar";
import EmailHeader from "./EmailHeader";
export default function EmailContent() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <EmailHeader />
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  );
}
