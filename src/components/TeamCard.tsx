import React from 'react';
import { TeamMember } from '../types';
import { motion } from 'framer-motion';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-white text-xl font-bold">{member.name}</h3>
        <p className="text-space-accent font-medium text-sm mb-2">{member.role}</p>
        <p className="text-gray-300 text-sm">{member.description}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;