// src/components/Footer/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-prime to-second h-[300px] mt-10 text-white py-6 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]

">
      <div className="container mx-auto text-center grid grid-cols-4 mt-20 overflow-hidden w-[90%]">

        <div className="text-left">
          <h2>EastFeast <br /> Catering</h2>
        </div>

        <div className="flex flex-col text-left">
          <div>Meals</div>
          <div>Reserve</div>
          <div>About Us</div>
        </div>

        <div className="flex flex-col text-left">
          <div>Contact Us</div>
          <div>+31 20 337 8128</div>
          <div>info@eastfeastcatering.nl</div>
        </div>

        <div className="flex flex-col text-left">
          <div>Contact Us</div>
          <div>+31 20 337 8128</div>
          <div>info@eastfeastcatering.nl</div>
        </div>




      </div>
      <p className="text-center w-full absolute mt-14">&copy; {new Date().getFullYear()} EastFeast Catering. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
