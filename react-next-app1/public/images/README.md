# Background Images

This directory contains background images used by the application's background utilities.

## Usage

Images in this directory can be referenced in `utils/background.ts` using relative paths:

```typescript
image: {
  url: '/images/nature-bg.jpg',
  position: 'center',
  size: 'cover'
}
```

## Supported Formats

- JPG/JPEG
- PNG
- WebP
- GIF

## Recommended Sizes

- **Full-screen backgrounds**: 1920x1080px or larger
- **Hero sections**: 1200x800px minimum
- **Mobile optimization**: Consider responsive images

## File Naming

Use descriptive names with kebab-case:
- `nature-bg.jpg`
- `city-skyline.png`
- `ocean-sunset.webp`