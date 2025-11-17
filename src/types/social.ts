export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "youtube"
  | "line"
  | "email";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: string;
  ariaLabel: string;
}
