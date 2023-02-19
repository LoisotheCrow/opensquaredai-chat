import tabIndeces from "../../constants/tabIndeces";

const Footer = () => (
  <footer tabIndex={tabIndeces.FOOTER} className="w-full h-20 bg-gray-800 flex flex-col p-4 text-gray-300">
    <div className="flex flex-row justify-between w-full">
      <h5>Distributed under IST License</h5>
      <h5>Copyright LoisoCrow, 2023</h5>
    </div>
  </footer>
);

export default Footer;
