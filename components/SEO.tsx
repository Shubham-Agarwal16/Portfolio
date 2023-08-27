import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      title="Shubham's site"
      description="The official site of Shubham Agarwal, a software engineer and computer science enthusiast."
      openGraph={{
        site_name: 'shubhamagarwal.dev'
      }}
      twitter={{
        handle: '@Shubham_16ag',
        cardType: 'summary_large_image'
      }}
    />
  );
};
