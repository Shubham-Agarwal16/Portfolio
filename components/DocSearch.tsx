import * as React from 'react';
import { DocSearch as AlogliaDocSearch } from '@docsearch/react';

import '@docsearch/css';

export const DocSearch = () => {
  return (
    <div className="ml-16">
      <AlogliaDocSearch
        appId="U2NPSDT474"
        indexName="shubhamagarwal"
        apiKey="ba757fd839eb715dd2e04a5ef8318950"
      />
    </div>
  );
};
