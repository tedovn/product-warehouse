import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Calculation = {
  __typename?: 'Calculation';
  result: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Type;
  created_at?: Maybe<Scalars['String']>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Type>;
};

export type CreateWarehouseInput = {
  name: Scalars['String'];
  capacity: Scalars['Int'];
  type: Type;
};

export type SumProductWarehouseHistory = {
  __typename?: 'SumProductWarehouseHistory';
  product_name: Scalars['String'];
  sum?: Maybe<Scalars['Int']>;
};

export enum Type {
  Hazardous = 'hazardous',
  Nonhazardous = 'nonhazardous'
}

export type Warehouse = {
  __typename?: 'Warehouse';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  capacity: Scalars['Int'];
  availableCapacity?: Maybe<Scalars['Int']>;
  type: Type;
  products?: Maybe<Array<Maybe<SumProductWarehouseHistory>>>;
  created_at?: Maybe<Scalars['String']>;
};

export type CreateWarehouseHistoryInput = {
  warehouse_id: Scalars['Int'];
  product_id: Scalars['Int'];
  quantity: Scalars['Int'];
};

export enum WarehouseHistoryType {
  Import = 'import',
  Export = 'export'
}

export type WarehouseHistory = {
  __typename?: 'WarehouseHistory';
  id?: Maybe<Scalars['Int']>;
  warehouse_id: Scalars['Int'];
  product_id: Scalars['Int'];
  product_name: Scalars['String'];
  product_description: Scalars['String'];
  product_quantity: Scalars['Int'];
  type: WarehouseHistoryType;
  created_at?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
  product?: Maybe<Product>;
  warehouse?: Maybe<Warehouse>;
  warehouseHistory?: Maybe<Array<Maybe<WarehouseHistory>>>;
};


export type QueryProductArgs = {
  id: Scalars['Int'];
};


export type QueryWarehouseArgs = {
  id: Scalars['Int'];
};


export type QueryWarehouseHistoryArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  sum?: Maybe<Calculation>;
  subtract?: Maybe<Calculation>;
  multiply?: Maybe<Calculation>;
  divide?: Maybe<Calculation>;
  sumArray?: Maybe<Calculation>;
  createProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Scalars['String']>;
  createWarehouse?: Maybe<Warehouse>;
  updateWarehouse?: Maybe<Warehouse>;
  deleteWarehouse?: Maybe<Scalars['String']>;
  import?: Maybe<Scalars['Int']>;
  export?: Maybe<Scalars['Int']>;
};


export type MutationSumArgs = {
  num1: Scalars['Int'];
  num2: Scalars['Int'];
};


export type MutationSubtractArgs = {
  num1: Scalars['Int'];
  num2: Scalars['Int'];
};


export type MutationMultiplyArgs = {
  num1: Scalars['Int'];
  num2: Scalars['Int'];
};


export type MutationDivideArgs = {
  num1: Scalars['Int'];
  num2: Scalars['Int'];
};


export type MutationSumArrayArgs = {
  digits?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MutationCreateProductArgs = {
  product: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationCreateWarehouseArgs = {
  warehouse: CreateWarehouseInput;
};


export type MutationUpdateWarehouseArgs = {
  warehouse: CreateWarehouseInput;
};


export type MutationDeleteWarehouseArgs = {
  id: Scalars['Int'];
};


export type MutationImportArgs = {
  warehouseHistory: CreateWarehouseHistoryInput;
};


export type MutationExportArgs = {
  warehouse_id: Scalars['Int'];
  product_name: Scalars['String'];
  quantity: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Calculation: ResolverTypeWrapper<Calculation>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Product: ResolverTypeWrapper<Product>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  createProductInput: CreateProductInput;
  createWarehouseInput: CreateWarehouseInput;
  SumProductWarehouseHistory: ResolverTypeWrapper<SumProductWarehouseHistory>;
  Type: Type;
  Warehouse: ResolverTypeWrapper<Warehouse>;
  createWarehouseHistoryInput: CreateWarehouseHistoryInput;
  WarehouseHistoryType: WarehouseHistoryType;
  WarehouseHistory: ResolverTypeWrapper<WarehouseHistory>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Calculation: Calculation;
  Float: Scalars['Float'];
  Product: Product;
  Int: Scalars['Int'];
  String: Scalars['String'];
  createProductInput: CreateProductInput;
  createWarehouseInput: CreateWarehouseInput;
  SumProductWarehouseHistory: SumProductWarehouseHistory;
  Type: Type;
  Warehouse: Warehouse;
  createWarehouseHistoryInput: CreateWarehouseHistoryInput;
  WarehouseHistoryType: WarehouseHistoryType;
  WarehouseHistory: WarehouseHistory;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type CalculationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calculation'] = ResolversParentTypes['Calculation']> = {
  result?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type SumProductWarehouseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SumProductWarehouseHistory'] = ResolversParentTypes['SumProductWarehouseHistory']> = {
  product_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type WarehouseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  availableCapacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['SumProductWarehouseHistory']>>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type WarehouseHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['WarehouseHistory'] = ResolversParentTypes['WarehouseHistory']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  warehouse_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product_quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['WarehouseHistoryType'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warehouse']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<QueryWarehouseArgs, 'id'>>;
  warehouseHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistory']>>>, ParentType, ContextType, RequireFields<QueryWarehouseHistoryArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  sum?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationSumArgs, 'num1' | 'num2'>>;
  subtract?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationSubtractArgs, 'num1' | 'num2'>>;
  multiply?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationMultiplyArgs, 'num1' | 'num2'>>;
  divide?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationDivideArgs, 'num1' | 'num2'>>;
  sumArray?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationSumArrayArgs, never>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'product'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  createWarehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<MutationCreateWarehouseArgs, 'warehouse'>>;
  updateWarehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<MutationUpdateWarehouseArgs, 'warehouse'>>;
  deleteWarehouse?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteWarehouseArgs, 'id'>>;
  import?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationImportArgs, 'warehouseHistory'>>;
  export?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationExportArgs, 'warehouse_id' | 'product_name' | 'quantity'>>;
};

export type Resolvers<ContextType = any> = {
  Calculation?: CalculationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  SumProductWarehouseHistory?: SumProductWarehouseHistoryResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
  WarehouseHistory?: WarehouseHistoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
