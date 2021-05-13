/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EventsQueryVariables = {||};
export type EventsQueryResponse = {|
  +events: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +day: ?string,
        +humanDate: ?string,
        +title: string,
        +eventLink: string,
        +place: string,
      |}
    |}>
  |}
|};
export type EventsQuery = {|
  variables: EventsQueryVariables,
  response: EventsQueryResponse,
|};
*/


/*
query EventsQuery {
  events {
    edges {
      node {
        id
        day
        humanDate
        title
        eventLink
        place
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
    "concreteType": "EventNodeConnection",
    "kind": "LinkedField",
    "name": "events",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EventNodeEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EventNode",
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
                "name": "day",
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
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "eventLink",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "place",
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
    "name": "EventsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EventsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "bd4357715d7352f18a2347694269bde5",
    "id": null,
    "metadata": {},
    "name": "EventsQuery",
    "operationKind": "query",
    "text": "query EventsQuery {\n  events {\n    edges {\n      node {\n        id\n        day\n        humanDate\n        title\n        eventLink\n        place\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c83eedd78d3a3a25cb0f887f522c4c0a';

module.exports = node;
