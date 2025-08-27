// All image assets are centralized here for easy management.
// In a no-bundler setup, we export the string paths to the images directly,
// as browsers cannot handle direct image imports in JavaScript modules.

// These paths are absolute from the root of the server, where index.html is located.
// Please ensure you have an 'images' folder at the root of your project
// containing all the necessary image files.

// Hero Section
export const profilePic = '/images/profilepic.jpg';

// About Section
export const aboutMeImage = './images/about-me.jpg';

// Portfolio Section
export const portfolioImages = {
  project1: '../images/about-me.jpg',
  project2: '/images/profilepic.jpg',
  project3: '/images/project3.jpg',
  project4: '/images/project4.jpg',
  project5: '/images/project5.jpg',
  project6: '/images/project6.jpg',
};

// Testimonials Section
export const testimonialAvatars = {
  client1: '/images/client1.jpg',
  client2: '/images/client2.jpg',
  client3: '/images/client3.jpg',
};
