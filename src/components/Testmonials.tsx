const Testimonials =()=>{
    return(
              <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mt-4 mb-4">The Clients</h2>
            <p className="text-av-gray text-[22px] max-w-2xl mx-auto">
              Hear from our community members who transformed their careers with our resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-medium">Jennifer Davis</h4>
                  <p className="text-sm text-av-gray">Data Scientist at Tech Corp</p>
                </div>
              </div>
              <p className="text-av-gray">
                "The machine learning courses helped me transition from a business analyst to a data scientist role. The practical projects were especially valuable."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  MT
                </div>
                <div>
                  <h4 className="font-medium">Michael Thompson</h4>
                  <p className="text-sm text-av-gray">ML Engineer at StartupXYZ</p>
                </div>
              </div>
              <p className="text-av-gray">
                "I had zero coding experience when I started. Now I'm working as an ML engineer, all thanks to the step-by-step curriculum and supportive community."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-av-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  SP
                </div>
                <div>
                  <h4 className="font-medium">Sarah Parker</h4>
                  <p className="text-sm text-av-gray">Analytics Manager at Fortune 500</p>
                </div>
              </div>
              <p className="text-av-gray">
                "The advanced analytics courses helped me lead data initiatives at my company. The ROI of these courses has been incredible for my career growth."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Testimonials