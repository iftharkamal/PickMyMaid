
import Title from "./Title";

import TestimonialUsersBox from "./TestimonialUsersBox";



const TestimonialsUsers = () => {
  return (
    <div className="py-16 mt-16">
      <div className="flex flex-col items-center ">
        <Title name="testimonial from our users" />
        <p className="text-black text-base lg:text-xl font-medium px-4 lg:-mt-5 mb-5 text-center ">
          Register Now - Get Access to 1500+ Maids profiles who're ready join
        </p>
        <img src="/assets/google.png" alt="googleReview" className="w-[200px]" />
      </div>
      <TestimonialUsersBox/>
    </div>
  );
};

export default TestimonialsUsers;
