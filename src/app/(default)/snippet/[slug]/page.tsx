import { Metadata } from 'next';
import { getSnippet, getSnippetList } from '@/services/snippet';
import SnippetViewer from '@/components/snippet/Viewer';
import Giscus from '@/components/common/Giscus';
import AuthorProfile from '@/components/author/Profile';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const { snippet } = await getSnippet(slug);
  const title = `${snippet.title} of ${snippet.categories.join(', ')}`;

  return {
    title,
    description: title,
    openGraph: {
      title,
      description: title,
      images: process.env.OG_IMAGE,
    },
  };
}

export async function generateStaticParams() {
  const snippetList = await getSnippetList();

  return snippetList.map((snippet) => ({
    slug: snippet.slug,
  }));
}

const SnippetViewPage = async ({ params }: Props) => {
  const { slug } = params;
  const { snippet } = await getSnippet(slug);

  return (
    <>
      <SnippetViewer
        snippetData={{
          ...snippet,
        }}
      />
      <AuthorProfile postDetail />
      <Giscus />
    </>
  );
};

export default SnippetViewPage;
