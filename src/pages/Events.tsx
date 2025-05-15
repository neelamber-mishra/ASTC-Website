import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  
  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return event.isUpcoming;
    if (filter === 'past') return !event.isUpcoming;
    return true;
  });

  React.useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

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
              Discover our exciting range of events, from technical workshops and competitions to stargazing nights and guest lectures.
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
                { label: 'All Events', value: 'all' },
                { label: 'Upcoming', value: 'upcoming' },
                { label: 'Past Events', value: 'past' }
              ].map((option) => (
                <button
                  key={option.value}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    filter === option.value
                      ? 'bg-space-accent text-space-dark'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setFilter(option.value as 'all' | 'upcoming' | 'past')}
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
                We're working on integrating a live calendar to make it easier for you to keep track of all our events.
                Check back soon!
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
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label htmlFor="event_title" className="block text-white mb-2">Event Title</label>
                  <input 
                    type="text" 
                    id="event_title"
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                <div>
                  <label htmlFor="event_description" className="block text-white mb-2">Event Description</label>
                  <textarea 
                    id="event_description"
                    rows={4}
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-space-accent text-space-dark font-medium rounded-md hover:bg-space-accent/90 transition-colors"
                  >
                    Submit Suggestion
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