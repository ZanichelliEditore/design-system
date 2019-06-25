#!/bin/bash
cd ../myzanichelli_components_library/web-components-library/
yarn pack 
cd ../../myzanichelli_dashboard
yarn remove zanichelli-web-components-library
yarn add ../myzanichelli_components_library/web-components-library/zanichelli-web-components-library-v*.tgz