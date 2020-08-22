import React from 'react';
import { builder, BuilderComponent } from '@builder.io/react';

const builderIoApiKey = process.env.REACT_APP_BUILDER_IO_API_KEY;
const builderDemoPageEntry = process.env.REACT_APP_BUILDER_DEMO_PAGE_ENTRY

if (builderIoApiKey) {
  builder.init(builderIoApiKey);
}

const App = () => (
  <BuilderComponent
    model="page"
          entry={builderDemoPageEntry} />
);

export default App;
