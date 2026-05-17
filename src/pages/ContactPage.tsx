import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., Formspree, Netlify forms, or custom API)
    console.log("Sent Email:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value, e.target.name);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Email Card */}
            <a
              href="mailto:kyran.lewis14@gmail.com"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-amber-200 group flex flex-col items-center text-center space-y-3"
            >
              <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Email Me</h3>
                <p className="text-xs text-gray-500 mt-1">
                  kyran.lewis14@gmail.com
                </p>
              </div>
              <span className="text-xs font-bold text-amber-600 group-hover:text-amber-700 inline-flex items-center gap-1 pt-1">
                Send Email{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>

            {/* Telephone Card */}
            <a
              href="tel:07428791005"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-amber-200 group flex flex-col items-center text-center space-y-3"
            >
              <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                  {/* Telephone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Call Me</h3>
                <p className="text-xs text-gray-500 mt-1">07428 791005</p>
              </div>
              <span className="text-xs font-bold text-amber-600 group-hover:text-amber-700 inline-flex items-center gap-1 pt-1">
                Let's Talk{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/kyran-lewis-software-engineer/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-amber-200 group flex flex-col items-center text-center space-y-3"
            >
              <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">LinkedIn</h3>
                <p className="text-xs text-gray-500 mt-1">
                  /in/kyran-lewis-software-engineer/
                </p>
              </div>
              <span className="text-xs font-bold text-amber-600 group-hover:text-amber-700 inline-flex items-center gap-1 pt-1">
                Connect{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          </section>

          {/* ========================================== */}
          {/* EMAIL FORM SECTION */}
          {/* ========================================== */}
          <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Header sub-block */}
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <span>✉️</span> Drop Me An Email
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                {/* Email address input */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Subject input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity: Full Stack Developer position"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Message textarea input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timing, and details..."
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition resize-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Submit Action Block */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 cursor-pointer active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
