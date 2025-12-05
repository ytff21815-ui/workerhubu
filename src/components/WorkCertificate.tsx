import { Check, Award } from "lucide-react";

const WorkCertificate = () => {
  const verifications = [
    { label: "Identity Verification", status: "Completed" },
    { label: "Bank Verification", status: "Approved" },
    { label: "KYC Verification Required", status: "Active" },
    { label: "Digital Compliance Check", status: "Completed" },
  ];

  return (
    <div className="bg-certificate-bg rounded-xl p-1 shadow-card">
      <div className="border-4 border-certificate-border rounded-lg p-6 md:p-8 relative">
        {/* Gold corner decorations */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-certificate-border"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-certificate-border"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-certificate-border"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-certificate-border"></div>

        {/* Government of India Header */}
        <div className="text-center mb-4">
          {/* Ashoka Emblem */}
          <div className="flex justify-center mb-2">
            <svg width="60" height="70" viewBox="0 0 100 120" className="text-certificate-text">
              {/* Lion Capital Base */}
              <circle cx="50" cy="35" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
              {/* Three Lions representation */}
              <path d="M35 25 Q50 10 65 25" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 35 L35 25 L40 35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M45 35 L50 20 L55 35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M60 35 L65 25 L70 35" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Abacus with animals */}
              <rect x="25" y="48" width="50" height="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Dharma Chakra */}
              <circle cx="50" cy="52" r="3" fill="currentColor"/>
              {/* Lotus base */}
              <path d="M20 56 Q35 65 50 56 Q65 65 80 56" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M25 62 Q50 75 75 62" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              {/* Satyameva Jayate */}
              <text x="50" y="85" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">सत्यमेव जयते</text>
            </svg>
          </div>
          <p className="text-xs text-certificate-text/70 tracking-widest mb-1">भारत सरकार</p>
          <h3 className="font-serif text-sm md:text-base font-bold text-certificate-text tracking-wider">
            GOVERNMENT OF INDIA
          </h3>
          <p className="text-xs text-certificate-text/70 tracking-wide">Ministry of Electronics & Information Technology</p>
        </div>

        <div className="border-t border-certificate-border/50 my-4"></div>

        <div className="text-center mb-6">
          <h2 className="font-serif text-lg md:text-xl font-bold text-certificate-text tracking-wide">
            DIGITAL HUB SERVICES PRIVATE LIMITED
          </h2>
          <p className="text-xs text-certificate-text/70 mt-1">(Registered under Ministry of Corporate Affairs)</p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-certificate-text mt-3 tracking-wider">
            WORK AUTHORIZATION CERTIFICATE
          </h1>
        </div>

        <div className="flex justify-between text-sm text-certificate-text mb-6">
          <p>Certificate No. <span className="font-semibold">DHS/WAC/5724</span></p>
          <p>Date of Issue: <span className="font-semibold">03/12/2025</span></p>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-certificate-text/80 uppercase tracking-widest mb-2">This is to certify that</p>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-certificate-text">Gula Savithri</h3>
        </div>

        <p className="text-center text-certificate-text leading-relaxed mb-6">
          aged 24, resident of Telangana, India, and identified as Female, has successfully completed all required verification steps for work eligibility with Digital Hub Services Pvt. Ltd.
        </p>

        <div className="text-center mb-6">
          <p className="text-sm text-certificate-text/80">UPI ID:</p>
          <p className="font-semibold text-certificate-text">gulabunny0@oksbi</p>
        </div>

        <p className="text-center text-certificate-text mb-4">
          Accordingly, Gula Savithri is hereby authorized to perform
        </p>

        <div className="space-y-2 mb-6">
          {verifications.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-certificate-text">
              <Check className="w-5 h-5 text-certificate-border" />
              <span>{item.label} – <span className="font-medium">{item.status}</span></span>
            </div>
          ))}
        </div>

        <p className="text-center text-certificate-text mb-2">
          Accordingly, Gula Savithri is hereby authorized to perform
        </p>
        <p className="text-center font-serif text-xl font-bold text-certificate-text tracking-wide mb-1">
          DIGITAL OPERATIONS & REMOTE TASK WORK
        </p>
        <p className="text-center text-certificate-text text-sm mb-6">
          under the guidelines of Digital Hub Services Pvt. Ltd.
        </p>

        <div className="flex items-end justify-between mt-8">
          <div>
            <p className="font-semibold text-certificate-text text-sm tracking-wide">AUTHORIZED SIGNATORY</p>
            <div className="w-32 h-0.5 bg-certificate-text mt-2"></div>
          </div>
          
          {/* Verified Stamp */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full border-4 border-certificate-border flex items-center justify-center bg-certificate-bg">
              <div className="text-center">
                <Award className="w-5 h-5 text-certificate-border mx-auto mb-0.5" />
                <span className="text-xs font-bold text-certificate-border">VERIFIED</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-certificate-border border-dashed scale-110"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCertificate;
