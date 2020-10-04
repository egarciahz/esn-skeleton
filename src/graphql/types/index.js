import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const loaded = loadFilesSync(
    path.join(__dirname, '.'), {
    recursive: true,
    extensions: ['gql']
});

module.exports = mergeTypeDefs(loaded);
