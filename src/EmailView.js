import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import EmailToolBar from "./EmailToolBar";
import EmailContent from "./EmailContent";
import './styles/emailview.css'

export default function EmailView() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <EmailContent />
    </main>
  );
}
