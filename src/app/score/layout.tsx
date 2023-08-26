import DefaultTemplate from '@/components/template/Default';

interface Props {
  children: React.ReactNode;
}

function ScoreLayout({ children }: Props) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}

export default ScoreLayout;