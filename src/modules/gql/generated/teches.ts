/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type TechesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TechesQuery = { __typename?: 'Query', teches: Array<{ __typename?: 'Tech', id: string, title: string, desc?: Types.Maybe<string>, link?: Types.Maybe<string>, image?: Types.Maybe<string> }> };


export const TechesDocument = gql`
    query teches {
  teches {
    id
    title
    desc
    link
    image
  }
}
    `;

/**
 * __useTechesQuery__
 *
 * To run a query within a React component, call `useTechesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTechesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTechesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTechesQuery(baseOptions?: Apollo.QueryHookOptions<TechesQuery, TechesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TechesQuery, TechesQueryVariables>(TechesDocument, options);
      }
export function useTechesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TechesQuery, TechesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TechesQuery, TechesQueryVariables>(TechesDocument, options);
        }
export type TechesQueryHookResult = ReturnType<typeof useTechesQuery>;
export type TechesLazyQueryHookResult = ReturnType<typeof useTechesLazyQuery>;
export type TechesQueryResult = Apollo.QueryResult<TechesQuery, TechesQueryVariables>;