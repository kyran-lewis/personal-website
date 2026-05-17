import { useState } from "react";
import SmallCard from "../components/SmallCard";
import EmailForm from "../components/EmailForm";

function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-black text-gray-900 mb-4 text-center tracking-tight">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 max-w-md mx-auto mb-12 text-sm leading-relaxed">
          Have an exciting project, a role opportunity, or just want to chat
          about software architecture? Drop me a line!
        </p>

        <div className="space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SmallCard
              icon={"📧"}
              title="Email Me"
              subTitle="kyran.lewis14@gmail.com"
              action="Send Email"
              link={"mailto:kyran.lewis14@gmail.com"}
            />
            <SmallCard
              icon={"📞"}
              title="Call Me"
              subTitle="07428 791005"
              action="Let's Talk"
              link="tel:07428791005"
            />
            <SmallCard
              icon={"🏢"}
              title="LinkedIn"
              subTitle="/in/kyran-lewis-software-engineer/"
              action="Let's Connect"
              link="https://www.linkedin.com/in/kyran-lewis-software-engineer/"
            />
          </section>

          <EmailForm />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
