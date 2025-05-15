import React from 'react';
import { CalendarClock, MapPin } from 'lucide-react';
import { Event } from '../types';
import Button from './Button';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-3">
          {event.isUpcoming && (
            <span className="inline-block bg-space-accent text-space-dark text-xs font-bold py-1 px-2 rounded-full mb-2">
              Upcoming
            </span>
          )}
          <h3 className="text-white text-xl font-bold">{event.title}</h3>
        </div>
        
        <div className="flex items-center text-gray-300 text-sm mb-2">
          <CalendarClock size={16} className="mr-2" />
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center text-gray-300 text-sm mb-4">
          <MapPin size={16} className="mr-2" />
          <span>{event.location}</span>
        </div>
        
        <p className="text-gray-300 mb-4">{event.description}</p>
        
        {event.isUpcoming && event.registrationLink && (
          <Button variant="outline" size="sm">
            Register Now
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;