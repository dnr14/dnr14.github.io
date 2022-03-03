declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}
declare module '*.jpeg';
declare module '*.jpeg';
declare module '*.gif' {
  const value: string;
  export default value;
}

declare type Types = 'about' | 'top' | 'skills' | 'archiving' | 'projects';
declare type HandleTopFocuseFn = () => void;
declare type DivRef = React.ForwardedRef<HTMLDivElement>;

declare type ProjectsTitleProps = {
  title: string | React.FC;
  subTitle?: string | React.FC;
  period: string;
};

declare type ProjectCardProps = ProjectsTitleProps & {
  children: JSX.Element[];
};
