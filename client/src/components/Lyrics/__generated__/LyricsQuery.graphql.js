/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LyricsQueryVariables = {|
  songID: string
|};
export type LyricsQueryResponse = {|
  +song: ?{|
    +lyrics: ?string
  |}
|};
export type LyricsQuery = {|
  variables: LyricsQueryVariables,
  response: LyricsQueryResponse,
|};
*/


/*
query LyricsQuery(
  $songID: ID!
) {
  song(id: $songID) {
    lyrics
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "songID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "songID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lyrics",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LyricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SongNode",
        "kind": "LinkedField",
        "name": "song",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LyricsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SongNode",
        "kind": "LinkedField",
        "name": "song",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "86e58b9cdd12ac0baa978b7458a74d42",
    "id": null,
    "metadata": {},
    "name": "LyricsQuery",
    "operationKind": "query",
    "text": "query LyricsQuery(\n  $songID: ID!\n) {\n  song(id: $songID) {\n    lyrics\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e753536ec3cf64ad754da9eea8d78d22';

module.exports = node;
