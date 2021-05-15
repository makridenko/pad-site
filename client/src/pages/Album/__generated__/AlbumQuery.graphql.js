/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AlbumQueryVariables = {|
  albumID: string
|};
export type AlbumQueryResponse = {|
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
        |}
      |}>
    |},
  |}
|};
export type AlbumQuery = {|
  variables: AlbumQueryVariables,
  response: AlbumQueryResponse,
|};
*/


/*
query AlbumQuery(
  $albumID: ID!
) {
  release(id: $albumID) {
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
    "name": "albumID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "albumID"
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
            (v3/*: any*/)
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
    "name": "AlbumQuery",
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
    "name": "AlbumQuery",
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
    "cacheID": "9c012a47f14d5beda9b3ac5115374ed1",
    "id": null,
    "metadata": {},
    "name": "AlbumQuery",
    "operationKind": "query",
    "text": "query AlbumQuery(\n  $albumID: ID!\n) {\n  release(id: $albumID) {\n    cover\n    title\n    humanDate\n    label\n    vkLink\n    appleMusicLink\n    spotifyLink\n    youtubeLink\n    deezerLink\n    yandexMusicLink\n    songSet {\n      edges {\n        node {\n          id\n          title\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca600d0513557a5dbb10e10fdd36ac14';

module.exports = node;
