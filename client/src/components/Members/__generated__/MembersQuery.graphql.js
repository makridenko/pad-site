/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MembersQueryVariables = {||};
export type MembersQueryResponse = {|
  +members: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +vkLink: ?string,
        +position: string,
      |}
    |}>
  |}
|};
export type MembersQuery = {|
  variables: MembersQueryVariables,
  response: MembersQueryResponse,
|};
*/


/*
query MembersQuery {
  members {
    edges {
      node {
        id
        firstName
        lastName
        vkLink
        position
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
    "concreteType": "MemberNodeConnection",
    "kind": "LinkedField",
    "name": "members",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MemberNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MemberNode",
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
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastName",
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
                "name": "position",
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
    "name": "MembersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MembersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "319c86b3b7a2edd5d52abe76881bc917",
    "id": null,
    "metadata": {},
    "name": "MembersQuery",
    "operationKind": "query",
    "text": "query MembersQuery {\n  members {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        vkLink\n        position\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '823a6edf783b5fbb04e9e96051591d2f';

module.exports = node;
