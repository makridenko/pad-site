/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SingleListQueryVariables = {||};
export type SingleListQueryResponse = {|
  +releases: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
        +cover: string,
        +humanDate: ?string,
        +vkLink: string,
        +appleMusicLink: string,
        +spotifyLink: string,
        +youtubeLink: string,
        +deezerLink: string,
        +yandexMusicLink: string,
      |}
    |}>
  |}
|};
export type SingleListQuery = {|
  variables: SingleListQueryVariables,
  response: SingleListQueryResponse,
|};
*/


/*
query SingleListQuery {
  releases(isSingle: true) {
    edges {
      node {
        id
        title
        cover
        humanDate
        vkLink
        appleMusicLink
        spotifyLink
        youtubeLink
        deezerLink
        yandexMusicLink
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "isSingle",
        "value": true
      }
    ],
    "concreteType": "ReleaseNodeConnection",
    "kind": "LinkedField",
    "name": "releases",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ReleaseNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ReleaseNode",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cover",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "humanDate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "vkLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "appleMusicLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "spotifyLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "youtubeLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deezerLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "yandexMusicLink",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "releases(isSingle:true)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SingleListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "978ea0aceb4cd6f97912088366d57f39",
    "id": null,
    "metadata": {},
    "name": "SingleListQuery",
    "operationKind": "query",
    "text": "query SingleListQuery {\n  releases(isSingle: true) {\n    edges {\n      node {\n        id\n        title\n        cover\n        humanDate\n        vkLink\n        appleMusicLink\n        spotifyLink\n        youtubeLink\n        deezerLink\n        yandexMusicLink\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4e8a1f41785446c1ee061106dfdae86';

module.exports = node;
