import Accordion from "./Accordion";
import Title from "./Title";

const FAQ = () => {
  return (
    <div>
      <div>
        <Title
          name="frequently asked questions"
          description="we help you connect with families and domestic workers to find their needs."
        />
      </div>
      <div className="py-4 px-[1rem] lg:px-[12rem]">
        <Accordion
          question="How can I find a maid using Pickmymaid?"
          answers="Once you register with Pickmymaid( fee starting from 299AED), you have access to all their contact and details.The desired salary of each maid is mentioned on their profiles.You can call and interview them to discuss the conditions and salary to find the perfect maid you need.You can then hire her and sponsor her directly. Pickmymaid does not provide sponsorship but the platform facilitates the hiring process."
        />
        <Accordion
          question="Does Pickmymaid verify the profiles that are posted?"
          answers="Yes, At Pickmymaid we take profile verification very seriously. All maids who register on our website undergo an interview and filtration process by our onboarding team. Even though we encourage you to re-check their information and ideally call their previous employer to know their feedback."
        />
        <Accordion
          question="Is there any ongoing service or customer service available?"
          answers="If you are not satisfied with our service, you can easily contact us and our customer care agent will communicate with you."
        />
        <Accordion
          question="What is the salary range for the maid?"
          answers="The monthly salary for maids on Pickmymaid ranges from 1200AED to 3500AED. The desired salary of each maid is mentioned on their profiles, allowing you to easily find a candidate within your budget."
        />
        <Accordion
          question="Can I access the database without purchasing an access package?"
          answers="Yes, you can access all the listed maids as a website visitor. However, you will need to purchase an access package to complete the information and contact details of the listed maids. By unlocking the access package you will get the complete information and contact details of the maid, which help you to make direct inquiries and find the right fit for you."
        />
        <Accordion
          question="Are the maids sponsored/ have their visas?"
          answers="Pickmymaid is not an agency and we do not sponsor the maids or nannies. Sponsorship must be taken by the employer. It is the employer’s responsibility to sponsor and arrange the necessary visa for the maids. We support you to navigate the hiring process effectively."
        />
        <Accordion
          question="Do you have full-time maids or part-time maids?"
          answers="We maintain the profiles of both full-time maids for live-in arrangements and part-time maids who are available on a flexible basis. We have a wide range of options, including Indian maids, Filipino maids, Indonesian maids, and many more. Our part-time maids are available for monthly, weekly, and hourly services providing the flexibility you require for domestic help.."
        />
        <Accordion
          question="What are the regions of UAE where you provide nanny services?"
          answers="We provide nanny services across all seven emirates of the United Arab Emirates (UAE). Our coverage includes:

Abu Dhabi
Dubai
Sharjah
Ajman
Umm Al Quwain
Ras Al Khaima
Fujairah
Al Ain
Whether you reside in the vibrant city of Dubai, the capital city of Abu Dhabi, or any other emirate in the UAE, PickMyMaid is dedicated to offering reliable and professional nanny services to meet your family's needs. If you have any questions regarding our service coverage or need assistance in selecting the right nanny for your requirements, please don't hesitate to reach out to us."
        />
        <Accordion question="What are the regions of UAE where you provide maid services?" answers="We provide maid services across all seven emirates of the United Arab Emirates (UAE). Our coverage includes:

Abu Dhabi
Dubai
Sharjah
Ajman
Umm Al Quwain
Ras Al Khaima
Fujairah
Al Ain
Whether you reside in the bustling city of Dubai, the serene coastal areas of Fujairah, or any other emirate in the UAE, PickMyMaid is committed to offering reliable and professional maid services to meet your household needs. If you have any inquiries regarding our service coverage or need assistance in selecting the right maid for your requirements, please feel free to contact us.

" />
      </div>
    </div>
  );
};

export default FAQ;
