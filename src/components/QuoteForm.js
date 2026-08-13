import { useState } from 'react';

export const quoteInputClass =
  'w-full px-4 py-3 rounded-xl bg-[#FDF8F2] border border-[#D6B168]/30 focus:border-[#D6B168] focus:ring-2 focus:ring-[#D6B168]/30 transition-all duration-300 text-[#392e23] placeholder-[#392e23]/40';

/**
 * Quote request form shared between the ContactModal and the Contact page.
 * props:
 *  - variant: 'home' | 'wpc'
 *  - onSuccess: called after a valid submit (e.g. close modal / show thanks)
 *  - onCancel: optional — renders a Cancel button next to Submit
 */
export default function QuoteForm({ variant = 'home', onSuccess, onCancel }) {
  const [form, setForm] = useState(
    variant === 'wpc'
      ? { name: '', email: '', contactNumber: '', location: '', requirements: '', contactMethod: 'Email' }
      : { firstName: '', lastName: '', email: '', phone: '', service: '', package: '', message: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  const isWpc = variant === 'wpc';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isWpc ? (
        <>
          <div>
            <label className="block text-sm font-semibold text-[#392e23] mb-2">Name *</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className={quoteInputClass} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">E-Mail *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className={quoteInputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Contact Number *</label>
              <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} required placeholder="+971..." className={quoteInputClass} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#392e23] mb-2">Location *</label>
            <input type="text" name="location" value={form.location} onChange={handleChange} required placeholder="Enter your location" className={quoteInputClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#392e23] mb-2">Tell Us Your Requirements *</label>
            <textarea name="requirements" value={form.requirements} onChange={handleChange} rows="4" required placeholder="Tell us about your decking requirements..." className={quoteInputClass} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#392e23] mb-3">How To Contact You?</label>
            <div className="flex gap-4">
              {['Email', 'WhatsApp', 'Call'].map((method) => (
                <label key={method} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={form.contactMethod === method}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#D6B168]"
                  />
                  <span className="text-sm text-[#392e23]/80 group-hover:text-[#392e23] transition-colors">{method}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">First Name *</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Enter your first name" className={quoteInputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Last Name</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" className={quoteInputClass} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className={quoteInputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+971..." className={quoteInputClass} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Service Required</label>
              <select name="service" value={form.service} onChange={handleChange} className={quoteInputClass}>
                <option value="">Select a service</option>
                <option>Interior Design & Renovation</option>
                <option>Fit-Outs & Carpentry</option>
                <option>Air Conditioning & Electrical</option>
                <option>Landscaping & Outdoor</option>
                <option>Painting & Flooring</option>
                <option>Maintenance Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#392e23] mb-2">Package (Optional)</label>
              <select name="package" value={form.package} onChange={handleChange} className={quoteInputClass}>
                <option value="">Select a package</option>
                <option>Minimal Package</option>
                <option>Modern Package</option>
                <option>Luxury Package</option>
                <option>Signature Bespoke Package</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#392e23] mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell us about your project requirements..." className={quoteInputClass} />
          </div>
        </>
      )}

      <div className="flex gap-4 pt-2">
        <button type="submit" className="btn-primary flex-1 py-4 text-base">
          <span>Send Message</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn-outline flex-1 py-4 text-base">
            <span>Cancel</span>
          </button>
        )}
      </div>
    </form>
  );
}
