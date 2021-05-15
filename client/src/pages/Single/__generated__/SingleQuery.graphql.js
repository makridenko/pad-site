/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SingleQueryVariables = {|
  singleID: string
|};
export type SingleQueryResponse = {|
  +release: ?{|
    +cover: string,
    +title: string,
    +humanDate: ?string,
    +label: ?string,
    +vkLink: string,
    +appleMusicLink: string,
    +spotifyLink: string,
    +youtubeLink: string,
    +deezerLink: string,
    +yandexMusicLink: string,
    +songSet: {|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +title: string,
          +lyrics: ?string,
        |}
      |}>
    |},
  |}
|};
export type SingleQuery = {|
  variables: SingleQueryVariables,
  response: SingleQueryResponse,
|};
*/


/*
query SingleQuery(
  $singleID: ID!
) {
  release(id: $singleID) {
    cover
    title
    humanDate
    label
    vkLink
    appleMusicLink
    spotifyLink
    youtubeLink
    deezerLink
    yandexMusicLink
    songSet {
      edges {
        node {
          id
          title
          lyrics
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "singleID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "singleID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cover",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "humanDate",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "vkLink",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "appleMusicLink",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "spotifyLink",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "youtubeLink",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deezerLink",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "yandexMusicLink",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "SongNodeConnection",
  "kind": "LinkedField",
  "name": "songSet",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SongNodeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SongNode",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            (v12/*: any*/),
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "lyrics",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReleaseNode",
        "kind": "LinkedField",
        "name": "release",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v13/*: any*/)
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
    "name": "SingleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReleaseNode",
        "kind": "LinkedField",
        "name": "release",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v13/*: any*/),
          (v12/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "040a96b5351801bde6288327569e99c9",
    "id": null,
    "metadata": {},
    "name": "SingleQuery",
    "operationKind": "query",
    "text": "query SingleQuery(\n  $singleID: ID!\n) {\n  release(id: $singleID) {\n    cover\n    title\n    humanDate\n    label\n    vkLink\n    appleMusicLink\n    spotifyLink\n    youtubeLink\n    deezerLink\n    yandexMusicLink\n    songSet {\n      edges {\n        node {\n          id\n          title\n          lyrics\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b22c62d76c2d3a0035c2a151730dce24';

module.exports = node;
