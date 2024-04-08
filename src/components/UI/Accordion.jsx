import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordionLanding() {
  return (
    <div className="my-7 mx-6 md:mx-10 max-w-[800px] xl:max-w-[1000px] ">
      <Accordion className="my-3">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-gray-200 my-1 !py-1"
        >
          <h2 className="text-center text-[#676767]">
            What is Pressure Washing?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="tracking-wide leading-relaxed">
            Pressure washing is the process of using a high-pressure stream of
            water to remove dirt, grime, and other debris from the surface of
            your home or business. We use this highest quality equipment
            available on the market so that we can tailor our service to our
            customers individual needs.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="my-3">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-gray-200 my-1 !py-1"
        >
          <h2 className="text-center text-[#676767]">
            What is the difference between soft washing and pressure washing?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="tracking-wide leading-relaxed">
            The main difference between soft washing and pressure cleaning is
            the pressure of the water. Pressure cleaning uses a high-pressure
            stream of water to remove dirt and grime, while soft washing uses a
            lower pressure with cleaning solutions. Our team have the experience
            and knowledge to know what technique to use on your home or
            property.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="my-3">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-gray-200 my-1 !py-1"
        >
          <h2 className="text-center text-[#676767]">
            Will your pressure cleaning machine remove weeds and grass growing
            through our brick pavers?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="tracking-wide leading-relaxed">
            Yes our pressure cleaning machine will pull up the weeds and grass
            growing through the pavers.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="my-3">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-gray-200 !py-1"
        >
          <h2 className="text-center text-[#676767]">
            I'm concerned about pressure cleaning my sandstone walls as it might
            get damaged if you use high pressure?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="tracking-wide leading-relaxed">
            We are very experienced in cleaning sandstone and other soft
            surfaces. We use our soft wash method, this has been successful time
            and time again.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion className="my-3">
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="!bg-gray-200 my-1 !py-1"
        >
          <h2 className="text-center text-[#676767]">
            Will your pressure cleaning machine pull the grout out of my tiles
            on my balcony?
          </h2>
        </AccordionSummary>
        <AccordionDetails>
          <p className="tracking-wide leading-relaxed">
            No, we can adjust the pressure on our machines to suit every job.
            Even if the grout is cracking and falling out, we have other
            cleaning methods which we can apply..
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
