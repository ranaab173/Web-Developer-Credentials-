// All image assets are centralized here for easy management.
// In a no-bundler setup, we export the string paths to the images directly,
// as browsers cannot handle direct image imports in JavaScript modules.

// These paths are relative to the location of index.html.
// This approach is robust and works whether you are using a local server
// or opening the HTML file directly. Please ensure you have an 'images' folder
// at the root of your project (in the same directory as index.html)
// containing all the necessary image files.

// Hero Section
export const profilePic = 'images/profilepic.jpg';

// About Section
export const aboutMeImage = 'images/about-me.jpg';

// Portfolio Section
export const portfolioImages = {
  card1: 'images/card1.jpg',
  card2: 'images/card2.jpg',
  card3: 'images/card3.jpg',
  card4: 'images/card4.jpg',
};

// Testimonials Section
export const testimonialAvatars = {
  janeDoe: 'images/jane-doe.jpg',
  johnSmith: 'images/john-smith.jpg',
  emilyWhite: 'images/emily-white.jpg',
};
