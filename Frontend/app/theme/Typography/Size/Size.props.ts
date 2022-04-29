const headerSizes = ['h1', 'h2'] as const;
const bodySizes = ['body1', 'body2', 'body3'] as const;
const captionSizes = ['caption1'] as const;

type headerType = typeof headerSizes[number];
type bodyType = typeof bodySizes[number];
type captionType = typeof captionSizes[number];

type SizeType = headerType | bodyType | captionType;

export type IFontSize = Record<SizeType, number>;

export default SizeType;
