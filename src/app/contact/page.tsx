import React from 'react'
import PageTitle from '@/components/Title/PageTitle'
import { FaHome } from "react-icons/fa";
import Image from "next/image"

const contactData = {
  mobile: [
    "97690 47445 / 88799 02481",
    "98214 88400 / 88795 53181",
    "81693 92733"
  ],
  emails: [
    "milan@athenatechnology.co.in",
    "technology.athena@gmail.com",
    "info@athenatechnology.co.in"
  ],
  address: "Unit No. 140/141/142, Lodha Boulevard Mall, Lodha Paradise, Majiwada, Thane (W) 400 601. INDIA"
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Contact Us"
        backgroundImage="/images/contactbanner.jpg"
      >
        <FaHome className="inline mr-2" />
        Home <span className="mx-2">/</span> Contact Us
      </PageTitle>

      <section className="max-w-[1200px] w-full mx-auto py-[72px]">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us For More Details</h1>
        <div className="flex gap-8 bg-white">
          <div className="flex flex-col md:items-start">
            <Image
              src="/images/contact.jpg"
              alt="Boulevard"
              width={500}
              height={200}
              className="rounded mb-6 w-full"
            />
            {/* Mobile */}
            <div className="flex items-start mb-4">
              <div className="bg-blue-900 text-white p-3 rounded mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.516 2.06a2 2 0 01-.516 1.94l-1.12 1.12a16.001 16.001 0 006.586 6.586l1.12-1.12a2 2 0 011.94-.516l2.06.516A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">Mobile</h2>
                <p className="text-gray-700 text-sm">
                  {contactData.mobile.map((num, i) => (
                    <span key={i}>{num}<br /></span>
                  ))}
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start mb-4">
              <div className="bg-blue-900 text-white p-3 rounded mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">Email</h2>
                <p className="text-gray-700 text-sm">
                  {contactData.emails.map((email, i) => (
                    <span key={i}>{email}<br /></span>
                  ))}
                </p>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-blue-900 text-white p-3 rounded mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v2H2v-2h5m10 0V4a2 2 0 00-2-2H9a2 2 0 00-2 2v16m10 0H7" />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-lg mb-1">Address</h2>
                <p className="text-gray-700 text-sm break-words whitespace-normal">{contactData.address}</p>
              </div>
            </div>
          </div>
          <div className='bg-[#ebf5f5] p-[50px]'>
            <form id="contact_form" className="contact_form wrap-form clearfix" action="sendmail.php"
              method="post">
              <div className="row">
                <div className="">
                  <label>
                    <span className="text-input margin_bottom0"><input className='w-full p-[20px_15px] border-none m-[10px]' name="name" type="text" value=""
                      placeholder="Your Name" required/></span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <span className="text-input margin_bottom0"><input className='w-full p-[20px_15px] border-none m-[10px]' name="email" type="text" value=""
                      placeholder="Your Email" required/></span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <span className="text-input margin_bottom0"><input className='w-full p-[20px_15px] border-none m-[10px]' name="phone" type="text" value=""
                      placeholder="Phone Number" required/></span>
                  </label>
                </div>
                <div className="">
                  <label>
                    <span className="text-input margin_bottom0"><textarea name="message" className='w-full p-[20px_15px] border-none m-[10px]' placeholder="Message"
                      required></textarea></span>
                  </label>
                </div>
                <div className="">
                  <div className="form-group">
                    Validation code:
                    <img src="captcha.php?rand=9999" id="captchaimg" /><br />
                    <label >Enter the code above here :</label>
                    <input id="captcha_code" className='w-full' name="captcha_code" type="text" required />

                      Can't read the image? click<a href="javascript: refreshCaptcha();">here</a>
                      to refresh.
                  </div>
                </div>
              </div>
              <button
                className="submit w-100"
                type="submit" name="submit">SEND A MESSAGE!
              </button>
            </form>
          </div>
        </div>
      </section>
      <div id="google_map" className="google_map">
    <div className="map_container clearfix">
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d286794.41965740133!2d73.052167294131!3d19.186738516116435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e2aa9b5ba1884c6!2sAthena%20Technology!5e0!3m2!1sen!2sus!4v1672482397674!5m2!1sen!2sus" width="100%" height="550px" loading="lazy" className='border-0'></iframe>
        </div>
    </div>
</div>
    </>
  )
}
