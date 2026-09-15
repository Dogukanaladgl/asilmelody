import Image, { type ImageProps } from "next/image";

type SharpImageProps = Omit<ImageProps, "quality"> & {
  quality?: number;
};

/**
 * Yüksek kaliteli görseller — varsayılan quality 100,
 * retina için doğru sizes ile kullanılır.
 */
export function SharpImage({
  quality = 100,
  alt = "",
  ...props
}: SharpImageProps) {
  return (
    <Image
      alt={alt}
      quality={quality}
      {...props}
      className={[props.className, "sharp-media"].filter(Boolean).join(" ")}
    />
  );
}
