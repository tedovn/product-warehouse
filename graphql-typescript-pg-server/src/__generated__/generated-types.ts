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

export type Customer = {
  __typename?: 'Customer';
  id?: Maybe<Scalars['Int']>;
  customer_number: Scalars['String'];
  name: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export enum ProductType {
  Hazardous = 'HAZARDOUS',
  Nonhazardous = 'NONHAZARDOUS'
}

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  created_at?: Maybe<Scalars['String']>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<ProductType>;
};

export type CreateWarehouseInput = {
  name: Scalars['String'];
  capacity: Scalars['Int'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  capacity: Scalars['Int'];
  created_at?: Maybe<Scalars['String']>;
};

export enum WarehouseHistoryType {
  Import = 'IMPORT',
  Export = 'EXPORT'
}

export type WarehouseHistory = {
  __typename?: 'WarehouseHistory';
  id?: Maybe<Scalars['Int']>;
  warehouse_id: Scalars['Int'];
  product_id: Scalars['Int'];
  product_name: Scalars['String'];
  product_description: Scalars['String'];
  product_quantity: Scalars['Int'];
  customer_id: Scalars['Int'];
  type?: Maybe<WarehouseHistoryType>;
  created_at?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  customers?: Maybe<Array<Maybe<Customer>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
  warehousesHistory?: Maybe<Array<Maybe<WarehouseHistory>>>;
  customer?: Maybe<Customer>;
  product?: Maybe<Product>;
  warehouse?: Maybe<Warehouse>;
  warehouseHistory?: Maybe<Array<Maybe<WarehouseHistory>>>;
};


export type QueryCustomerArgs = {
  id: Scalars['Int'];
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
  createProduct?: Maybe<Product>;
  createWarehouse?: Maybe<Warehouse>;
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


export type MutationCreateProductArgs = {
  product: CreateProductInput;
};


export type MutationCreateWarehouseArgs = {
  warehouse: CreateWarehouseInput;
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
  Customer: ResolverTypeWrapper<Customer>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ProductType: ProductType;
  Product: ResolverTypeWrapper<Product>;
  createProductInput: CreateProductInput;
  createWarehouseInput: CreateWarehouseInput;
  Warehouse: ResolverTypeWrapper<Warehouse>;
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
  Customer: Customer;
  Int: Scalars['Int'];
  String: Scalars['String'];
  ProductType: ProductType;
  Product: Product;
  createProductInput: CreateProductInput;
  createWarehouseInput: CreateWarehouseInput;
  Warehouse: Warehouse;
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

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customer_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type WarehouseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  capacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  customer_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['WarehouseHistoryType']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Customer']>>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warehouse']>>>, ParentType, ContextType>;
  warehousesHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistory']>>>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<QueryWarehouseArgs, 'id'>>;
  warehouseHistory?: Resolver<Maybe<Array<Maybe<ResolversTypes['WarehouseHistory']>>>, ParentType, ContextType, RequireFields<QueryWarehouseHistoryArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  sum?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationSumArgs, 'num1' | 'num2'>>;
  subtract?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationSubtractArgs, 'num1' | 'num2'>>;
  multiply?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationMultiplyArgs, 'num1' | 'num2'>>;
  divide?: Resolver<Maybe<ResolversTypes['Calculation']>, ParentType, ContextType, RequireFields<MutationDivideArgs, 'num1' | 'num2'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'product'>>;
  createWarehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<MutationCreateWarehouseArgs, 'warehouse'>>;
};

export type Resolvers<ContextType = any> = {
  Calculation?: CalculationResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
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