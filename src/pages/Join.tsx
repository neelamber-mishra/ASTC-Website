import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Join: React.FC = () => {
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
              Join ASTC
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
              Become part of a community that's passionate about space and aeronautics.
              Explore the cosmos with us!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Membership Benefits" 
            subtitle="Being part of ASTC opens doors to a world of opportunities"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Hands-on Experience",
                description: "Work on real projects like satellite development, model rocketry, and aerospace research."
              },
              {
                title: "Networking Opportunities",
                description: "Connect with industry professionals, researchers, and like-minded students."
              },
              {
                title: "Workshops & Training",
                description: "Access to specialized workshops, technical training, and educational resources."
              },
              {
                title: "Competition Participation",
                description: "Represent IIT ISM Dhanbad in national and international aerospace competitions."
              },
              {
                title: "Leadership Development",
                description: "Opportunities to lead projects and events, developing crucial management skills."
              },
              {
                title: "Research Opportunities",
                description: "Collaborate on research projects with potential for publication and recognition."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 bg-space-accent/20 p-2 rounded-full">
                    <Check size={20} className="text-space-accent" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 md:py-24 bg-space-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="Join Us Today" 
              subtitle="Fill out the form below to apply for membership"
              light={true}
            />
            
            <motion.div
              className="mt-8 bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-white mb-2">First Name *</label>
                    <input 
                      type="text" 
                      id="first_name"
                      required
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-white mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="last_name"
                      required
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="student_id" className="block text-white mb-2">Student ID *</label>
                  <input 
                    type="text" 
                    id="student_id"
                    required
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-white mb-2">Department/Branch *</label>
                  <select 
                    id="department"
                    required
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science & Engineering</option>
                    <option value="Electrical">Electrical Engineering</option>
                    <option value="Mechanical">Mechanical Engineering</option>
                    <option value="Civil">Civil Engineering</option>
                    <option value="Mining">Mining Engineering</option>
                    <option value="Petroleum">Petroleum Engineering</option>
                    <option value="Chemical">Chemical Engineering</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-white mb-2">Year of Study *</label>
                  <select 
                    id="year"
                    required
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="interests" className="block text-white mb-2">Areas of Interest *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Rocketry", "Satellite Development", "Astronomy", "Robotics", 
                      "Aerospace Engineering", "Space Science", "Astrophysics", "Other"
                    ].map((interest) => (
                      <div key={interest} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`interest_${interest}`}
                          name="interests"
                          value={interest}
                          className="mr-2 h-4 w-4 text-space-accent focus:ring-space-accent bg-space-dark/50 border-white/10"
                        />
                        <label htmlFor={`interest_${interest}`} className="text-gray-300">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="motivation" className="block text-white mb-2">Why do you want to join ASTC? *</label>
                  <textarea 
                    id="motivation"
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-space-dark/50 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-space-accent"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <Button variant="primary" size="lg" type="submit">
                    Submit Application
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Ways to Get Involved */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Other Ways to Get Involved" 
            subtitle="Not ready for full membership? There are still ways to be part of our community"
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Attend Events",
                description: "Our workshops, guest lectures, and stargazing nights are open to all students. Follow our social media to stay updated on upcoming events."
              },
              {
                title: "Volunteer",
                description: "Help us organize and run events without committing to full membership. It's a great way to see if ASTC is a good fit for you."
              },
              {
                title: "Collaborate",
                description: "Have a project idea or research proposal? Reach out to us for potential collaboration opportunities, even as a non-member."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;