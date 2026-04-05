import type {ReactNode} from 'react';
import DocItem from '@theme-original/DocItem';
import type DocItemType from '@theme/DocItem';
import type {WrapperProps} from '@docusaurus/types';
import VisitorCounter from '@site/src/components/VisitorCounter';
import UtterancesComments from '@site/src/components/UtterancesComments';

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  return (
    <>
      <DocItem {...props} />
      <VisitorCounter mode="page" testId="doc-visitor-counter" />
      <UtterancesComments />
    </>
  );
}
