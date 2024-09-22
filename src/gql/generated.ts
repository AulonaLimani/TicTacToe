import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateGameInput = {
  board: Scalars['String']['input'];
  players_id?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteGameInput = {
  id: Scalars['Int']['input'];
};

export type DeletePlayersInput = {
  id: Scalars['Int']['input'];
};

export type Game = {
  __typename?: 'Game';
  board: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  players?: Maybe<Players>;
  players_id?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: Game;
  createPlayers: Players;
  deleteGame: Game;
  deletePlayers: Players;
  onWin: Scalars['Boolean']['output'];
  register: Players;
  updateGame: Game;
  updatePlayers: Players;
};


export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};


export type MutationCreatePlayersArgs = {
  playersCreateInput: PlayersCreateInput;
};


export type MutationDeleteGameArgs = {
  deleteGameInput: DeleteGameInput;
};


export type MutationDeletePlayersArgs = {
  deletePlayersInput: DeletePlayersInput;
};


export type MutationOnWinArgs = {
  board: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  score: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateGameArgs = {
  id: Scalars['Int']['input'];
  updateGameInput: UpdateGameInput;
};


export type MutationUpdatePlayersArgs = {
  id: Scalars['Int']['input'];
  playersUpdateInput: UpdatePlayersInput;
};

export type Players = {
  __typename?: 'Players';
  Games?: Maybe<Array<Game>>;
  created_date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  loged_in?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  player_one: Scalars['String']['output'];
  player_two: Scalars['String']['output'];
  score: Scalars['String']['output'];
  sign_one: Scalars['String']['output'];
  sign_two: Scalars['String']['output'];
};

export type PlayersCreateInput = {
  loged_in?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  player_one: Scalars['String']['input'];
  player_two: Scalars['String']['input'];
  score: Scalars['String']['input'];
  sign_one: Scalars['String']['input'];
  sign_two: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getGame?: Maybe<Game>;
  getGames: Array<Game>;
  getPlayer?: Maybe<Players>;
  getPlayers: Array<Players>;
  login?: Maybe<Players>;
};


export type QueryGetGameArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetGamesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPlayerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPlayersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  id: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGameInput = {
  board?: InputMaybe<Scalars['String']['input']>;
  players_id?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePlayersInput = {
  loged_in?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  player_one?: InputMaybe<Scalars['String']['input']>;
  player_two?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  sign_one?: InputMaybe<Scalars['String']['input']>;
  sign_two?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGameMutationVariables = Exact<{
  createGameInput: CreateGameInput;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'Game', id: number, players_id?: number | null, board: string, players?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } | null } };

export type UpdateGameMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  updateGameInput: UpdateGameInput;
}>;


export type UpdateGameMutation = { __typename?: 'Mutation', updateGame: { __typename?: 'Game', id: number, players_id?: number | null, board: string, players?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } | null } };

export type DeleteGameMutationVariables = Exact<{
  deleteGameInput: DeleteGameInput;
}>;


export type DeleteGameMutation = { __typename?: 'Mutation', deleteGame: { __typename?: 'Game', id: number, players_id?: number | null, board: string, players?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } | null } };

export type GetAllGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGamesQuery = { __typename?: 'Query', getGames: Array<{ __typename?: 'Game', id: number, players_id?: number | null, board: string, players?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } | null }> };

export type GetGameByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetGameByIdQuery = { __typename?: 'Query', getGame?: { __typename?: 'Game', id: number, players_id?: number | null, board: string, players?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } | null } | null };

export type CreatePlayersMutationVariables = Exact<{
  playersCreateInput: PlayersCreateInput;
}>;


export type CreatePlayersMutation = { __typename?: 'Mutation', createPlayers: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } };

export type UpdatePlayerMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  playersUpdateInput: UpdatePlayersInput;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayers: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } };

export type OnWinMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  board: Scalars['String']['input'];
  score: Scalars['String']['input'];
}>;


export type OnWinMutation = { __typename?: 'Mutation', onWin: boolean };

export type RegisterMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } };

export type DeletePlayerMutationVariables = Exact<{
  deletePlayersInput: DeletePlayersInput;
}>;


export type DeletePlayerMutation = { __typename?: 'Mutation', deletePlayers: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any } };

export type GetAllPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlayersQuery = { __typename?: 'Query', getPlayers: Array<{ __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any, loged_in?: boolean | null }> };

export type GetPlayerByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPlayerByIdQuery = { __typename?: 'Query', getPlayer?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any, password?: string | null, loged_in?: boolean | null, Games?: Array<{ __typename?: 'Game', id: number, board: string }> | null } | null };

export type LoginQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Players', id: number, player_one: string, sign_one: string, player_two: string, sign_two: string, score: string, created_date: any, password?: string | null, loged_in?: boolean | null, Games?: Array<{ __typename?: 'Game', id: number, board: string }> | null } | null };


export const CreateGameDocument = gql`
    mutation CreateGame($createGameInput: CreateGameInput!) {
  createGame(createGameInput: $createGameInput) {
    id
    players_id
    board
    players {
      id
      player_one
      sign_one
      player_two
      sign_two
      score
      created_date
    }
  }
}
    `;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      createGameInput: // value for 'createGameInput'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const UpdateGameDocument = gql`
    mutation UpdateGame($id: Int!, $updateGameInput: UpdateGameInput!) {
  updateGame(id: $id, updateGameInput: $updateGameInput) {
    id
    players_id
    board
    players {
      id
      player_one
      sign_one
      player_two
      sign_two
      score
      created_date
    }
  }
}
    `;
export type UpdateGameMutationFn = Apollo.MutationFunction<UpdateGameMutation, UpdateGameMutationVariables>;

/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateGameInput: // value for 'updateGameInput'
 *   },
 * });
 */
export function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameMutation, UpdateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameMutation, UpdateGameMutationVariables>(UpdateGameDocument, options);
      }
export type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export type UpdateGameMutationResult = Apollo.MutationResult<UpdateGameMutation>;
export type UpdateGameMutationOptions = Apollo.BaseMutationOptions<UpdateGameMutation, UpdateGameMutationVariables>;
export const DeleteGameDocument = gql`
    mutation DeleteGame($deleteGameInput: DeleteGameInput!) {
  deleteGame(deleteGameInput: $deleteGameInput) {
    id
    players_id
    board
    players {
      id
      player_one
      sign_one
      player_two
      sign_two
      score
      created_date
    }
  }
}
    `;
export type DeleteGameMutationFn = Apollo.MutationFunction<DeleteGameMutation, DeleteGameMutationVariables>;

/**
 * __useDeleteGameMutation__
 *
 * To run a mutation, you first call `useDeleteGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGameMutation, { data, loading, error }] = useDeleteGameMutation({
 *   variables: {
 *      deleteGameInput: // value for 'deleteGameInput'
 *   },
 * });
 */
export function useDeleteGameMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGameMutation, DeleteGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGameMutation, DeleteGameMutationVariables>(DeleteGameDocument, options);
      }
export type DeleteGameMutationHookResult = ReturnType<typeof useDeleteGameMutation>;
export type DeleteGameMutationResult = Apollo.MutationResult<DeleteGameMutation>;
export type DeleteGameMutationOptions = Apollo.BaseMutationOptions<DeleteGameMutation, DeleteGameMutationVariables>;
export const GetAllGamesDocument = gql`
    query GetAllGames {
  getGames {
    id
    players_id
    board
    players {
      id
      player_one
      sign_one
      player_two
      sign_two
      score
      created_date
    }
  }
}
    `;

/**
 * __useGetAllGamesQuery__
 *
 * To run a query within a React component, call `useGetAllGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGamesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGamesQuery, GetAllGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGamesQuery, GetAllGamesQueryVariables>(GetAllGamesDocument, options);
      }
export function useGetAllGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGamesQuery, GetAllGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGamesQuery, GetAllGamesQueryVariables>(GetAllGamesDocument, options);
        }
export function useGetAllGamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllGamesQuery, GetAllGamesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllGamesQuery, GetAllGamesQueryVariables>(GetAllGamesDocument, options);
        }
export type GetAllGamesQueryHookResult = ReturnType<typeof useGetAllGamesQuery>;
export type GetAllGamesLazyQueryHookResult = ReturnType<typeof useGetAllGamesLazyQuery>;
export type GetAllGamesSuspenseQueryHookResult = ReturnType<typeof useGetAllGamesSuspenseQuery>;
export type GetAllGamesQueryResult = Apollo.QueryResult<GetAllGamesQuery, GetAllGamesQueryVariables>;
export const GetGameByIdDocument = gql`
    query GetGameById($id: Int!) {
  getGame(id: $id) {
    id
    players_id
    board
    players {
      id
      player_one
      sign_one
      player_two
      sign_two
      score
      created_date
    }
  }
}
    `;

/**
 * __useGetGameByIdQuery__
 *
 * To run a query within a React component, call `useGetGameByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGameByIdQuery(baseOptions: Apollo.QueryHookOptions<GetGameByIdQuery, GetGameByIdQueryVariables> & ({ variables: GetGameByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameByIdQuery, GetGameByIdQueryVariables>(GetGameByIdDocument, options);
      }
export function useGetGameByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameByIdQuery, GetGameByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameByIdQuery, GetGameByIdQueryVariables>(GetGameByIdDocument, options);
        }
export function useGetGameByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetGameByIdQuery, GetGameByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGameByIdQuery, GetGameByIdQueryVariables>(GetGameByIdDocument, options);
        }
export type GetGameByIdQueryHookResult = ReturnType<typeof useGetGameByIdQuery>;
export type GetGameByIdLazyQueryHookResult = ReturnType<typeof useGetGameByIdLazyQuery>;
export type GetGameByIdSuspenseQueryHookResult = ReturnType<typeof useGetGameByIdSuspenseQuery>;
export type GetGameByIdQueryResult = Apollo.QueryResult<GetGameByIdQuery, GetGameByIdQueryVariables>;
export const CreatePlayersDocument = gql`
    mutation CreatePlayers($playersCreateInput: PlayersCreateInput!) {
  createPlayers(playersCreateInput: $playersCreateInput) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
  }
}
    `;
export type CreatePlayersMutationFn = Apollo.MutationFunction<CreatePlayersMutation, CreatePlayersMutationVariables>;

/**
 * __useCreatePlayersMutation__
 *
 * To run a mutation, you first call `useCreatePlayersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlayersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlayersMutation, { data, loading, error }] = useCreatePlayersMutation({
 *   variables: {
 *      playersCreateInput: // value for 'playersCreateInput'
 *   },
 * });
 */
export function useCreatePlayersMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlayersMutation, CreatePlayersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlayersMutation, CreatePlayersMutationVariables>(CreatePlayersDocument, options);
      }
export type CreatePlayersMutationHookResult = ReturnType<typeof useCreatePlayersMutation>;
export type CreatePlayersMutationResult = Apollo.MutationResult<CreatePlayersMutation>;
export type CreatePlayersMutationOptions = Apollo.BaseMutationOptions<CreatePlayersMutation, CreatePlayersMutationVariables>;
export const UpdatePlayerDocument = gql`
    mutation UpdatePlayer($id: Int!, $playersUpdateInput: UpdatePlayersInput!) {
  updatePlayers(id: $id, playersUpdateInput: $playersUpdateInput) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
  }
}
    `;
export type UpdatePlayerMutationFn = Apollo.MutationFunction<UpdatePlayerMutation, UpdatePlayerMutationVariables>;

/**
 * __useUpdatePlayerMutation__
 *
 * To run a mutation, you first call `useUpdatePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlayerMutation, { data, loading, error }] = useUpdatePlayerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      playersUpdateInput: // value for 'playersUpdateInput'
 *   },
 * });
 */
export function useUpdatePlayerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, options);
      }
export type UpdatePlayerMutationHookResult = ReturnType<typeof useUpdatePlayerMutation>;
export type UpdatePlayerMutationResult = Apollo.MutationResult<UpdatePlayerMutation>;
export type UpdatePlayerMutationOptions = Apollo.BaseMutationOptions<UpdatePlayerMutation, UpdatePlayerMutationVariables>;
export const OnWinDocument = gql`
    mutation OnWin($id: Int!, $board: String!, $score: String!) {
  onWin(id: $id, board: $board, score: $score)
}
    `;
export type OnWinMutationFn = Apollo.MutationFunction<OnWinMutation, OnWinMutationVariables>;

/**
 * __useOnWinMutation__
 *
 * To run a mutation, you first call `useOnWinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOnWinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onWinMutation, { data, loading, error }] = useOnWinMutation({
 *   variables: {
 *      id: // value for 'id'
 *      board: // value for 'board'
 *      score: // value for 'score'
 *   },
 * });
 */
export function useOnWinMutation(baseOptions?: Apollo.MutationHookOptions<OnWinMutation, OnWinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OnWinMutation, OnWinMutationVariables>(OnWinDocument, options);
      }
export type OnWinMutationHookResult = ReturnType<typeof useOnWinMutation>;
export type OnWinMutationResult = Apollo.MutationResult<OnWinMutation>;
export type OnWinMutationOptions = Apollo.BaseMutationOptions<OnWinMutation, OnWinMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($id: Int!, $password: String!) {
  register(id: $id, password: $password) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const DeletePlayerDocument = gql`
    mutation DeletePlayer($deletePlayersInput: DeletePlayersInput!) {
  deletePlayers(deletePlayersInput: $deletePlayersInput) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
  }
}
    `;
export type DeletePlayerMutationFn = Apollo.MutationFunction<DeletePlayerMutation, DeletePlayerMutationVariables>;

/**
 * __useDeletePlayerMutation__
 *
 * To run a mutation, you first call `useDeletePlayerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlayerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlayerMutation, { data, loading, error }] = useDeletePlayerMutation({
 *   variables: {
 *      deletePlayersInput: // value for 'deletePlayersInput'
 *   },
 * });
 */
export function useDeletePlayerMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlayerMutation, DeletePlayerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlayerMutation, DeletePlayerMutationVariables>(DeletePlayerDocument, options);
      }
export type DeletePlayerMutationHookResult = ReturnType<typeof useDeletePlayerMutation>;
export type DeletePlayerMutationResult = Apollo.MutationResult<DeletePlayerMutation>;
export type DeletePlayerMutationOptions = Apollo.BaseMutationOptions<DeletePlayerMutation, DeletePlayerMutationVariables>;
export const GetAllPlayersDocument = gql`
    query GetAllPlayers {
  getPlayers {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
    loged_in
  }
}
    `;

/**
 * __useGetAllPlayersQuery__
 *
 * To run a query within a React component, call `useGetAllPlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPlayersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
      }
export function useGetAllPlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
        }
export function useGetAllPlayersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllPlayersQuery, GetAllPlayersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPlayersQuery, GetAllPlayersQueryVariables>(GetAllPlayersDocument, options);
        }
export type GetAllPlayersQueryHookResult = ReturnType<typeof useGetAllPlayersQuery>;
export type GetAllPlayersLazyQueryHookResult = ReturnType<typeof useGetAllPlayersLazyQuery>;
export type GetAllPlayersSuspenseQueryHookResult = ReturnType<typeof useGetAllPlayersSuspenseQuery>;
export type GetAllPlayersQueryResult = Apollo.QueryResult<GetAllPlayersQuery, GetAllPlayersQueryVariables>;
export const GetPlayerByIdDocument = gql`
    query GetPlayerById($id: Int!) {
  getPlayer(id: $id) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
    password
    loged_in
    Games {
      id
      board
    }
  }
}
    `;

/**
 * __useGetPlayerByIdQuery__
 *
 * To run a query within a React component, call `useGetPlayerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlayerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerByIdQuery, GetPlayerByIdQueryVariables> & ({ variables: GetPlayerByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>(GetPlayerByIdDocument, options);
      }
export function useGetPlayerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>(GetPlayerByIdDocument, options);
        }
export function useGetPlayerByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>(GetPlayerByIdDocument, options);
        }
export type GetPlayerByIdQueryHookResult = ReturnType<typeof useGetPlayerByIdQuery>;
export type GetPlayerByIdLazyQueryHookResult = ReturnType<typeof useGetPlayerByIdLazyQuery>;
export type GetPlayerByIdSuspenseQueryHookResult = ReturnType<typeof useGetPlayerByIdSuspenseQuery>;
export type GetPlayerByIdQueryResult = Apollo.QueryResult<GetPlayerByIdQuery, GetPlayerByIdQueryVariables>;
export const LoginDocument = gql`
    query Login($id: Int!, $password: String) {
  login(id: $id, password: $password) {
    id
    player_one
    sign_one
    player_two
    sign_two
    score
    created_date
    password
    loged_in
    Games {
      id
      board
    }
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables> & ({ variables: LoginQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export function useLoginSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginSuspenseQueryHookResult = ReturnType<typeof useLoginSuspenseQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;