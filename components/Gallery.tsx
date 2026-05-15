import { getGallery } from "@/lib/contentful";
import GalleryClient from "./GalleryClient";

export default async function Gallery() {
  const { eyebrow, heading, items } = await getGallery();

  return (
    <GalleryClient
      eyebrow={eyebrow}
      heading={heading}
      items={items}
    />
  );
}
