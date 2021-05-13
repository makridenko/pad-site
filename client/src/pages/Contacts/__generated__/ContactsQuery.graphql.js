/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ContactsQueryVariables = {||};
export type ContactsQueryResponse = {|
  +members: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +vkLink: ?string,
        +telegramLink: ?string,
        +instagramLink: ?string,
        +mail: ?string,
      |}
    |}>
  |}
|};
export type ContactsQuery = {|
  variables: ContactsQueryVariables,
  response: ContactsQueryResponse,
|};
*/


/*
query ContactsQuery {
  members(isContactFace: true) {
    edges {
      node {
        id
        firstName
        lastName
        vkLink
        telegramLink
        instagramLink
        mail
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
        "name": "isContactFace",
        "value": true
      }
    ],
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
                "name": "telegramLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "instagramLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "mail",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "members(isContactFace:true)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ContactsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ContactsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c11e537718544aa46256809d9c01434d",
    "id": null,
    "metadata": {},
    "name": "ContactsQuery",
    "operationKind": "query",
    "text": "query ContactsQuery {\n  members(isContactFace: true) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        vkLink\n        telegramLink\n        instagramLink\n        mail\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '263f639352c798af9074d12f14418ac8';

module.exports = node;
