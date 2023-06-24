"use client";

export default function Team() {
  return (
    <div>
      <section className="border-2">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-black capitalize lg:text-3xl">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium  ">Sibendra Timalsina</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium ">Aananda Bhusal</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto "
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium ">Deepak Rana Magar</h3>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto "
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium ">Sachit Khadka</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
