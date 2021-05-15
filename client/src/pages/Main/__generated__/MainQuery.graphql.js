/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainQueryVariables = {||};
export type MainQueryResponse = {|
  +lastRelease: ?{|
    +id: string,
    +cover: string,
    +title: string,
    +aboutText: ?string,
    +isSingle: boolean,
  |}
|};
export type MainQuery = {|
  variables: MainQueryVariables,
  response: MainQueryResponse,
|};
*/


/*
query MainQuery {
  lastRelease {
    id
    cover
    title
    aboutText
    isSingle
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReleaseNode",
    "kind": "LinkedField",
    "name": "lastRelease",
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
        "name": "aboutText",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isSingle",
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
    "name": "MainQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "254cd1f9e8639ccfc3dcf3f19be3425f",
    "id": null,
    "metadata": {},
    "name": "MainQuery",
    "operationKind": "query",
    "text": "query MainQuery {\n  lastRelease {\n    id\n    cover\n    title\n    aboutText\n    isSingle\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e029b04b2bb8cced6aa14e820560a4f';

module.exports = node;
