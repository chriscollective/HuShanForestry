export type SocialPlatform = "facebook" | "instagram" | "youtube";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: string;
  ariaLabel: string;
}
