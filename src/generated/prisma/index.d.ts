
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model GroupPost
 * 
 */
export type GroupPost = $Result.DefaultSelection<Prisma.$GroupPostPayload>
/**
 * Model UserOnGroupPosts
 * 
 */
export type UserOnGroupPosts = $Result.DefaultSelection<Prisma.$UserOnGroupPostsPayload>
/**
 * Model UserSetting
 * 
 */
export type UserSetting = $Result.DefaultSelection<Prisma.$UserSettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupPost`: Exposes CRUD operations for the **GroupPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupPosts
    * const groupPosts = await prisma.groupPost.findMany()
    * ```
    */
  get groupPost(): Prisma.GroupPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOnGroupPosts`: Exposes CRUD operations for the **UserOnGroupPosts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOnGroupPosts
    * const userOnGroupPosts = await prisma.userOnGroupPosts.findMany()
    * ```
    */
  get userOnGroupPosts(): Prisma.UserOnGroupPostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSetting`: Exposes CRUD operations for the **UserSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSetting.findMany()
    * ```
    */
  get userSetting(): Prisma.UserSettingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    GroupPost: 'GroupPost',
    UserOnGroupPosts: 'UserOnGroupPosts',
    UserSetting: 'UserSetting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "groupPost" | "userOnGroupPosts" | "userSetting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      GroupPost: {
        payload: Prisma.$GroupPostPayload<ExtArgs>
        fields: Prisma.GroupPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          findFirst: {
            args: Prisma.GroupPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          findMany: {
            args: Prisma.GroupPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>[]
          }
          create: {
            args: Prisma.GroupPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          createMany: {
            args: Prisma.GroupPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>[]
          }
          delete: {
            args: Prisma.GroupPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          update: {
            args: Prisma.GroupPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          deleteMany: {
            args: Prisma.GroupPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>[]
          }
          upsert: {
            args: Prisma.GroupPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPostPayload>
          }
          aggregate: {
            args: Prisma.GroupPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupPost>
          }
          groupBy: {
            args: Prisma.GroupPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupPostCountArgs<ExtArgs>
            result: $Utils.Optional<GroupPostCountAggregateOutputType> | number
          }
        }
      }
      UserOnGroupPosts: {
        payload: Prisma.$UserOnGroupPostsPayload<ExtArgs>
        fields: Prisma.UserOnGroupPostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOnGroupPostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOnGroupPostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          findFirst: {
            args: Prisma.UserOnGroupPostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOnGroupPostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          findMany: {
            args: Prisma.UserOnGroupPostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>[]
          }
          create: {
            args: Prisma.UserOnGroupPostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          createMany: {
            args: Prisma.UserOnGroupPostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserOnGroupPostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>[]
          }
          delete: {
            args: Prisma.UserOnGroupPostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          update: {
            args: Prisma.UserOnGroupPostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          deleteMany: {
            args: Prisma.UserOnGroupPostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOnGroupPostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserOnGroupPostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>[]
          }
          upsert: {
            args: Prisma.UserOnGroupPostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOnGroupPostsPayload>
          }
          aggregate: {
            args: Prisma.UserOnGroupPostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOnGroupPosts>
          }
          groupBy: {
            args: Prisma.UserOnGroupPostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOnGroupPostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOnGroupPostsCountArgs<ExtArgs>
            result: $Utils.Optional<UserOnGroupPostsCountAggregateOutputType> | number
          }
        }
      }
      UserSetting: {
        payload: Prisma.$UserSettingPayload<ExtArgs>
        fields: Prisma.UserSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          findFirst: {
            args: Prisma.UserSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          findMany: {
            args: Prisma.UserSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>[]
          }
          create: {
            args: Prisma.UserSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          createMany: {
            args: Prisma.UserSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>[]
          }
          delete: {
            args: Prisma.UserSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          update: {
            args: Prisma.UserSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingPayload>
          }
          aggregate: {
            args: Prisma.UserSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSetting>
          }
          groupBy: {
            args: Prisma.UserSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    groupPost?: GroupPostOmit
    userOnGroupPosts?: UserOnGroupPostsOmit
    userSetting?: UserSettingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    groupPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    groupPosts?: boolean | UserCountOutputTypeCountGroupPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupPostsWhereInput
  }


  /**
   * Count Type GroupPostCountOutputType
   */

  export type GroupPostCountOutputType = {
    users: number
  }

  export type GroupPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupPostCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * GroupPostCountOutputType without action
   */
  export type GroupPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPostCountOutputType
     */
    select?: GroupPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupPostCountOutputType without action
   */
  export type GroupPostCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupPostsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    displayName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    displayName: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userSetting?: boolean | User$userSettingArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    groupPosts?: boolean | User$groupPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSetting?: boolean | User$userSettingArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    groupPosts?: boolean | User$groupPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userSetting: Prisma.$UserSettingPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      groupPosts: Prisma.$UserOnGroupPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      displayName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSetting<T extends User$userSettingArgs<ExtArgs> = {}>(args?: Subset<T, User$userSettingArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupPosts<T extends User$groupPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userSetting
   */
  export type User$userSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    where?: UserSettingWhereInput
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.groupPosts
   */
  export type User$groupPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    where?: UserOnGroupPostsWhereInput
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    cursor?: UserOnGroupPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnGroupPostsScalarFieldEnum | UserOnGroupPostsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly description: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model GroupPost
   */

  export type AggregateGroupPost = {
    _count: GroupPostCountAggregateOutputType | null
    _avg: GroupPostAvgAggregateOutputType | null
    _sum: GroupPostSumAggregateOutputType | null
    _min: GroupPostMinAggregateOutputType | null
    _max: GroupPostMaxAggregateOutputType | null
  }

  export type GroupPostAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupPostSumAggregateOutputType = {
    id: number | null
  }

  export type GroupPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupPostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupPostAvgAggregateInputType = {
    id?: true
  }

  export type GroupPostSumAggregateInputType = {
    id?: true
  }

  export type GroupPostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupPostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupPostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPost to aggregate.
     */
    where?: GroupPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPosts to fetch.
     */
    orderBy?: GroupPostOrderByWithRelationInput | GroupPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupPosts
    **/
    _count?: true | GroupPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupPostMaxAggregateInputType
  }

  export type GetGroupPostAggregateType<T extends GroupPostAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupPost[P]>
      : GetScalarType<T[P], AggregateGroupPost[P]>
  }




  export type GroupPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupPostWhereInput
    orderBy?: GroupPostOrderByWithAggregationInput | GroupPostOrderByWithAggregationInput[]
    by: GroupPostScalarFieldEnum[] | GroupPostScalarFieldEnum
    having?: GroupPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupPostCountAggregateInputType | true
    _avg?: GroupPostAvgAggregateInputType
    _sum?: GroupPostSumAggregateInputType
    _min?: GroupPostMinAggregateInputType
    _max?: GroupPostMaxAggregateInputType
  }

  export type GroupPostGroupByOutputType = {
    id: number
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: GroupPostCountAggregateOutputType | null
    _avg: GroupPostAvgAggregateOutputType | null
    _sum: GroupPostSumAggregateOutputType | null
    _min: GroupPostMinAggregateOutputType | null
    _max: GroupPostMaxAggregateOutputType | null
  }

  type GetGroupPostGroupByPayload<T extends GroupPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupPostGroupByOutputType[P]>
            : GetScalarType<T[P], GroupPostGroupByOutputType[P]>
        }
      >
    >


  export type GroupPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | GroupPost$usersArgs<ExtArgs>
    _count?: boolean | GroupPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupPost"]>

  export type GroupPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["groupPost"]>

  export type GroupPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["groupPost"]>

  export type GroupPostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["groupPost"]>
  export type GroupPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupPost$usersArgs<ExtArgs>
    _count?: boolean | GroupPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupPost"
    objects: {
      users: Prisma.$UserOnGroupPostsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groupPost"]>
    composites: {}
  }

  type GroupPostGetPayload<S extends boolean | null | undefined | GroupPostDefaultArgs> = $Result.GetResult<Prisma.$GroupPostPayload, S>

  type GroupPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupPostCountAggregateInputType | true
    }

  export interface GroupPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupPost'], meta: { name: 'GroupPost' } }
    /**
     * Find zero or one GroupPost that matches the filter.
     * @param {GroupPostFindUniqueArgs} args - Arguments to find a GroupPost
     * @example
     * // Get one GroupPost
     * const groupPost = await prisma.groupPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupPostFindUniqueArgs>(args: SelectSubset<T, GroupPostFindUniqueArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupPostFindUniqueOrThrowArgs} args - Arguments to find a GroupPost
     * @example
     * // Get one GroupPost
     * const groupPost = await prisma.groupPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupPostFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostFindFirstArgs} args - Arguments to find a GroupPost
     * @example
     * // Get one GroupPost
     * const groupPost = await prisma.groupPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupPostFindFirstArgs>(args?: SelectSubset<T, GroupPostFindFirstArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostFindFirstOrThrowArgs} args - Arguments to find a GroupPost
     * @example
     * // Get one GroupPost
     * const groupPost = await prisma.groupPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupPostFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupPosts
     * const groupPosts = await prisma.groupPost.findMany()
     * 
     * // Get first 10 GroupPosts
     * const groupPosts = await prisma.groupPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupPostWithIdOnly = await prisma.groupPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupPostFindManyArgs>(args?: SelectSubset<T, GroupPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupPost.
     * @param {GroupPostCreateArgs} args - Arguments to create a GroupPost.
     * @example
     * // Create one GroupPost
     * const GroupPost = await prisma.groupPost.create({
     *   data: {
     *     // ... data to create a GroupPost
     *   }
     * })
     * 
     */
    create<T extends GroupPostCreateArgs>(args: SelectSubset<T, GroupPostCreateArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupPosts.
     * @param {GroupPostCreateManyArgs} args - Arguments to create many GroupPosts.
     * @example
     * // Create many GroupPosts
     * const groupPost = await prisma.groupPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupPostCreateManyArgs>(args?: SelectSubset<T, GroupPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupPosts and returns the data saved in the database.
     * @param {GroupPostCreateManyAndReturnArgs} args - Arguments to create many GroupPosts.
     * @example
     * // Create many GroupPosts
     * const groupPost = await prisma.groupPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupPosts and only return the `id`
     * const groupPostWithIdOnly = await prisma.groupPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupPostCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupPost.
     * @param {GroupPostDeleteArgs} args - Arguments to delete one GroupPost.
     * @example
     * // Delete one GroupPost
     * const GroupPost = await prisma.groupPost.delete({
     *   where: {
     *     // ... filter to delete one GroupPost
     *   }
     * })
     * 
     */
    delete<T extends GroupPostDeleteArgs>(args: SelectSubset<T, GroupPostDeleteArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupPost.
     * @param {GroupPostUpdateArgs} args - Arguments to update one GroupPost.
     * @example
     * // Update one GroupPost
     * const groupPost = await prisma.groupPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupPostUpdateArgs>(args: SelectSubset<T, GroupPostUpdateArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupPosts.
     * @param {GroupPostDeleteManyArgs} args - Arguments to filter GroupPosts to delete.
     * @example
     * // Delete a few GroupPosts
     * const { count } = await prisma.groupPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupPostDeleteManyArgs>(args?: SelectSubset<T, GroupPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupPosts
     * const groupPost = await prisma.groupPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupPostUpdateManyArgs>(args: SelectSubset<T, GroupPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupPosts and returns the data updated in the database.
     * @param {GroupPostUpdateManyAndReturnArgs} args - Arguments to update many GroupPosts.
     * @example
     * // Update many GroupPosts
     * const groupPost = await prisma.groupPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupPosts and only return the `id`
     * const groupPostWithIdOnly = await prisma.groupPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupPostUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupPost.
     * @param {GroupPostUpsertArgs} args - Arguments to update or create a GroupPost.
     * @example
     * // Update or create a GroupPost
     * const groupPost = await prisma.groupPost.upsert({
     *   create: {
     *     // ... data to create a GroupPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupPost we want to update
     *   }
     * })
     */
    upsert<T extends GroupPostUpsertArgs>(args: SelectSubset<T, GroupPostUpsertArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostCountArgs} args - Arguments to filter GroupPosts to count.
     * @example
     * // Count the number of GroupPosts
     * const count = await prisma.groupPost.count({
     *   where: {
     *     // ... the filter for the GroupPosts we want to count
     *   }
     * })
    **/
    count<T extends GroupPostCountArgs>(
      args?: Subset<T, GroupPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupPostAggregateArgs>(args: Subset<T, GroupPostAggregateArgs>): Prisma.PrismaPromise<GetGroupPostAggregateType<T>>

    /**
     * Group by GroupPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupPostGroupByArgs['orderBy'] }
        : { orderBy?: GroupPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupPost model
   */
  readonly fields: GroupPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends GroupPost$usersArgs<ExtArgs> = {}>(args?: Subset<T, GroupPost$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupPost model
   */
  interface GroupPostFieldRefs {
    readonly id: FieldRef<"GroupPost", 'Int'>
    readonly title: FieldRef<"GroupPost", 'String'>
    readonly description: FieldRef<"GroupPost", 'String'>
    readonly createdAt: FieldRef<"GroupPost", 'DateTime'>
    readonly updatedAt: FieldRef<"GroupPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GroupPost findUnique
   */
  export type GroupPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter, which GroupPost to fetch.
     */
    where: GroupPostWhereUniqueInput
  }

  /**
   * GroupPost findUniqueOrThrow
   */
  export type GroupPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter, which GroupPost to fetch.
     */
    where: GroupPostWhereUniqueInput
  }

  /**
   * GroupPost findFirst
   */
  export type GroupPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter, which GroupPost to fetch.
     */
    where?: GroupPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPosts to fetch.
     */
    orderBy?: GroupPostOrderByWithRelationInput | GroupPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPosts.
     */
    cursor?: GroupPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPosts.
     */
    distinct?: GroupPostScalarFieldEnum | GroupPostScalarFieldEnum[]
  }

  /**
   * GroupPost findFirstOrThrow
   */
  export type GroupPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter, which GroupPost to fetch.
     */
    where?: GroupPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPosts to fetch.
     */
    orderBy?: GroupPostOrderByWithRelationInput | GroupPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupPosts.
     */
    cursor?: GroupPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupPosts.
     */
    distinct?: GroupPostScalarFieldEnum | GroupPostScalarFieldEnum[]
  }

  /**
   * GroupPost findMany
   */
  export type GroupPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter, which GroupPosts to fetch.
     */
    where?: GroupPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupPosts to fetch.
     */
    orderBy?: GroupPostOrderByWithRelationInput | GroupPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupPosts.
     */
    cursor?: GroupPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupPosts.
     */
    skip?: number
    distinct?: GroupPostScalarFieldEnum | GroupPostScalarFieldEnum[]
  }

  /**
   * GroupPost create
   */
  export type GroupPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupPost.
     */
    data: XOR<GroupPostCreateInput, GroupPostUncheckedCreateInput>
  }

  /**
   * GroupPost createMany
   */
  export type GroupPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupPosts.
     */
    data: GroupPostCreateManyInput | GroupPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupPost createManyAndReturn
   */
  export type GroupPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * The data used to create many GroupPosts.
     */
    data: GroupPostCreateManyInput | GroupPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupPost update
   */
  export type GroupPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupPost.
     */
    data: XOR<GroupPostUpdateInput, GroupPostUncheckedUpdateInput>
    /**
     * Choose, which GroupPost to update.
     */
    where: GroupPostWhereUniqueInput
  }

  /**
   * GroupPost updateMany
   */
  export type GroupPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupPosts.
     */
    data: XOR<GroupPostUpdateManyMutationInput, GroupPostUncheckedUpdateManyInput>
    /**
     * Filter which GroupPosts to update
     */
    where?: GroupPostWhereInput
    /**
     * Limit how many GroupPosts to update.
     */
    limit?: number
  }

  /**
   * GroupPost updateManyAndReturn
   */
  export type GroupPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * The data used to update GroupPosts.
     */
    data: XOR<GroupPostUpdateManyMutationInput, GroupPostUncheckedUpdateManyInput>
    /**
     * Filter which GroupPosts to update
     */
    where?: GroupPostWhereInput
    /**
     * Limit how many GroupPosts to update.
     */
    limit?: number
  }

  /**
   * GroupPost upsert
   */
  export type GroupPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupPost to update in case it exists.
     */
    where: GroupPostWhereUniqueInput
    /**
     * In case the GroupPost found by the `where` argument doesn't exist, create a new GroupPost with this data.
     */
    create: XOR<GroupPostCreateInput, GroupPostUncheckedCreateInput>
    /**
     * In case the GroupPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupPostUpdateInput, GroupPostUncheckedUpdateInput>
  }

  /**
   * GroupPost delete
   */
  export type GroupPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
    /**
     * Filter which GroupPost to delete.
     */
    where: GroupPostWhereUniqueInput
  }

  /**
   * GroupPost deleteMany
   */
  export type GroupPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupPosts to delete
     */
    where?: GroupPostWhereInput
    /**
     * Limit how many GroupPosts to delete.
     */
    limit?: number
  }

  /**
   * GroupPost.users
   */
  export type GroupPost$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    where?: UserOnGroupPostsWhereInput
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    cursor?: UserOnGroupPostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOnGroupPostsScalarFieldEnum | UserOnGroupPostsScalarFieldEnum[]
  }

  /**
   * GroupPost without action
   */
  export type GroupPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupPost
     */
    select?: GroupPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupPost
     */
    omit?: GroupPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupPostInclude<ExtArgs> | null
  }


  /**
   * Model UserOnGroupPosts
   */

  export type AggregateUserOnGroupPosts = {
    _count: UserOnGroupPostsCountAggregateOutputType | null
    _avg: UserOnGroupPostsAvgAggregateOutputType | null
    _sum: UserOnGroupPostsSumAggregateOutputType | null
    _min: UserOnGroupPostsMinAggregateOutputType | null
    _max: UserOnGroupPostsMaxAggregateOutputType | null
  }

  export type UserOnGroupPostsAvgAggregateOutputType = {
    userId: number | null
    groupPostId: number | null
  }

  export type UserOnGroupPostsSumAggregateOutputType = {
    userId: number | null
    groupPostId: number | null
  }

  export type UserOnGroupPostsMinAggregateOutputType = {
    userId: number | null
    groupPostId: number | null
  }

  export type UserOnGroupPostsMaxAggregateOutputType = {
    userId: number | null
    groupPostId: number | null
  }

  export type UserOnGroupPostsCountAggregateOutputType = {
    userId: number
    groupPostId: number
    _all: number
  }


  export type UserOnGroupPostsAvgAggregateInputType = {
    userId?: true
    groupPostId?: true
  }

  export type UserOnGroupPostsSumAggregateInputType = {
    userId?: true
    groupPostId?: true
  }

  export type UserOnGroupPostsMinAggregateInputType = {
    userId?: true
    groupPostId?: true
  }

  export type UserOnGroupPostsMaxAggregateInputType = {
    userId?: true
    groupPostId?: true
  }

  export type UserOnGroupPostsCountAggregateInputType = {
    userId?: true
    groupPostId?: true
    _all?: true
  }

  export type UserOnGroupPostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnGroupPosts to aggregate.
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupPosts to fetch.
     */
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOnGroupPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOnGroupPosts
    **/
    _count?: true | UserOnGroupPostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOnGroupPostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOnGroupPostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOnGroupPostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOnGroupPostsMaxAggregateInputType
  }

  export type GetUserOnGroupPostsAggregateType<T extends UserOnGroupPostsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOnGroupPosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOnGroupPosts[P]>
      : GetScalarType<T[P], AggregateUserOnGroupPosts[P]>
  }




  export type UserOnGroupPostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOnGroupPostsWhereInput
    orderBy?: UserOnGroupPostsOrderByWithAggregationInput | UserOnGroupPostsOrderByWithAggregationInput[]
    by: UserOnGroupPostsScalarFieldEnum[] | UserOnGroupPostsScalarFieldEnum
    having?: UserOnGroupPostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOnGroupPostsCountAggregateInputType | true
    _avg?: UserOnGroupPostsAvgAggregateInputType
    _sum?: UserOnGroupPostsSumAggregateInputType
    _min?: UserOnGroupPostsMinAggregateInputType
    _max?: UserOnGroupPostsMaxAggregateInputType
  }

  export type UserOnGroupPostsGroupByOutputType = {
    userId: number
    groupPostId: number
    _count: UserOnGroupPostsCountAggregateOutputType | null
    _avg: UserOnGroupPostsAvgAggregateOutputType | null
    _sum: UserOnGroupPostsSumAggregateOutputType | null
    _min: UserOnGroupPostsMinAggregateOutputType | null
    _max: UserOnGroupPostsMaxAggregateOutputType | null
  }

  type GetUserOnGroupPostsGroupByPayload<T extends UserOnGroupPostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOnGroupPostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOnGroupPostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOnGroupPostsGroupByOutputType[P]>
            : GetScalarType<T[P], UserOnGroupPostsGroupByOutputType[P]>
        }
      >
    >


  export type UserOnGroupPostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupPostId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnGroupPosts"]>

  export type UserOnGroupPostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupPostId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnGroupPosts"]>

  export type UserOnGroupPostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupPostId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOnGroupPosts"]>

  export type UserOnGroupPostsSelectScalar = {
    userId?: boolean
    groupPostId?: boolean
  }

  export type UserOnGroupPostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "groupPostId", ExtArgs["result"]["userOnGroupPosts"]>
  export type UserOnGroupPostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }
  export type UserOnGroupPostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }
  export type UserOnGroupPostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    groupPost?: boolean | GroupPostDefaultArgs<ExtArgs>
  }

  export type $UserOnGroupPostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOnGroupPosts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      groupPost: Prisma.$GroupPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      groupPostId: number
    }, ExtArgs["result"]["userOnGroupPosts"]>
    composites: {}
  }

  type UserOnGroupPostsGetPayload<S extends boolean | null | undefined | UserOnGroupPostsDefaultArgs> = $Result.GetResult<Prisma.$UserOnGroupPostsPayload, S>

  type UserOnGroupPostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOnGroupPostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOnGroupPostsCountAggregateInputType | true
    }

  export interface UserOnGroupPostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOnGroupPosts'], meta: { name: 'UserOnGroupPosts' } }
    /**
     * Find zero or one UserOnGroupPosts that matches the filter.
     * @param {UserOnGroupPostsFindUniqueArgs} args - Arguments to find a UserOnGroupPosts
     * @example
     * // Get one UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOnGroupPostsFindUniqueArgs>(args: SelectSubset<T, UserOnGroupPostsFindUniqueArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOnGroupPosts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOnGroupPostsFindUniqueOrThrowArgs} args - Arguments to find a UserOnGroupPosts
     * @example
     * // Get one UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOnGroupPostsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOnGroupPostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnGroupPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsFindFirstArgs} args - Arguments to find a UserOnGroupPosts
     * @example
     * // Get one UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOnGroupPostsFindFirstArgs>(args?: SelectSubset<T, UserOnGroupPostsFindFirstArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOnGroupPosts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsFindFirstOrThrowArgs} args - Arguments to find a UserOnGroupPosts
     * @example
     * // Get one UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOnGroupPostsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOnGroupPostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOnGroupPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findMany()
     * 
     * // Get first 10 UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userOnGroupPostsWithUserIdOnly = await prisma.userOnGroupPosts.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserOnGroupPostsFindManyArgs>(args?: SelectSubset<T, UserOnGroupPostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOnGroupPosts.
     * @param {UserOnGroupPostsCreateArgs} args - Arguments to create a UserOnGroupPosts.
     * @example
     * // Create one UserOnGroupPosts
     * const UserOnGroupPosts = await prisma.userOnGroupPosts.create({
     *   data: {
     *     // ... data to create a UserOnGroupPosts
     *   }
     * })
     * 
     */
    create<T extends UserOnGroupPostsCreateArgs>(args: SelectSubset<T, UserOnGroupPostsCreateArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOnGroupPosts.
     * @param {UserOnGroupPostsCreateManyArgs} args - Arguments to create many UserOnGroupPosts.
     * @example
     * // Create many UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOnGroupPostsCreateManyArgs>(args?: SelectSubset<T, UserOnGroupPostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserOnGroupPosts and returns the data saved in the database.
     * @param {UserOnGroupPostsCreateManyAndReturnArgs} args - Arguments to create many UserOnGroupPosts.
     * @example
     * // Create many UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserOnGroupPosts and only return the `userId`
     * const userOnGroupPostsWithUserIdOnly = await prisma.userOnGroupPosts.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserOnGroupPostsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserOnGroupPostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserOnGroupPosts.
     * @param {UserOnGroupPostsDeleteArgs} args - Arguments to delete one UserOnGroupPosts.
     * @example
     * // Delete one UserOnGroupPosts
     * const UserOnGroupPosts = await prisma.userOnGroupPosts.delete({
     *   where: {
     *     // ... filter to delete one UserOnGroupPosts
     *   }
     * })
     * 
     */
    delete<T extends UserOnGroupPostsDeleteArgs>(args: SelectSubset<T, UserOnGroupPostsDeleteArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOnGroupPosts.
     * @param {UserOnGroupPostsUpdateArgs} args - Arguments to update one UserOnGroupPosts.
     * @example
     * // Update one UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOnGroupPostsUpdateArgs>(args: SelectSubset<T, UserOnGroupPostsUpdateArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOnGroupPosts.
     * @param {UserOnGroupPostsDeleteManyArgs} args - Arguments to filter UserOnGroupPosts to delete.
     * @example
     * // Delete a few UserOnGroupPosts
     * const { count } = await prisma.userOnGroupPosts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOnGroupPostsDeleteManyArgs>(args?: SelectSubset<T, UserOnGroupPostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnGroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOnGroupPostsUpdateManyArgs>(args: SelectSubset<T, UserOnGroupPostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOnGroupPosts and returns the data updated in the database.
     * @param {UserOnGroupPostsUpdateManyAndReturnArgs} args - Arguments to update many UserOnGroupPosts.
     * @example
     * // Update many UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserOnGroupPosts and only return the `userId`
     * const userOnGroupPostsWithUserIdOnly = await prisma.userOnGroupPosts.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserOnGroupPostsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserOnGroupPostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserOnGroupPosts.
     * @param {UserOnGroupPostsUpsertArgs} args - Arguments to update or create a UserOnGroupPosts.
     * @example
     * // Update or create a UserOnGroupPosts
     * const userOnGroupPosts = await prisma.userOnGroupPosts.upsert({
     *   create: {
     *     // ... data to create a UserOnGroupPosts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOnGroupPosts we want to update
     *   }
     * })
     */
    upsert<T extends UserOnGroupPostsUpsertArgs>(args: SelectSubset<T, UserOnGroupPostsUpsertArgs<ExtArgs>>): Prisma__UserOnGroupPostsClient<$Result.GetResult<Prisma.$UserOnGroupPostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOnGroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsCountArgs} args - Arguments to filter UserOnGroupPosts to count.
     * @example
     * // Count the number of UserOnGroupPosts
     * const count = await prisma.userOnGroupPosts.count({
     *   where: {
     *     // ... the filter for the UserOnGroupPosts we want to count
     *   }
     * })
    **/
    count<T extends UserOnGroupPostsCountArgs>(
      args?: Subset<T, UserOnGroupPostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOnGroupPostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOnGroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOnGroupPostsAggregateArgs>(args: Subset<T, UserOnGroupPostsAggregateArgs>): Prisma.PrismaPromise<GetUserOnGroupPostsAggregateType<T>>

    /**
     * Group by UserOnGroupPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOnGroupPostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOnGroupPostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOnGroupPostsGroupByArgs['orderBy'] }
        : { orderBy?: UserOnGroupPostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOnGroupPostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOnGroupPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOnGroupPosts model
   */
  readonly fields: UserOnGroupPostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOnGroupPosts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOnGroupPostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupPost<T extends GroupPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupPostDefaultArgs<ExtArgs>>): Prisma__GroupPostClient<$Result.GetResult<Prisma.$GroupPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOnGroupPosts model
   */
  interface UserOnGroupPostsFieldRefs {
    readonly userId: FieldRef<"UserOnGroupPosts", 'Int'>
    readonly groupPostId: FieldRef<"UserOnGroupPosts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserOnGroupPosts findUnique
   */
  export type UserOnGroupPostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroupPosts to fetch.
     */
    where: UserOnGroupPostsWhereUniqueInput
  }

  /**
   * UserOnGroupPosts findUniqueOrThrow
   */
  export type UserOnGroupPostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroupPosts to fetch.
     */
    where: UserOnGroupPostsWhereUniqueInput
  }

  /**
   * UserOnGroupPosts findFirst
   */
  export type UserOnGroupPostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroupPosts to fetch.
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupPosts to fetch.
     */
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupPosts.
     */
    cursor?: UserOnGroupPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupPosts.
     */
    distinct?: UserOnGroupPostsScalarFieldEnum | UserOnGroupPostsScalarFieldEnum[]
  }

  /**
   * UserOnGroupPosts findFirstOrThrow
   */
  export type UserOnGroupPostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroupPosts to fetch.
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupPosts to fetch.
     */
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOnGroupPosts.
     */
    cursor?: UserOnGroupPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOnGroupPosts.
     */
    distinct?: UserOnGroupPostsScalarFieldEnum | UserOnGroupPostsScalarFieldEnum[]
  }

  /**
   * UserOnGroupPosts findMany
   */
  export type UserOnGroupPostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter, which UserOnGroupPosts to fetch.
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOnGroupPosts to fetch.
     */
    orderBy?: UserOnGroupPostsOrderByWithRelationInput | UserOnGroupPostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOnGroupPosts.
     */
    cursor?: UserOnGroupPostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOnGroupPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOnGroupPosts.
     */
    skip?: number
    distinct?: UserOnGroupPostsScalarFieldEnum | UserOnGroupPostsScalarFieldEnum[]
  }

  /**
   * UserOnGroupPosts create
   */
  export type UserOnGroupPostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOnGroupPosts.
     */
    data: XOR<UserOnGroupPostsCreateInput, UserOnGroupPostsUncheckedCreateInput>
  }

  /**
   * UserOnGroupPosts createMany
   */
  export type UserOnGroupPostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOnGroupPosts.
     */
    data: UserOnGroupPostsCreateManyInput | UserOnGroupPostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOnGroupPosts createManyAndReturn
   */
  export type UserOnGroupPostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * The data used to create many UserOnGroupPosts.
     */
    data: UserOnGroupPostsCreateManyInput | UserOnGroupPostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnGroupPosts update
   */
  export type UserOnGroupPostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOnGroupPosts.
     */
    data: XOR<UserOnGroupPostsUpdateInput, UserOnGroupPostsUncheckedUpdateInput>
    /**
     * Choose, which UserOnGroupPosts to update.
     */
    where: UserOnGroupPostsWhereUniqueInput
  }

  /**
   * UserOnGroupPosts updateMany
   */
  export type UserOnGroupPostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOnGroupPosts.
     */
    data: XOR<UserOnGroupPostsUpdateManyMutationInput, UserOnGroupPostsUncheckedUpdateManyInput>
    /**
     * Filter which UserOnGroupPosts to update
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * Limit how many UserOnGroupPosts to update.
     */
    limit?: number
  }

  /**
   * UserOnGroupPosts updateManyAndReturn
   */
  export type UserOnGroupPostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * The data used to update UserOnGroupPosts.
     */
    data: XOR<UserOnGroupPostsUpdateManyMutationInput, UserOnGroupPostsUncheckedUpdateManyInput>
    /**
     * Filter which UserOnGroupPosts to update
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * Limit how many UserOnGroupPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserOnGroupPosts upsert
   */
  export type UserOnGroupPostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOnGroupPosts to update in case it exists.
     */
    where: UserOnGroupPostsWhereUniqueInput
    /**
     * In case the UserOnGroupPosts found by the `where` argument doesn't exist, create a new UserOnGroupPosts with this data.
     */
    create: XOR<UserOnGroupPostsCreateInput, UserOnGroupPostsUncheckedCreateInput>
    /**
     * In case the UserOnGroupPosts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOnGroupPostsUpdateInput, UserOnGroupPostsUncheckedUpdateInput>
  }

  /**
   * UserOnGroupPosts delete
   */
  export type UserOnGroupPostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
    /**
     * Filter which UserOnGroupPosts to delete.
     */
    where: UserOnGroupPostsWhereUniqueInput
  }

  /**
   * UserOnGroupPosts deleteMany
   */
  export type UserOnGroupPostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOnGroupPosts to delete
     */
    where?: UserOnGroupPostsWhereInput
    /**
     * Limit how many UserOnGroupPosts to delete.
     */
    limit?: number
  }

  /**
   * UserOnGroupPosts without action
   */
  export type UserOnGroupPostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOnGroupPosts
     */
    select?: UserOnGroupPostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOnGroupPosts
     */
    omit?: UserOnGroupPostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOnGroupPostsInclude<ExtArgs> | null
  }


  /**
   * Model UserSetting
   */

  export type AggregateUserSetting = {
    _count: UserSettingCountAggregateOutputType | null
    _avg: UserSettingAvgAggregateOutputType | null
    _sum: UserSettingSumAggregateOutputType | null
    _min: UserSettingMinAggregateOutputType | null
    _max: UserSettingMaxAggregateOutputType | null
  }

  export type UserSettingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserSettingMinAggregateOutputType = {
    id: number | null
    notificationsOn: boolean | null
    smsEnabled: boolean | null
    userId: number | null
  }

  export type UserSettingMaxAggregateOutputType = {
    id: number | null
    notificationsOn: boolean | null
    smsEnabled: boolean | null
    userId: number | null
  }

  export type UserSettingCountAggregateOutputType = {
    id: number
    notificationsOn: number
    smsEnabled: number
    userId: number
    _all: number
  }


  export type UserSettingAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserSettingMinAggregateInputType = {
    id?: true
    notificationsOn?: true
    smsEnabled?: true
    userId?: true
  }

  export type UserSettingMaxAggregateInputType = {
    id?: true
    notificationsOn?: true
    smsEnabled?: true
    userId?: true
  }

  export type UserSettingCountAggregateInputType = {
    id?: true
    notificationsOn?: true
    smsEnabled?: true
    userId?: true
    _all?: true
  }

  export type UserSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSetting to aggregate.
     */
    where?: UserSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingOrderByWithRelationInput | UserSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingMaxAggregateInputType
  }

  export type GetUserSettingAggregateType<T extends UserSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSetting[P]>
      : GetScalarType<T[P], AggregateUserSetting[P]>
  }




  export type UserSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingWhereInput
    orderBy?: UserSettingOrderByWithAggregationInput | UserSettingOrderByWithAggregationInput[]
    by: UserSettingScalarFieldEnum[] | UserSettingScalarFieldEnum
    having?: UserSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingCountAggregateInputType | true
    _avg?: UserSettingAvgAggregateInputType
    _sum?: UserSettingSumAggregateInputType
    _min?: UserSettingMinAggregateInputType
    _max?: UserSettingMaxAggregateInputType
  }

  export type UserSettingGroupByOutputType = {
    id: number
    notificationsOn: boolean
    smsEnabled: boolean
    userId: number
    _count: UserSettingCountAggregateOutputType | null
    _avg: UserSettingAvgAggregateOutputType | null
    _sum: UserSettingSumAggregateOutputType | null
    _min: UserSettingMinAggregateOutputType | null
    _max: UserSettingMaxAggregateOutputType | null
  }

  type GetUserSettingGroupByPayload<T extends UserSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationsOn?: boolean
    smsEnabled?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSetting"]>

  export type UserSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationsOn?: boolean
    smsEnabled?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSetting"]>

  export type UserSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationsOn?: boolean
    smsEnabled?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSetting"]>

  export type UserSettingSelectScalar = {
    id?: boolean
    notificationsOn?: boolean
    smsEnabled?: boolean
    userId?: boolean
  }

  export type UserSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationsOn" | "smsEnabled" | "userId", ExtArgs["result"]["userSetting"]>
  export type UserSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSetting"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      notificationsOn: boolean
      smsEnabled: boolean
      userId: number
    }, ExtArgs["result"]["userSetting"]>
    composites: {}
  }

  type UserSettingGetPayload<S extends boolean | null | undefined | UserSettingDefaultArgs> = $Result.GetResult<Prisma.$UserSettingPayload, S>

  type UserSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingCountAggregateInputType | true
    }

  export interface UserSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSetting'], meta: { name: 'UserSetting' } }
    /**
     * Find zero or one UserSetting that matches the filter.
     * @param {UserSettingFindUniqueArgs} args - Arguments to find a UserSetting
     * @example
     * // Get one UserSetting
     * const userSetting = await prisma.userSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingFindUniqueArgs>(args: SelectSubset<T, UserSettingFindUniqueArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingFindUniqueOrThrowArgs} args - Arguments to find a UserSetting
     * @example
     * // Get one UserSetting
     * const userSetting = await prisma.userSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingFindFirstArgs} args - Arguments to find a UserSetting
     * @example
     * // Get one UserSetting
     * const userSetting = await prisma.userSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingFindFirstArgs>(args?: SelectSubset<T, UserSettingFindFirstArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingFindFirstOrThrowArgs} args - Arguments to find a UserSetting
     * @example
     * // Get one UserSetting
     * const userSetting = await prisma.userSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSetting.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingWithIdOnly = await prisma.userSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingFindManyArgs>(args?: SelectSubset<T, UserSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSetting.
     * @param {UserSettingCreateArgs} args - Arguments to create a UserSetting.
     * @example
     * // Create one UserSetting
     * const UserSetting = await prisma.userSetting.create({
     *   data: {
     *     // ... data to create a UserSetting
     *   }
     * })
     * 
     */
    create<T extends UserSettingCreateArgs>(args: SelectSubset<T, UserSettingCreateArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSetting = await prisma.userSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingCreateManyArgs>(args?: SelectSubset<T, UserSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSetting = await prisma.userSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingWithIdOnly = await prisma.userSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSetting.
     * @param {UserSettingDeleteArgs} args - Arguments to delete one UserSetting.
     * @example
     * // Delete one UserSetting
     * const UserSetting = await prisma.userSetting.delete({
     *   where: {
     *     // ... filter to delete one UserSetting
     *   }
     * })
     * 
     */
    delete<T extends UserSettingDeleteArgs>(args: SelectSubset<T, UserSettingDeleteArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSetting.
     * @param {UserSettingUpdateArgs} args - Arguments to update one UserSetting.
     * @example
     * // Update one UserSetting
     * const userSetting = await prisma.userSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingUpdateArgs>(args: SelectSubset<T, UserSettingUpdateArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingDeleteManyArgs>(args?: SelectSubset<T, UserSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSetting = await prisma.userSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingUpdateManyArgs>(args: SelectSubset<T, UserSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSetting = await prisma.userSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingWithIdOnly = await prisma.userSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSetting.
     * @param {UserSettingUpsertArgs} args - Arguments to update or create a UserSetting.
     * @example
     * // Update or create a UserSetting
     * const userSetting = await prisma.userSetting.upsert({
     *   create: {
     *     // ... data to create a UserSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSetting we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingUpsertArgs>(args: SelectSubset<T, UserSettingUpsertArgs<ExtArgs>>): Prisma__UserSettingClient<$Result.GetResult<Prisma.$UserSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSetting.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingCountArgs>(
      args?: Subset<T, UserSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSettingAggregateArgs>(args: Subset<T, UserSettingAggregateArgs>): Prisma.PrismaPromise<GetUserSettingAggregateType<T>>

    /**
     * Group by UserSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSetting model
   */
  readonly fields: UserSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSetting model
   */
  interface UserSettingFieldRefs {
    readonly id: FieldRef<"UserSetting", 'Int'>
    readonly notificationsOn: FieldRef<"UserSetting", 'Boolean'>
    readonly smsEnabled: FieldRef<"UserSetting", 'Boolean'>
    readonly userId: FieldRef<"UserSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserSetting findUnique
   */
  export type UserSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter, which UserSetting to fetch.
     */
    where: UserSettingWhereUniqueInput
  }

  /**
   * UserSetting findUniqueOrThrow
   */
  export type UserSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter, which UserSetting to fetch.
     */
    where: UserSettingWhereUniqueInput
  }

  /**
   * UserSetting findFirst
   */
  export type UserSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter, which UserSetting to fetch.
     */
    where?: UserSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingOrderByWithRelationInput | UserSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingScalarFieldEnum | UserSettingScalarFieldEnum[]
  }

  /**
   * UserSetting findFirstOrThrow
   */
  export type UserSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter, which UserSetting to fetch.
     */
    where?: UserSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingOrderByWithRelationInput | UserSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingScalarFieldEnum | UserSettingScalarFieldEnum[]
  }

  /**
   * UserSetting findMany
   */
  export type UserSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingOrderByWithRelationInput | UserSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingScalarFieldEnum | UserSettingScalarFieldEnum[]
  }

  /**
   * UserSetting create
   */
  export type UserSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSetting.
     */
    data: XOR<UserSettingCreateInput, UserSettingUncheckedCreateInput>
  }

  /**
   * UserSetting createMany
   */
  export type UserSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingCreateManyInput | UserSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSetting createManyAndReturn
   */
  export type UserSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingCreateManyInput | UserSettingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSetting update
   */
  export type UserSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSetting.
     */
    data: XOR<UserSettingUpdateInput, UserSettingUncheckedUpdateInput>
    /**
     * Choose, which UserSetting to update.
     */
    where: UserSettingWhereUniqueInput
  }

  /**
   * UserSetting updateMany
   */
  export type UserSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingUpdateManyMutationInput, UserSettingUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSetting updateManyAndReturn
   */
  export type UserSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingUpdateManyMutationInput, UserSettingUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSetting upsert
   */
  export type UserSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSetting to update in case it exists.
     */
    where: UserSettingWhereUniqueInput
    /**
     * In case the UserSetting found by the `where` argument doesn't exist, create a new UserSetting with this data.
     */
    create: XOR<UserSettingCreateInput, UserSettingUncheckedCreateInput>
    /**
     * In case the UserSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingUpdateInput, UserSettingUncheckedUpdateInput>
  }

  /**
   * UserSetting delete
   */
  export type UserSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
    /**
     * Filter which UserSetting to delete.
     */
    where: UserSettingWhereUniqueInput
  }

  /**
   * UserSetting deleteMany
   */
  export type UserSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSetting without action
   */
  export type UserSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSetting
     */
    select?: UserSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSetting
     */
    omit?: UserSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const GroupPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupPostScalarFieldEnum = (typeof GroupPostScalarFieldEnum)[keyof typeof GroupPostScalarFieldEnum]


  export const UserOnGroupPostsScalarFieldEnum: {
    userId: 'userId',
    groupPostId: 'groupPostId'
  };

  export type UserOnGroupPostsScalarFieldEnum = (typeof UserOnGroupPostsScalarFieldEnum)[keyof typeof UserOnGroupPostsScalarFieldEnum]


  export const UserSettingScalarFieldEnum: {
    id: 'id',
    notificationsOn: 'notificationsOn',
    smsEnabled: 'smsEnabled',
    userId: 'userId'
  };

  export type UserSettingScalarFieldEnum = (typeof UserSettingScalarFieldEnum)[keyof typeof UserSettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userSetting?: XOR<UserSettingNullableScalarRelationFilter, UserSettingWhereInput> | null
    posts?: PostListRelationFilter
    groupPosts?: UserOnGroupPostsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userSetting?: UserSettingOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    groupPosts?: UserOnGroupPostsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userSetting?: XOR<UserSettingNullableScalarRelationFilter, UserSettingWhereInput> | null
    posts?: PostListRelationFilter
    groupPosts?: UserOnGroupPostsListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    description?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type GroupPostWhereInput = {
    AND?: GroupPostWhereInput | GroupPostWhereInput[]
    OR?: GroupPostWhereInput[]
    NOT?: GroupPostWhereInput | GroupPostWhereInput[]
    id?: IntFilter<"GroupPost"> | number
    title?: StringFilter<"GroupPost"> | string
    description?: StringFilter<"GroupPost"> | string
    createdAt?: DateTimeFilter<"GroupPost"> | Date | string
    updatedAt?: DateTimeFilter<"GroupPost"> | Date | string
    users?: UserOnGroupPostsListRelationFilter
  }

  export type GroupPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOnGroupPostsOrderByRelationAggregateInput
  }

  export type GroupPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupPostWhereInput | GroupPostWhereInput[]
    OR?: GroupPostWhereInput[]
    NOT?: GroupPostWhereInput | GroupPostWhereInput[]
    title?: StringFilter<"GroupPost"> | string
    description?: StringFilter<"GroupPost"> | string
    createdAt?: DateTimeFilter<"GroupPost"> | Date | string
    updatedAt?: DateTimeFilter<"GroupPost"> | Date | string
    users?: UserOnGroupPostsListRelationFilter
  }, "id">

  export type GroupPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupPostCountOrderByAggregateInput
    _avg?: GroupPostAvgOrderByAggregateInput
    _max?: GroupPostMaxOrderByAggregateInput
    _min?: GroupPostMinOrderByAggregateInput
    _sum?: GroupPostSumOrderByAggregateInput
  }

  export type GroupPostScalarWhereWithAggregatesInput = {
    AND?: GroupPostScalarWhereWithAggregatesInput | GroupPostScalarWhereWithAggregatesInput[]
    OR?: GroupPostScalarWhereWithAggregatesInput[]
    NOT?: GroupPostScalarWhereWithAggregatesInput | GroupPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GroupPost"> | number
    title?: StringWithAggregatesFilter<"GroupPost"> | string
    description?: StringWithAggregatesFilter<"GroupPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GroupPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GroupPost"> | Date | string
  }

  export type UserOnGroupPostsWhereInput = {
    AND?: UserOnGroupPostsWhereInput | UserOnGroupPostsWhereInput[]
    OR?: UserOnGroupPostsWhereInput[]
    NOT?: UserOnGroupPostsWhereInput | UserOnGroupPostsWhereInput[]
    userId?: IntFilter<"UserOnGroupPosts"> | number
    groupPostId?: IntFilter<"UserOnGroupPosts"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupPost?: XOR<GroupPostScalarRelationFilter, GroupPostWhereInput>
  }

  export type UserOnGroupPostsOrderByWithRelationInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
    user?: UserOrderByWithRelationInput
    groupPost?: GroupPostOrderByWithRelationInput
  }

  export type UserOnGroupPostsWhereUniqueInput = Prisma.AtLeast<{
    userId_groupPostId?: UserOnGroupPostsUserIdGroupPostIdCompoundUniqueInput
    AND?: UserOnGroupPostsWhereInput | UserOnGroupPostsWhereInput[]
    OR?: UserOnGroupPostsWhereInput[]
    NOT?: UserOnGroupPostsWhereInput | UserOnGroupPostsWhereInput[]
    userId?: IntFilter<"UserOnGroupPosts"> | number
    groupPostId?: IntFilter<"UserOnGroupPosts"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupPost?: XOR<GroupPostScalarRelationFilter, GroupPostWhereInput>
  }, "userId_groupPostId">

  export type UserOnGroupPostsOrderByWithAggregationInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
    _count?: UserOnGroupPostsCountOrderByAggregateInput
    _avg?: UserOnGroupPostsAvgOrderByAggregateInput
    _max?: UserOnGroupPostsMaxOrderByAggregateInput
    _min?: UserOnGroupPostsMinOrderByAggregateInput
    _sum?: UserOnGroupPostsSumOrderByAggregateInput
  }

  export type UserOnGroupPostsScalarWhereWithAggregatesInput = {
    AND?: UserOnGroupPostsScalarWhereWithAggregatesInput | UserOnGroupPostsScalarWhereWithAggregatesInput[]
    OR?: UserOnGroupPostsScalarWhereWithAggregatesInput[]
    NOT?: UserOnGroupPostsScalarWhereWithAggregatesInput | UserOnGroupPostsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserOnGroupPosts"> | number
    groupPostId?: IntWithAggregatesFilter<"UserOnGroupPosts"> | number
  }

  export type UserSettingWhereInput = {
    AND?: UserSettingWhereInput | UserSettingWhereInput[]
    OR?: UserSettingWhereInput[]
    NOT?: UserSettingWhereInput | UserSettingWhereInput[]
    id?: IntFilter<"UserSetting"> | number
    notificationsOn?: BoolFilter<"UserSetting"> | boolean
    smsEnabled?: BoolFilter<"UserSetting"> | boolean
    userId?: IntFilter<"UserSetting"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingOrderByWithRelationInput = {
    id?: SortOrder
    notificationsOn?: SortOrder
    smsEnabled?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserSettingWhereInput | UserSettingWhereInput[]
    OR?: UserSettingWhereInput[]
    NOT?: UserSettingWhereInput | UserSettingWhereInput[]
    notificationsOn?: BoolFilter<"UserSetting"> | boolean
    smsEnabled?: BoolFilter<"UserSetting"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingOrderByWithAggregationInput = {
    id?: SortOrder
    notificationsOn?: SortOrder
    smsEnabled?: SortOrder
    userId?: SortOrder
    _count?: UserSettingCountOrderByAggregateInput
    _avg?: UserSettingAvgOrderByAggregateInput
    _max?: UserSettingMaxOrderByAggregateInput
    _min?: UserSettingMinOrderByAggregateInput
    _sum?: UserSettingSumOrderByAggregateInput
  }

  export type UserSettingScalarWhereWithAggregatesInput = {
    AND?: UserSettingScalarWhereWithAggregatesInput | UserSettingScalarWhereWithAggregatesInput[]
    OR?: UserSettingScalarWhereWithAggregatesInput[]
    NOT?: UserSettingScalarWhereWithAggregatesInput | UserSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSetting"> | number
    notificationsOn?: BoolWithAggregatesFilter<"UserSetting"> | boolean
    smsEnabled?: BoolWithAggregatesFilter<"UserSetting"> | boolean
    userId?: IntWithAggregatesFilter<"UserSetting"> | number
  }

  export type UserCreateInput = {
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    groupPosts?: UserOnGroupPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    groupPosts?: UserOnGroupPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupPostCreateInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOnGroupPostsCreateNestedManyWithoutGroupPostInput
  }

  export type GroupPostUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserOnGroupPostsUncheckedCreateNestedManyWithoutGroupPostInput
  }

  export type GroupPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnGroupPostsUpdateManyWithoutGroupPostNestedInput
  }

  export type GroupPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserOnGroupPostsUncheckedUpdateManyWithoutGroupPostNestedInput
  }

  export type GroupPostCreateManyInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupPostsCreateInput = {
    user: UserCreateNestedOneWithoutGroupPostsInput
    groupPost: GroupPostCreateNestedOneWithoutUsersInput
  }

  export type UserOnGroupPostsUncheckedCreateInput = {
    userId: number
    groupPostId: number
  }

  export type UserOnGroupPostsUpdateInput = {
    user?: UserUpdateOneRequiredWithoutGroupPostsNestedInput
    groupPost?: GroupPostUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnGroupPostsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupPostId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnGroupPostsCreateManyInput = {
    userId: number
    groupPostId: number
  }

  export type UserOnGroupPostsUpdateManyMutationInput = {

  }

  export type UserOnGroupPostsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupPostId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSettingCreateInput = {
    notificationsOn: boolean
    smsEnabled: boolean
    user: UserCreateNestedOneWithoutUserSettingInput
  }

  export type UserSettingUncheckedCreateInput = {
    id?: number
    notificationsOn: boolean
    smsEnabled: boolean
    userId: number
  }

  export type UserSettingUpdateInput = {
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserSettingNestedInput
  }

  export type UserSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserSettingCreateManyInput = {
    id?: number
    notificationsOn: boolean
    smsEnabled: boolean
    userId: number
  }

  export type UserSettingUpdateManyMutationInput = {
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserSettingNullableScalarRelationFilter = {
    is?: UserSettingWhereInput | null
    isNot?: UserSettingWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type UserOnGroupPostsListRelationFilter = {
    every?: UserOnGroupPostsWhereInput
    some?: UserOnGroupPostsWhereInput
    none?: UserOnGroupPostsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOnGroupPostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GroupPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupPostAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupPostSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupPostScalarRelationFilter = {
    is?: GroupPostWhereInput
    isNot?: GroupPostWhereInput
  }

  export type UserOnGroupPostsUserIdGroupPostIdCompoundUniqueInput = {
    userId: number
    groupPostId: number
  }

  export type UserOnGroupPostsCountOrderByAggregateInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
  }

  export type UserOnGroupPostsAvgOrderByAggregateInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
  }

  export type UserOnGroupPostsMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
  }

  export type UserOnGroupPostsMinOrderByAggregateInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
  }

  export type UserOnGroupPostsSumOrderByAggregateInput = {
    userId?: SortOrder
    groupPostId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserSettingCountOrderByAggregateInput = {
    id?: SortOrder
    notificationsOn?: SortOrder
    smsEnabled?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationsOn?: SortOrder
    smsEnabled?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingMinOrderByAggregateInput = {
    id?: SortOrder
    notificationsOn?: SortOrder
    smsEnabled?: SortOrder
    userId?: SortOrder
  }

  export type UserSettingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserSettingCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingCreateOrConnectWithoutUserInput
    connect?: UserSettingWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserOnGroupPostsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput> | UserOnGroupPostsCreateWithoutUserInput[] | UserOnGroupPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutUserInput | UserOnGroupPostsCreateOrConnectWithoutUserInput[]
    createMany?: UserOnGroupPostsCreateManyUserInputEnvelope
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
  }

  export type UserSettingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingCreateOrConnectWithoutUserInput
    connect?: UserSettingWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserOnGroupPostsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput> | UserOnGroupPostsCreateWithoutUserInput[] | UserOnGroupPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutUserInput | UserOnGroupPostsCreateOrConnectWithoutUserInput[]
    createMany?: UserOnGroupPostsCreateManyUserInputEnvelope
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserSettingUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingCreateOrConnectWithoutUserInput
    upsert?: UserSettingUpsertWithoutUserInput
    disconnect?: UserSettingWhereInput | boolean
    delete?: UserSettingWhereInput | boolean
    connect?: UserSettingWhereUniqueInput
    update?: XOR<XOR<UserSettingUpdateToOneWithWhereWithoutUserInput, UserSettingUpdateWithoutUserInput>, UserSettingUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserOnGroupPostsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput> | UserOnGroupPostsCreateWithoutUserInput[] | UserOnGroupPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutUserInput | UserOnGroupPostsCreateOrConnectWithoutUserInput[]
    upsert?: UserOnGroupPostsUpsertWithWhereUniqueWithoutUserInput | UserOnGroupPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnGroupPostsCreateManyUserInputEnvelope
    set?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    disconnect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    delete?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    update?: UserOnGroupPostsUpdateWithWhereUniqueWithoutUserInput | UserOnGroupPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnGroupPostsUpdateManyWithWhereWithoutUserInput | UserOnGroupPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSettingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingCreateOrConnectWithoutUserInput
    upsert?: UserSettingUpsertWithoutUserInput
    disconnect?: UserSettingWhereInput | boolean
    delete?: UserSettingWhereInput | boolean
    connect?: UserSettingWhereUniqueInput
    update?: XOR<XOR<UserSettingUpdateToOneWithWhereWithoutUserInput, UserSettingUpdateWithoutUserInput>, UserSettingUncheckedUpdateWithoutUserInput>
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserOnGroupPostsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput> | UserOnGroupPostsCreateWithoutUserInput[] | UserOnGroupPostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutUserInput | UserOnGroupPostsCreateOrConnectWithoutUserInput[]
    upsert?: UserOnGroupPostsUpsertWithWhereUniqueWithoutUserInput | UserOnGroupPostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOnGroupPostsCreateManyUserInputEnvelope
    set?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    disconnect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    delete?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    update?: UserOnGroupPostsUpdateWithWhereUniqueWithoutUserInput | UserOnGroupPostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOnGroupPostsUpdateManyWithWhereWithoutUserInput | UserOnGroupPostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserOnGroupPostsCreateNestedManyWithoutGroupPostInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput> | UserOnGroupPostsCreateWithoutGroupPostInput[] | UserOnGroupPostsUncheckedCreateWithoutGroupPostInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutGroupPostInput | UserOnGroupPostsCreateOrConnectWithoutGroupPostInput[]
    createMany?: UserOnGroupPostsCreateManyGroupPostInputEnvelope
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
  }

  export type UserOnGroupPostsUncheckedCreateNestedManyWithoutGroupPostInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput> | UserOnGroupPostsCreateWithoutGroupPostInput[] | UserOnGroupPostsUncheckedCreateWithoutGroupPostInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutGroupPostInput | UserOnGroupPostsCreateOrConnectWithoutGroupPostInput[]
    createMany?: UserOnGroupPostsCreateManyGroupPostInputEnvelope
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
  }

  export type UserOnGroupPostsUpdateManyWithoutGroupPostNestedInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput> | UserOnGroupPostsCreateWithoutGroupPostInput[] | UserOnGroupPostsUncheckedCreateWithoutGroupPostInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutGroupPostInput | UserOnGroupPostsCreateOrConnectWithoutGroupPostInput[]
    upsert?: UserOnGroupPostsUpsertWithWhereUniqueWithoutGroupPostInput | UserOnGroupPostsUpsertWithWhereUniqueWithoutGroupPostInput[]
    createMany?: UserOnGroupPostsCreateManyGroupPostInputEnvelope
    set?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    disconnect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    delete?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    update?: UserOnGroupPostsUpdateWithWhereUniqueWithoutGroupPostInput | UserOnGroupPostsUpdateWithWhereUniqueWithoutGroupPostInput[]
    updateMany?: UserOnGroupPostsUpdateManyWithWhereWithoutGroupPostInput | UserOnGroupPostsUpdateManyWithWhereWithoutGroupPostInput[]
    deleteMany?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
  }

  export type UserOnGroupPostsUncheckedUpdateManyWithoutGroupPostNestedInput = {
    create?: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput> | UserOnGroupPostsCreateWithoutGroupPostInput[] | UserOnGroupPostsUncheckedCreateWithoutGroupPostInput[]
    connectOrCreate?: UserOnGroupPostsCreateOrConnectWithoutGroupPostInput | UserOnGroupPostsCreateOrConnectWithoutGroupPostInput[]
    upsert?: UserOnGroupPostsUpsertWithWhereUniqueWithoutGroupPostInput | UserOnGroupPostsUpsertWithWhereUniqueWithoutGroupPostInput[]
    createMany?: UserOnGroupPostsCreateManyGroupPostInputEnvelope
    set?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    disconnect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    delete?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    connect?: UserOnGroupPostsWhereUniqueInput | UserOnGroupPostsWhereUniqueInput[]
    update?: UserOnGroupPostsUpdateWithWhereUniqueWithoutGroupPostInput | UserOnGroupPostsUpdateWithWhereUniqueWithoutGroupPostInput[]
    updateMany?: UserOnGroupPostsUpdateManyWithWhereWithoutGroupPostInput | UserOnGroupPostsUpdateManyWithWhereWithoutGroupPostInput[]
    deleteMany?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGroupPostsInput = {
    create?: XOR<UserCreateWithoutGroupPostsInput, UserUncheckedCreateWithoutGroupPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupPostsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupPostCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupPostCreateWithoutUsersInput, GroupPostUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupPostCreateOrConnectWithoutUsersInput
    connect?: GroupPostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGroupPostsNestedInput = {
    create?: XOR<UserCreateWithoutGroupPostsInput, UserUncheckedCreateWithoutGroupPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupPostsInput
    upsert?: UserUpsertWithoutGroupPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGroupPostsInput, UserUpdateWithoutGroupPostsInput>, UserUncheckedUpdateWithoutGroupPostsInput>
  }

  export type GroupPostUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GroupPostCreateWithoutUsersInput, GroupPostUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupPostCreateOrConnectWithoutUsersInput
    upsert?: GroupPostUpsertWithoutUsersInput
    connect?: GroupPostWhereUniqueInput
    update?: XOR<XOR<GroupPostUpdateToOneWithWhereWithoutUsersInput, GroupPostUpdateWithoutUsersInput>, GroupPostUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutUserSettingInput = {
    create?: XOR<UserCreateWithoutUserSettingInput, UserUncheckedCreateWithoutUserSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserSettingNestedInput = {
    create?: XOR<UserCreateWithoutUserSettingInput, UserUncheckedCreateWithoutUserSettingInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSettingInput
    upsert?: UserUpsertWithoutUserSettingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSettingInput, UserUpdateWithoutUserSettingInput>, UserUncheckedUpdateWithoutUserSettingInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserSettingCreateWithoutUserInput = {
    notificationsOn: boolean
    smsEnabled: boolean
  }

  export type UserSettingUncheckedCreateWithoutUserInput = {
    id?: number
    notificationsOn: boolean
    smsEnabled: boolean
  }

  export type UserSettingCreateOrConnectWithoutUserInput = {
    where: UserSettingWhereUniqueInput
    create: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
  }

  export type PostCreateWithoutUserInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOnGroupPostsCreateWithoutUserInput = {
    groupPost: GroupPostCreateNestedOneWithoutUsersInput
  }

  export type UserOnGroupPostsUncheckedCreateWithoutUserInput = {
    groupPostId: number
  }

  export type UserOnGroupPostsCreateOrConnectWithoutUserInput = {
    where: UserOnGroupPostsWhereUniqueInput
    create: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupPostsCreateManyUserInputEnvelope = {
    data: UserOnGroupPostsCreateManyUserInput | UserOnGroupPostsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingUpsertWithoutUserInput = {
    update: XOR<UserSettingUpdateWithoutUserInput, UserSettingUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingCreateWithoutUserInput, UserSettingUncheckedCreateWithoutUserInput>
    where?: UserSettingWhereInput
  }

  export type UserSettingUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingWhereInput
    data: XOR<UserSettingUpdateWithoutUserInput, UserSettingUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingUpdateWithoutUserInput = {
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    notificationsOn?: BoolFieldUpdateOperationsInput | boolean
    smsEnabled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    description?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
  }

  export type UserOnGroupPostsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupPostsWhereUniqueInput
    update: XOR<UserOnGroupPostsUpdateWithoutUserInput, UserOnGroupPostsUncheckedUpdateWithoutUserInput>
    create: XOR<UserOnGroupPostsCreateWithoutUserInput, UserOnGroupPostsUncheckedCreateWithoutUserInput>
  }

  export type UserOnGroupPostsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOnGroupPostsWhereUniqueInput
    data: XOR<UserOnGroupPostsUpdateWithoutUserInput, UserOnGroupPostsUncheckedUpdateWithoutUserInput>
  }

  export type UserOnGroupPostsUpdateManyWithWhereWithoutUserInput = {
    where: UserOnGroupPostsScalarWhereInput
    data: XOR<UserOnGroupPostsUpdateManyMutationInput, UserOnGroupPostsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOnGroupPostsScalarWhereInput = {
    AND?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
    OR?: UserOnGroupPostsScalarWhereInput[]
    NOT?: UserOnGroupPostsScalarWhereInput | UserOnGroupPostsScalarWhereInput[]
    userId?: IntFilter<"UserOnGroupPosts"> | number
    groupPostId?: IntFilter<"UserOnGroupPosts"> | number
  }

  export type UserCreateWithoutPostsInput = {
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingCreateNestedOneWithoutUserInput
    groupPosts?: UserOnGroupPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingUncheckedCreateNestedOneWithoutUserInput
    groupPosts?: UserOnGroupPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUpdateOneWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUncheckedUpdateOneWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserOnGroupPostsCreateWithoutGroupPostInput = {
    user: UserCreateNestedOneWithoutGroupPostsInput
  }

  export type UserOnGroupPostsUncheckedCreateWithoutGroupPostInput = {
    userId: number
  }

  export type UserOnGroupPostsCreateOrConnectWithoutGroupPostInput = {
    where: UserOnGroupPostsWhereUniqueInput
    create: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput>
  }

  export type UserOnGroupPostsCreateManyGroupPostInputEnvelope = {
    data: UserOnGroupPostsCreateManyGroupPostInput | UserOnGroupPostsCreateManyGroupPostInput[]
    skipDuplicates?: boolean
  }

  export type UserOnGroupPostsUpsertWithWhereUniqueWithoutGroupPostInput = {
    where: UserOnGroupPostsWhereUniqueInput
    update: XOR<UserOnGroupPostsUpdateWithoutGroupPostInput, UserOnGroupPostsUncheckedUpdateWithoutGroupPostInput>
    create: XOR<UserOnGroupPostsCreateWithoutGroupPostInput, UserOnGroupPostsUncheckedCreateWithoutGroupPostInput>
  }

  export type UserOnGroupPostsUpdateWithWhereUniqueWithoutGroupPostInput = {
    where: UserOnGroupPostsWhereUniqueInput
    data: XOR<UserOnGroupPostsUpdateWithoutGroupPostInput, UserOnGroupPostsUncheckedUpdateWithoutGroupPostInput>
  }

  export type UserOnGroupPostsUpdateManyWithWhereWithoutGroupPostInput = {
    where: UserOnGroupPostsScalarWhereInput
    data: XOR<UserOnGroupPostsUpdateManyMutationInput, UserOnGroupPostsUncheckedUpdateManyWithoutGroupPostInput>
  }

  export type UserCreateWithoutGroupPostsInput = {
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingCreateNestedOneWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupPostsInput = {
    id?: number
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userSetting?: UserSettingUncheckedCreateNestedOneWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupPostsInput, UserUncheckedCreateWithoutGroupPostsInput>
  }

  export type GroupPostCreateWithoutUsersInput = {
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupPostUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupPostCreateOrConnectWithoutUsersInput = {
    where: GroupPostWhereUniqueInput
    create: XOR<GroupPostCreateWithoutUsersInput, GroupPostUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutGroupPostsInput = {
    update: XOR<UserUpdateWithoutGroupPostsInput, UserUncheckedUpdateWithoutGroupPostsInput>
    create: XOR<UserCreateWithoutGroupPostsInput, UserUncheckedCreateWithoutGroupPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGroupPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGroupPostsInput, UserUncheckedUpdateWithoutGroupPostsInput>
  }

  export type UserUpdateWithoutGroupPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUpdateOneWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSetting?: UserSettingUncheckedUpdateOneWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupPostUpsertWithoutUsersInput = {
    update: XOR<GroupPostUpdateWithoutUsersInput, GroupPostUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupPostCreateWithoutUsersInput, GroupPostUncheckedCreateWithoutUsersInput>
    where?: GroupPostWhereInput
  }

  export type GroupPostUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupPostWhereInput
    data: XOR<GroupPostUpdateWithoutUsersInput, GroupPostUncheckedUpdateWithoutUsersInput>
  }

  export type GroupPostUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupPostUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserSettingInput = {
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    groupPosts?: UserOnGroupPostsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSettingInput = {
    id?: number
    username: string
    displayName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    groupPosts?: UserOnGroupPostsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSettingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSettingInput, UserUncheckedCreateWithoutUserSettingInput>
  }

  export type UserUpsertWithoutUserSettingInput = {
    update: XOR<UserUpdateWithoutUserSettingInput, UserUncheckedUpdateWithoutUserSettingInput>
    create: XOR<UserCreateWithoutUserSettingInput, UserUncheckedCreateWithoutUserSettingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSettingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSettingInput, UserUncheckedUpdateWithoutUserSettingInput>
  }

  export type UserUpdateWithoutUserSettingInput = {
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    groupPosts?: UserOnGroupPostsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserOnGroupPostsCreateManyUserInput = {
    groupPostId: number
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserOnGroupPostsUpdateWithoutUserInput = {
    groupPost?: GroupPostUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserOnGroupPostsUncheckedUpdateWithoutUserInput = {
    groupPostId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnGroupPostsUncheckedUpdateManyWithoutUserInput = {
    groupPostId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnGroupPostsCreateManyGroupPostInput = {
    userId: number
  }

  export type UserOnGroupPostsUpdateWithoutGroupPostInput = {
    user?: UserUpdateOneRequiredWithoutGroupPostsNestedInput
  }

  export type UserOnGroupPostsUncheckedUpdateWithoutGroupPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserOnGroupPostsUncheckedUpdateManyWithoutGroupPostInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}