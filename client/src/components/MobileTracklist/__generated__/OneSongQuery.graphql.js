/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OneSongQueryVariables = {|
  songID: string
|};
export type OneSongQueryResponse = {|
  +song: ?{|
    +lyrics: ?string
  |}
|};
export type OneSongQuery = {|
  variables: OneSongQueryVariables,
  response: OneSongQueryResponse,
|};
*/


/*
query OneSongQuery(
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
    "name": "OneSongQuery",
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
    "name": "OneSongQuery",
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
    "cacheID": "92ce1fb803efcd2e9f545bcd5e5b424d",
    "id": null,
    "metadata": {},
    "name": "OneSongQuery",
    "operationKind": "query",
    "text": "query OneSongQuery(\n  $songID: ID!\n) {\n  song(id: $songID) {\n    lyrics\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '87e6ba601b798224f53ba1d0ab861723';

module.exports = node;
