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

        <div className="text-center mb-6">
          <h2 className="font-serif text-lg md:text-xl font-bold text-certificate-text tracking-wide">
            DIGITAL HUB SERVICES PRIVATE LIMITED
          </h2>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-certificate-text mt-2 tracking-wider">
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
