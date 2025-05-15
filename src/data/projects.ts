import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "CubeSat Development Project",
    description: "Designing and building a small satellite for atmospheric data collection. The project includes designing the structure, power systems, and communication modules.",
    image: "https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Satellites",
    team: ["Dr. Anil Kumar", "Rohit Sharma", "Arjun Singh"]
  },
  {
    id: 2,
    title: "High Altitude Balloon",
    description: "Launching a balloon to the stratosphere with sensors to collect data about atmospheric conditions at different altitudes.",
    image: "https://images.pexels.com/photos/144428/pexels-photo-144428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Atmospheric Research",
    team: ["Priya Patel", "Karan Mishra"]
  },
  {
    id: 3,
    title: "Aerodynamics Research",
    description: "Studying airflow patterns around various wing designs to optimize aircraft efficiency.",
    image: "https://images.pexels.com/photos/76966/pexels-photo-76966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Aeronautics",
    team: ["Karan Mishra", "Sneha Gupta"]
  },
  {
    id: 4,
    title: "Mars Rover Prototype",
    description: "Building a scaled model of a Mars rover with autonomous navigation capabilities for rough terrain.",
    image: "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Robotics",
    team: [""],
  }
];