import { CgCopyright } from "react-icons/cg";
import "./Footer.css";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="p-3 text-center">
      بيت الخشب.. مساحة ذكية تجمع بين دفء البساطة وسهولة الإنجاز
      <p className="p-0 m-0">
        حميع الحقوق محفوظه لدي منصه بيت الخشب <CgCopyright /> {date} يسعدنا
        زيارتك لمعرضنا
      </p>
    </footer>
  );
}

export default Footer;
