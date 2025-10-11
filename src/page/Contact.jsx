import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="mb-32 mt-5">
        {/* Map */}
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1759.7283736906106!2d104.18096879641801!3d10.610262310124991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310837d8d7cc7a09%3A0xc915178cbccdb2cd!2sJenny%E2%80%98s%20Corner!5e0!3m2!1sen!2skh!4v1759497136829!5m2!1sen!2skh"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              {/* Form */}
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <form>
                  {/* Name */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                      id="exampleInput90"
                    />
                    <label
                      htmlFor="exampleInput90"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
                      id="exampleInput91"
                    />
                    <label
                      htmlFor="exampleInput91"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
                    >
                      Email address
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative mb-6">
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]"
                    >
                      Message
                    </label>
                  </div>

                  {/* Checkbox */}
                  <div className="mb-6 flex items-center">
                    <input
                      type="checkbox"
                      id="exampleCheck96"
                      defaultChecked
                      className="mr-2 h-[1.125rem] w-[1.125rem] border-neutral-300 rounded"
                    />
                    <label htmlFor="exampleCheck96" className="text-sm">
                      Send me a copy of this message
                    </label>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                  {/* Technical Support */}
                  <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          📞
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Technical support</p>
                        <p className="text-sm text-neutral-500">
                          Puppy169@gmail.com
                        </p>
                        <p className="text-sm text-neutral-500">
                          0123-456-789
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          🏠
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Address</p>
                        <p className="mb-2 font-bold">Kampot Province</p>
                      </div>
                    </div>
                  </div>

                  {/* Land Line */}
                  <div className="mb-12 w-full md:w-6/12 lg:w-full xl:w-6/12 px-3">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          ☎️
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Land Line</p>
                        <p className="text-neutral-500">012-345-678</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="w-full md:w-6/12 lg:w-full xl:w-6/12 px-3">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                          📱
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Mobile</p>
                        <p className="text-neutral-500">+885 12-345-678</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
