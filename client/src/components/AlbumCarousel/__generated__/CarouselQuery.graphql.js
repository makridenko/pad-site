/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CarouselQueryVariables = {||};
export type CarouselQueryResponse = {|
  +releases: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +cover: string,
      |}
    |}>
  |}
|};
export type CarouselQuery = {|
  variables: CarouselQueryVariables,
  response: CarouselQueryResponse,
|};
*/


/*
query CarouselQuery {
  releases(isSingle: false) {
    edges {
      node {
        id
        cover
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
        "value": false
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
                "name": "cover",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "releases(isSingle:false)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CarouselQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CarouselQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0c42ab0ab80dbd5b21605f7895dd6313",
    "id": null,
    "metadata": {},
    "name": "CarouselQuery",
    "operationKind": "query",
    "text": "query CarouselQuery {\n  releases(isSingle: false) {\n    edges {\n      node {\n        id\n        cover\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fc90a2e2457def0b62c48d3f27f3c53';

module.exports = node;
