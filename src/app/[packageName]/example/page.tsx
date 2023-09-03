import PackageReactDatepickerExample from '@/components/package/react-datepicker/example';
import PackageReactFullpageExample from '@/components/package/react-fullpage/Example';

type Props = {
  params: {
    packageName: string;
  };
};

export async function generateStaticParams() {
  const packageList = ['react-fullpage', 'react-datepicker'];

  return packageList.map((packageName) => ({
    packageName,
  }));
}

async function PackageReactFullpagePage({ params }: Props) {
  return (
    <>
      {params.packageName === 'react-fullpage' && (
        <PackageReactFullpageExample />
      )}
      {params.packageName === 'react-datepicker' && (
        <PackageReactDatepickerExample />
      )}
    </>
  );
}

export default PackageReactFullpagePage;
