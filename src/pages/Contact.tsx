import Marquee from "../components/ui/Marquee";
import { ContactsFilled } from "@ant-design/icons";
import ContactForm from "../components/ui/ContactForm";
import ContactFiller from "../components/ui/ContactFiller";
import { marquee1, marquee2 } from "../../constants"; 

const Contact = () => {
  return (
    <section
      className="space-y-1 md:space-y-6 w-full h-auto sm:h-screen md:h-screen md:flex-row flex-col flex items-start justify-start pt-24 px-4 snap-start"
      id="contact"
    >
      <div className="md:w-[60vw] w-full flex flex-col gap-5">
        {/* Bar section */}
        <span className="h1 dark:text-[#00FF00] text-green-700">
          <ContactsFilled className="dark:text-[#00FF00] text-green-300 pr-8" />
          /Contact
        </span>
        <div className="hidden w-[23em] h-[15rem] rounded-xl sm:flex md:flex justify-center items-center gap-5">
          <div className="bg-[#00FF00] w-[5px] h-[160px]"></div>
          <div className="flex flex-col gap-5">
            <ContactFiller
              heading={"Email:"}
              subheading={"milapmagar12@gmail.com"}
            />
            <ContactFiller
              heading={"Contact: "}
              subheading={"+977-9840028518"}
            />
            <ContactFiller heading={`Discord: `} subheading={"@milx123"} />
          </div>
        </div>
        {/* Marquee */}
        <div className="p-1">
          <Marquee
            items={marquee1}
            className="flex items-center animate-marquee gap-10"
          />
          <Marquee
            items={marquee2}
            className="flex items-center animate-marquee2 gap-10"
          />
        </div>
      </div>
      {/* Form section */}
      <div className="md:w-[40vw] w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
