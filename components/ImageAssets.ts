// NOTE: For these images to load, you must create a public GitHub repository
// named 'abubakarwebteck-portfolio-assets' under your 'ranaab173' account
// and upload your image files to the main branch.

const GITHUB_ASSETS_URL = 'https://cdn.jsdelivr.net/gh/ranaab173/abubakarwebteck-portfolio-assets@main/images/';

export const ImageAssets = {
  profilePic: `${GITHUB_ASSETS_URL}profile-pic.jpg`,
  aboutMe: `${GITHUB_ASSETS_URL}about-me.jpg`,
  portfolio: {
    card1: `${GITHUB_ASSETS_URL}portfolio-card1.jpg`,
    card2: `${GITHUB_ASSETS_URL}portfolio-card2.jpg`,
    card3: `${GITHUB_ASSETS_URL}portfolio-card3.jpg`,
    card4: `${GITHUB_ASSETS_URL}portfolio-card4.jpg`,
  },
  testimonials: {
    janeDoe: `${GITHUB_ASSETS_URL}testimonial-jane.jpg`,
    johnSmith: `${GITHUB_ASSETS_URL}testimonial-john.jpg`,
    emilyWhite: `${GITHUB_ASSETS_URL}testimonial-emily.jpg`,
  },
};