/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StoryLineQueryVariables = {||};
export type StoryLineQueryResponse = {|
  +stories: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +onlyYear: ?string,
        +photo: ?string,
        +text: string,
      |}
    |}>
  |}
|};
export type StoryLineQuery = {|
  variables: StoryLineQueryVariables,
  response: StoryLineQueryResponse,
|};
*/


/*
query StoryLineQuery {
  stories {
    edges {
      node {
        id
        onlyYear
        photo
        text
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "StoryNodeConnection",
    "kind": "LinkedField",
    "name": "stories",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "StoryNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "StoryNode",
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
                "name": "onlyYear",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "photo",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "text",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoryLineQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StoryLineQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ebdd1413f6bc8c4cb39fc44575d9ce34",
    "id": null,
    "metadata": {},
    "name": "StoryLineQuery",
    "operationKind": "query",
    "text": "query StoryLineQuery {\n  stories {\n    edges {\n      node {\n        id\n        onlyYear\n        photo\n        text\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8524e53807da26c87fc34f8db83074d';

module.exports = node;
