import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2x1/tight sm:text-4x1',
    h2: 'text-2x1/tight sm:text-4x1'
  };

  const commonClasses = 'font-extrabold';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
