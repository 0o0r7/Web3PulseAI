const ROOT_URL = process.env.NEXT_PUBLIC_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

export const minikitConfig = {
  accountAssociation: {
    headers: "***",
    payload: "***",
    signature: "***"
  },
  miniapp: {
    version: "1",
    name: "Web3 Content Lab",
    description: "AI-powered content generation and analysis tool for Web3 projects",
    screenshotUrls: [ `${ROOT_URL}/screenshot.png` ],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homepageUrl: `${ROOT_URL}/`,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    redirectUrl: `${ROOT_URL}/`,
    tags: [ "web3", "content", "ai", "twitter", "marketing" ],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    ogTitle: "Web3PulseAI - Content Generation for Web3",
    ogDescription: "AI-powered content analysis and generation for blockchain projects",
    ogImageUrl: `${ROOT_URL}/og-image.png`
  }
} as const;
