const AssetImage = ({ image, className = '', loading = 'lazy' }) => {
  if (!image) return null;

  return (
    <figure className={`asset-image ${className}`.trim()}>
      <img
        src={image.src}
        alt={image.alt}
        loading={loading}
        decoding="async"
        style={{ objectFit: image.fit || 'cover' }}
      />
    </figure>
  );
};

export default AssetImage;
