import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="privacy-policy">
        <h1>Privacy Policy</h1>
        <h2>Introduction</h2>
        <p>Welcome to Vereev! We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your personal information when you use the Vereev app. By using our app, you agree to the terms of this privacy policy.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Information that identifies you, such as your name, email address, phone number, and any other information you provide during registration or through the use of our app.</li>
          <li><strong>Usage Data:</strong> Information about how you use our app, such as your interactions, preferences, and settings.</li>
          <li><strong>Photos and Media:</strong> Access to your device's camera and storage for the purpose of capturing and uploading images for product and authentication.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Authenticate items and provide certification.</li>
          <li>Communicate with you, including sending updates and notifications.</li>
          <li>Personalize your experience on our app.</li>
          <li>Conduct research and analysis to enhance our app and services.</li>
          <li>Ensure the security of our app and users.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
          <li><strong>Legal Authorities:</strong> When required by law or in response to valid requests by public authorities, such as law enforcement or government agencies.</li>
          <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
        </ul>

        <h2>4. Your Rights and Choices</h2>
        <p>You have certain rights regarding your personal information, including:</p>
        <ul>
          <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request that we correct or update any inaccurate or incomplete personal information.</li>
          <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal exceptions.</li>
          <li><strong>Objection:</strong> You can object to the processing of your personal information in certain circumstances.</li>
          <li><strong>Withdrawal of Consent:</strong> If we are processing your personal information based on your consent, you can withdraw your consent at any time.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the contact details provided below.</p>

        <h2>5. Permissions</h2>
        <p>The Vereev app requires the following permissions:</p>
        <ul>
          <li>Internet: To access the internet for our app services.</li>
          <li>Read External Storage: To read files from your device's storage for uploading images for authentication.</li>
          <li>Write External Storage: To save files to your device's storage.</li>
          <li>Camera: To capture images for upload products images.</li>
        </ul>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions or concerns about this privacy policy or our data practices, please contact us at:</p>
        <p>Email: support@vereev.com</p>

        <p>By using the Vereev app, you agree to this privacy policy. If you do not agree with this policy, please do not use our app.</p>
      </div>
    </>
  );
}

export default App;
