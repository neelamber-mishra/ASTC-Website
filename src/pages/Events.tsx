import React, { useRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import { events } from "../data/events";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Events: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  // Scrolls to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    if (filter === "upcoming") return event.isUpcoming;
    if (filter === "past") return !event.isUpcoming;
    return true;
  });

  // --- EmailJS Integration for Event Suggestion Form ---
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [messageStatus, setMessageStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Retrieve EmailJS credentials from environment variables
  // IMPORTANT: Ensure VITE_EMAILJS_EVENT_SUGGESTION_TEMPLATE_ID is defined in your .env
  const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID2 || "";
  const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID3 || "";
  const PUBLIC_KEY: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY2 || "";

  /**
   * Handles the form submission for event suggestions to send an email via EmailJS.
   * @param e The form submission event.
   */
  const sendEventSuggestion = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!formRef.current) {
      console.error("Form reference is null. Cannot send event suggestion.");
      setMessageStatus("error");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS credentials are not configured for event suggestion. Please check your .env file."
      );
      setMessageStatus("error");
      alert(
        "Event suggestion feature is not configured. Please contact the website administrator."
      );
      return;
    }

    setIsSending(true); // Disable button and show loading
    setMessageStatus("idle"); // Reset previous message status

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      console.log(
        "Event Suggestion EmailJS SUCCESS!",
        result.status,
        result.text
      );
      setMessageStatus("success"); // Show success message
      formRef.current.reset(); // Clear form fields
    } catch (error: any) {
      console.error("Event Suggestion EmailJS FAILED...", error);
      setMessageStatus("error"); // Show error message
      if (error && typeof error === "object" && "text" in error) {
        console.error("Error details:", error.text);
      }
    } finally {
      setIsSending(false); // Re-enable button
    }
  };
  // --- End EmailJS Integration ---

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Events
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="h-1 w-20 bg-space-accent"></div>
            </motion.div>
            <motion.p
              className="text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our exciting range of events, from technical workshops
              and competitions to stargazing nights and guest lectures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex justify-center">
            <div className="inline-flex p-1 bg-space-primary/30 backdrop-blur-sm rounded-lg">
              {[
                { label: "All Events", value: "all" },
                { label: "Upcoming", value: "upcoming" },
                { label: "Past Events", value: "past" },
              ].map((option) => (
                <button
                  key={option.value}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    filter === option.value
                      ? "bg-space-accent text-space-dark"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() =>
                    setFilter(option.value as "all" | "upcoming" | "past")
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No events to display.</p>
            </div>
          )}
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Event Calendar"
            subtitle="Stay up to date with all our scheduled activities"
            light={true}
          />

          <motion.div
            className="mt-12 bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-white text-xl mb-4">Coming Soon!</h3>
              <p className="text-gray-300">
                We're working on integrating a live calendar to make it easier
                for you to keep track of all our events. Check back soon!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Suggest an Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Suggest an Event"
              subtitle="Have an idea for a space-related event? We'd love to hear it!"
              light={true}
            />

            <motion.div
              className="mt-8 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Message Status Feedback */}
              {messageStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 text-green-300 border border-green-500 rounded-md p-4 mb-4 text-center"
                >
                  Thank you for your suggestion! We've received your idea and
                  will consider it.
                </motion.p>
              )}
              {messageStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 text-red-300 border border-red-500 rounded-md p-4 mb-4 text-center"
                >
                  Failed to send your suggestion. Please try again later.
                </motion.p>
              )}

              <form
                ref={formRef}
                onSubmit={sendEventSuggestion}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="from_name" className="block text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name" // Name for EmailJS template
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email" // Name for EmailJS template
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="event_title"
                    className="block text-white mb-2"
                  >
                    Event Title *
                  </label>
                  <input
                    type="text"
                    id="event_title"
                    name="event_title" // Name for EmailJS template
                    required // Make title required for suggestions
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="event_description"
                    className="block text-white mb-2"
                  >
                    Event Description *
                  </label>
                  <textarea
                    id="event_description"
                    name="event_description" // Name for EmailJS template
                    required // Make description required for suggestions
                    rows={4}
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-space-accent text-space-dark font-medium rounded-md hover:bg-space-accent/90 transition-colors"
                    disabled={isSending} // Disable button during submission
                  >
                    {isSending ? "Submitting..." : "Submit Suggestion"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
