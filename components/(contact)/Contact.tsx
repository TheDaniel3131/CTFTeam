"use client";

import axios from "axios";
import React, { useState, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { EmailParams } from "@/lib/types/EmailParams";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "myst3r10us",
        message: message,
      } as EmailParams,
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully!");
      window.alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email.");
      window.alert("Failed to send email.");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 py-4 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-850/70 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-slate-700"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Contact Us
        </h2>
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Enter Your Message Here"
              value={message}
              onChange={handleMessageChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:from-sky-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all"
            >
              Send Email
            </button>
          </div>
        </div>
      </form>
      <ToastContainer position="bottom-left" />
    </div>
  );
};

export default ContactPage;
