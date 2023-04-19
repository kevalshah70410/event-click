import React from "react";

function Websitedescription() {
  return (
    <div className="bg-white">
      {/* <!-- component --> */}
      <div className="mx-auto max-w-8xl px-4 py-8 pt-0">
        <section className="rounded-lg p-8  ">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <img
              alt="Man"
              src="https://i.pinimg.com/564x/49/61/5b/49615b8c739a65ea492b18368ae9b96f.jpg"
              className="aspect-square w-full rounded-lg object-cover"
            />

            <blockquote className="sm:col-span-2 ">
              <p className="text-2xl text-left pl-2 pb-5">Customer Features</p>
              <p className="text-lg font-medium  text-left text-gray-500 sm:ml-3">
                We are provide the professional photographers who specialize in
                capturing your special moments and creating memories that will
                last a lifetime.
              </p>
              <p className="text-lg font-medium mt-5  text-left text-gray-500 sm:ml-3">
                Our website create a platform that is dedicated to bringing you
                the best photography services in the industry. Whether you need
                a photographer for your wedding, engagement session, or any
                other special occasion, we have got you covered.
              </p>
              <p className="text-lg font-medium mt-5  text-left text-gray-500 sm:ml-3">
                You can easily find the best photographers by using the
                filtering. Filtering like event, area and experience of
                photographer.You can also check the photographer portfolio and
                pricing details. You can also book them for your event.
              </p>

              {/* <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-gray-500 sm:ml-3">
                  <strong>Justin Harrison</strong>, Beatle Inc.
                </p>
              </cite> */}
            </blockquote>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-8xl px-4 py-8 pt-0 bg-blue-500/10">
        <section className="rounded-lg p-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <blockquote className="sm:col-span-2 ">
              <p className="text-2xl text-left pl-2 pb-5">
                Photographer Features
              </p>
              <p className="text-lg font-medium  text-left text-gray-500 sm:ml-3">
                We are providing the best platfrom to the all photographer. By
                usiing this platform photographer can easily grow their business
                and show their talent to the customer.
              </p>
              <p className="text-lg font-medium mt-5 text-left text-gray-500 sm:ml-3">
                We are providing the one dashboard to the photographer.By using
                the dashboard photographer can see the upcoming events and past
                event and also update their portfolio .This is very nice feature
                to the photographer for managing the events.
              </p>
              {/* <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-gray-500 sm:ml-3">
                  <strong>Justin Harrison</strong>, Beatle Inc.
                </p>
              </cite> */}
            </blockquote>
            <img
              alt="Man"
              src="https://plus.unsplash.com/premium_photo-1664475045943-f09493b78159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Websitedescription;
