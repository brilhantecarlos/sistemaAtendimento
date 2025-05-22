
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
 * Model Senha
 * 
 */
export type Senha = $Result.DefaultSelection<Prisma.$SenhaPayload>
/**
 * Model Guiche
 * 
 */
export type Guiche = $Result.DefaultSelection<Prisma.$GuichePayload>
/**
 * Model Painel
 * 
 */
export type Painel = $Result.DefaultSelection<Prisma.$PainelPayload>
/**
 * Model Estatistica
 * 
 */
export type Estatistica = $Result.DefaultSelection<Prisma.$EstatisticaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoSenha: {
  SP: 'SP',
  SG: 'SG',
  SE: 'SE'
};

export type TipoSenha = (typeof TipoSenha)[keyof typeof TipoSenha]


export const StatusAtendimento: {
  NAO_ATENDIDA: 'NAO_ATENDIDA',
  EM_ATENDIMENTO: 'EM_ATENDIMENTO',
  ATENDIDA: 'ATENDIDA',
  DESISTENCIA: 'DESISTENCIA'
};

export type StatusAtendimento = (typeof StatusAtendimento)[keyof typeof StatusAtendimento]


export const StatusGuiche: {
  DISPONIVEL: 'DISPONIVEL',
  OCUPADO: 'OCUPADO',
  FECHADO: 'FECHADO'
};

export type StatusGuiche = (typeof StatusGuiche)[keyof typeof StatusGuiche]

}

export type TipoSenha = $Enums.TipoSenha

export const TipoSenha: typeof $Enums.TipoSenha

export type StatusAtendimento = $Enums.StatusAtendimento

export const StatusAtendimento: typeof $Enums.StatusAtendimento

export type StatusGuiche = $Enums.StatusGuiche

export const StatusGuiche: typeof $Enums.StatusGuiche

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Senhas
 * const senhas = await prisma.senha.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Senhas
   * const senhas = await prisma.senha.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.senha`: Exposes CRUD operations for the **Senha** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Senhas
    * const senhas = await prisma.senha.findMany()
    * ```
    */
  get senha(): Prisma.SenhaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guiche`: Exposes CRUD operations for the **Guiche** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guiches
    * const guiches = await prisma.guiche.findMany()
    * ```
    */
  get guiche(): Prisma.GuicheDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.painel`: Exposes CRUD operations for the **Painel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Painels
    * const painels = await prisma.painel.findMany()
    * ```
    */
  get painel(): Prisma.PainelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estatistica`: Exposes CRUD operations for the **Estatistica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estatisticas
    * const estatisticas = await prisma.estatistica.findMany()
    * ```
    */
  get estatistica(): Prisma.EstatisticaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Senha: 'Senha',
    Guiche: 'Guiche',
    Painel: 'Painel',
    Estatistica: 'Estatistica'
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
      modelProps: "senha" | "guiche" | "painel" | "estatistica"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Senha: {
        payload: Prisma.$SenhaPayload<ExtArgs>
        fields: Prisma.SenhaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SenhaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SenhaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          findFirst: {
            args: Prisma.SenhaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SenhaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          findMany: {
            args: Prisma.SenhaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          create: {
            args: Prisma.SenhaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          createMany: {
            args: Prisma.SenhaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SenhaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          delete: {
            args: Prisma.SenhaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          update: {
            args: Prisma.SenhaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          deleteMany: {
            args: Prisma.SenhaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SenhaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SenhaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>[]
          }
          upsert: {
            args: Prisma.SenhaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SenhaPayload>
          }
          aggregate: {
            args: Prisma.SenhaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSenha>
          }
          groupBy: {
            args: Prisma.SenhaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SenhaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SenhaCountArgs<ExtArgs>
            result: $Utils.Optional<SenhaCountAggregateOutputType> | number
          }
        }
      }
      Guiche: {
        payload: Prisma.$GuichePayload<ExtArgs>
        fields: Prisma.GuicheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuicheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuicheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findFirst: {
            args: Prisma.GuicheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuicheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          findMany: {
            args: Prisma.GuicheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          create: {
            args: Prisma.GuicheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          createMany: {
            args: Prisma.GuicheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuicheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          delete: {
            args: Prisma.GuicheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          update: {
            args: Prisma.GuicheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          deleteMany: {
            args: Prisma.GuicheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuicheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuicheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>[]
          }
          upsert: {
            args: Prisma.GuicheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuichePayload>
          }
          aggregate: {
            args: Prisma.GuicheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuiche>
          }
          groupBy: {
            args: Prisma.GuicheGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuicheGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuicheCountArgs<ExtArgs>
            result: $Utils.Optional<GuicheCountAggregateOutputType> | number
          }
        }
      }
      Painel: {
        payload: Prisma.$PainelPayload<ExtArgs>
        fields: Prisma.PainelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PainelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PainelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          findFirst: {
            args: Prisma.PainelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PainelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          findMany: {
            args: Prisma.PainelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>[]
          }
          create: {
            args: Prisma.PainelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          createMany: {
            args: Prisma.PainelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PainelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>[]
          }
          delete: {
            args: Prisma.PainelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          update: {
            args: Prisma.PainelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          deleteMany: {
            args: Prisma.PainelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PainelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PainelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>[]
          }
          upsert: {
            args: Prisma.PainelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          aggregate: {
            args: Prisma.PainelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePainel>
          }
          groupBy: {
            args: Prisma.PainelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PainelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PainelCountArgs<ExtArgs>
            result: $Utils.Optional<PainelCountAggregateOutputType> | number
          }
        }
      }
      Estatistica: {
        payload: Prisma.$EstatisticaPayload<ExtArgs>
        fields: Prisma.EstatisticaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstatisticaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstatisticaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          findFirst: {
            args: Prisma.EstatisticaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstatisticaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          findMany: {
            args: Prisma.EstatisticaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>[]
          }
          create: {
            args: Prisma.EstatisticaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          createMany: {
            args: Prisma.EstatisticaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstatisticaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>[]
          }
          delete: {
            args: Prisma.EstatisticaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          update: {
            args: Prisma.EstatisticaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          deleteMany: {
            args: Prisma.EstatisticaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstatisticaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstatisticaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>[]
          }
          upsert: {
            args: Prisma.EstatisticaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstatisticaPayload>
          }
          aggregate: {
            args: Prisma.EstatisticaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstatistica>
          }
          groupBy: {
            args: Prisma.EstatisticaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstatisticaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstatisticaCountArgs<ExtArgs>
            result: $Utils.Optional<EstatisticaCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    senha?: SenhaOmit
    guiche?: GuicheOmit
    painel?: PainelOmit
    estatistica?: EstatisticaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Senha
   */

  export type AggregateSenha = {
    _count: SenhaCountAggregateOutputType | null
    _avg: SenhaAvgAggregateOutputType | null
    _sum: SenhaSumAggregateOutputType | null
    _min: SenhaMinAggregateOutputType | null
    _max: SenhaMaxAggregateOutputType | null
  }

  export type SenhaAvgAggregateOutputType = {
    id: number | null
    tempoAtendimento: number | null
  }

  export type SenhaSumAggregateOutputType = {
    id: number | null
    tempoAtendimento: number | null
  }

  export type SenhaMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    tipo: $Enums.TipoSenha | null
    dataCriacao: Date | null
    dataChamada: Date | null
    guiche: string | null
    tempoAtendimento: number | null
    status: $Enums.StatusAtendimento | null
  }

  export type SenhaMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    tipo: $Enums.TipoSenha | null
    dataCriacao: Date | null
    dataChamada: Date | null
    guiche: string | null
    tempoAtendimento: number | null
    status: $Enums.StatusAtendimento | null
  }

  export type SenhaCountAggregateOutputType = {
    id: number
    codigo: number
    tipo: number
    dataCriacao: number
    dataChamada: number
    guiche: number
    tempoAtendimento: number
    status: number
    _all: number
  }


  export type SenhaAvgAggregateInputType = {
    id?: true
    tempoAtendimento?: true
  }

  export type SenhaSumAggregateInputType = {
    id?: true
    tempoAtendimento?: true
  }

  export type SenhaMinAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    dataCriacao?: true
    dataChamada?: true
    guiche?: true
    tempoAtendimento?: true
    status?: true
  }

  export type SenhaMaxAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    dataCriacao?: true
    dataChamada?: true
    guiche?: true
    tempoAtendimento?: true
    status?: true
  }

  export type SenhaCountAggregateInputType = {
    id?: true
    codigo?: true
    tipo?: true
    dataCriacao?: true
    dataChamada?: true
    guiche?: true
    tempoAtendimento?: true
    status?: true
    _all?: true
  }

  export type SenhaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senha to aggregate.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Senhas
    **/
    _count?: true | SenhaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SenhaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SenhaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SenhaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SenhaMaxAggregateInputType
  }

  export type GetSenhaAggregateType<T extends SenhaAggregateArgs> = {
        [P in keyof T & keyof AggregateSenha]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSenha[P]>
      : GetScalarType<T[P], AggregateSenha[P]>
  }




  export type SenhaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SenhaWhereInput
    orderBy?: SenhaOrderByWithAggregationInput | SenhaOrderByWithAggregationInput[]
    by: SenhaScalarFieldEnum[] | SenhaScalarFieldEnum
    having?: SenhaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SenhaCountAggregateInputType | true
    _avg?: SenhaAvgAggregateInputType
    _sum?: SenhaSumAggregateInputType
    _min?: SenhaMinAggregateInputType
    _max?: SenhaMaxAggregateInputType
  }

  export type SenhaGroupByOutputType = {
    id: number
    codigo: string
    tipo: $Enums.TipoSenha
    dataCriacao: Date
    dataChamada: Date | null
    guiche: string | null
    tempoAtendimento: number | null
    status: $Enums.StatusAtendimento
    _count: SenhaCountAggregateOutputType | null
    _avg: SenhaAvgAggregateOutputType | null
    _sum: SenhaSumAggregateOutputType | null
    _min: SenhaMinAggregateOutputType | null
    _max: SenhaMaxAggregateOutputType | null
  }

  type GetSenhaGroupByPayload<T extends SenhaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SenhaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SenhaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SenhaGroupByOutputType[P]>
            : GetScalarType<T[P], SenhaGroupByOutputType[P]>
        }
      >
    >


  export type SenhaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    dataChamada?: boolean
    guiche?: boolean
    tempoAtendimento?: boolean
    status?: boolean
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    dataChamada?: boolean
    guiche?: boolean
    tempoAtendimento?: boolean
    status?: boolean
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    dataChamada?: boolean
    guiche?: boolean
    tempoAtendimento?: boolean
    status?: boolean
  }, ExtArgs["result"]["senha"]>

  export type SenhaSelectScalar = {
    id?: boolean
    codigo?: boolean
    tipo?: boolean
    dataCriacao?: boolean
    dataChamada?: boolean
    guiche?: boolean
    tempoAtendimento?: boolean
    status?: boolean
  }

  export type SenhaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "tipo" | "dataCriacao" | "dataChamada" | "guiche" | "tempoAtendimento" | "status", ExtArgs["result"]["senha"]>

  export type $SenhaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Senha"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      tipo: $Enums.TipoSenha
      dataCriacao: Date
      dataChamada: Date | null
      guiche: string | null
      tempoAtendimento: number | null
      status: $Enums.StatusAtendimento
    }, ExtArgs["result"]["senha"]>
    composites: {}
  }

  type SenhaGetPayload<S extends boolean | null | undefined | SenhaDefaultArgs> = $Result.GetResult<Prisma.$SenhaPayload, S>

  type SenhaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SenhaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SenhaCountAggregateInputType | true
    }

  export interface SenhaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Senha'], meta: { name: 'Senha' } }
    /**
     * Find zero or one Senha that matches the filter.
     * @param {SenhaFindUniqueArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SenhaFindUniqueArgs>(args: SelectSubset<T, SenhaFindUniqueArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Senha that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SenhaFindUniqueOrThrowArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SenhaFindUniqueOrThrowArgs>(args: SelectSubset<T, SenhaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senha that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindFirstArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SenhaFindFirstArgs>(args?: SelectSubset<T, SenhaFindFirstArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Senha that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindFirstOrThrowArgs} args - Arguments to find a Senha
     * @example
     * // Get one Senha
     * const senha = await prisma.senha.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SenhaFindFirstOrThrowArgs>(args?: SelectSubset<T, SenhaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Senhas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Senhas
     * const senhas = await prisma.senha.findMany()
     * 
     * // Get first 10 Senhas
     * const senhas = await prisma.senha.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const senhaWithIdOnly = await prisma.senha.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SenhaFindManyArgs>(args?: SelectSubset<T, SenhaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Senha.
     * @param {SenhaCreateArgs} args - Arguments to create a Senha.
     * @example
     * // Create one Senha
     * const Senha = await prisma.senha.create({
     *   data: {
     *     // ... data to create a Senha
     *   }
     * })
     * 
     */
    create<T extends SenhaCreateArgs>(args: SelectSubset<T, SenhaCreateArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Senhas.
     * @param {SenhaCreateManyArgs} args - Arguments to create many Senhas.
     * @example
     * // Create many Senhas
     * const senha = await prisma.senha.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SenhaCreateManyArgs>(args?: SelectSubset<T, SenhaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Senhas and returns the data saved in the database.
     * @param {SenhaCreateManyAndReturnArgs} args - Arguments to create many Senhas.
     * @example
     * // Create many Senhas
     * const senha = await prisma.senha.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Senhas and only return the `id`
     * const senhaWithIdOnly = await prisma.senha.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SenhaCreateManyAndReturnArgs>(args?: SelectSubset<T, SenhaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Senha.
     * @param {SenhaDeleteArgs} args - Arguments to delete one Senha.
     * @example
     * // Delete one Senha
     * const Senha = await prisma.senha.delete({
     *   where: {
     *     // ... filter to delete one Senha
     *   }
     * })
     * 
     */
    delete<T extends SenhaDeleteArgs>(args: SelectSubset<T, SenhaDeleteArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Senha.
     * @param {SenhaUpdateArgs} args - Arguments to update one Senha.
     * @example
     * // Update one Senha
     * const senha = await prisma.senha.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SenhaUpdateArgs>(args: SelectSubset<T, SenhaUpdateArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Senhas.
     * @param {SenhaDeleteManyArgs} args - Arguments to filter Senhas to delete.
     * @example
     * // Delete a few Senhas
     * const { count } = await prisma.senha.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SenhaDeleteManyArgs>(args?: SelectSubset<T, SenhaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Senhas
     * const senha = await prisma.senha.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SenhaUpdateManyArgs>(args: SelectSubset<T, SenhaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Senhas and returns the data updated in the database.
     * @param {SenhaUpdateManyAndReturnArgs} args - Arguments to update many Senhas.
     * @example
     * // Update many Senhas
     * const senha = await prisma.senha.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Senhas and only return the `id`
     * const senhaWithIdOnly = await prisma.senha.updateManyAndReturn({
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
    updateManyAndReturn<T extends SenhaUpdateManyAndReturnArgs>(args: SelectSubset<T, SenhaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Senha.
     * @param {SenhaUpsertArgs} args - Arguments to update or create a Senha.
     * @example
     * // Update or create a Senha
     * const senha = await prisma.senha.upsert({
     *   create: {
     *     // ... data to create a Senha
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Senha we want to update
     *   }
     * })
     */
    upsert<T extends SenhaUpsertArgs>(args: SelectSubset<T, SenhaUpsertArgs<ExtArgs>>): Prisma__SenhaClient<$Result.GetResult<Prisma.$SenhaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Senhas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaCountArgs} args - Arguments to filter Senhas to count.
     * @example
     * // Count the number of Senhas
     * const count = await prisma.senha.count({
     *   where: {
     *     // ... the filter for the Senhas we want to count
     *   }
     * })
    **/
    count<T extends SenhaCountArgs>(
      args?: Subset<T, SenhaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SenhaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SenhaAggregateArgs>(args: Subset<T, SenhaAggregateArgs>): Prisma.PrismaPromise<GetSenhaAggregateType<T>>

    /**
     * Group by Senha.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SenhaGroupByArgs} args - Group by arguments.
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
      T extends SenhaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SenhaGroupByArgs['orderBy'] }
        : { orderBy?: SenhaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SenhaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenhaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Senha model
   */
  readonly fields: SenhaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Senha.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SenhaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Senha model
   */
  interface SenhaFieldRefs {
    readonly id: FieldRef<"Senha", 'Int'>
    readonly codigo: FieldRef<"Senha", 'String'>
    readonly tipo: FieldRef<"Senha", 'TipoSenha'>
    readonly dataCriacao: FieldRef<"Senha", 'DateTime'>
    readonly dataChamada: FieldRef<"Senha", 'DateTime'>
    readonly guiche: FieldRef<"Senha", 'String'>
    readonly tempoAtendimento: FieldRef<"Senha", 'Int'>
    readonly status: FieldRef<"Senha", 'StatusAtendimento'>
  }
    

  // Custom InputTypes
  /**
   * Senha findUnique
   */
  export type SenhaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha findUniqueOrThrow
   */
  export type SenhaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha findFirst
   */
  export type SenhaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senhas.
     */
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha findFirstOrThrow
   */
  export type SenhaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter, which Senha to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Senhas.
     */
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha findMany
   */
  export type SenhaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter, which Senhas to fetch.
     */
    where?: SenhaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Senhas to fetch.
     */
    orderBy?: SenhaOrderByWithRelationInput | SenhaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Senhas.
     */
    cursor?: SenhaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Senhas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Senhas.
     */
    skip?: number
    distinct?: SenhaScalarFieldEnum | SenhaScalarFieldEnum[]
  }

  /**
   * Senha create
   */
  export type SenhaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data needed to create a Senha.
     */
    data: XOR<SenhaCreateInput, SenhaUncheckedCreateInput>
  }

  /**
   * Senha createMany
   */
  export type SenhaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Senhas.
     */
    data: SenhaCreateManyInput | SenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Senha createManyAndReturn
   */
  export type SenhaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data used to create many Senhas.
     */
    data: SenhaCreateManyInput | SenhaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Senha update
   */
  export type SenhaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data needed to update a Senha.
     */
    data: XOR<SenhaUpdateInput, SenhaUncheckedUpdateInput>
    /**
     * Choose, which Senha to update.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha updateMany
   */
  export type SenhaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Senhas.
     */
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyInput>
    /**
     * Filter which Senhas to update
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to update.
     */
    limit?: number
  }

  /**
   * Senha updateManyAndReturn
   */
  export type SenhaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The data used to update Senhas.
     */
    data: XOR<SenhaUpdateManyMutationInput, SenhaUncheckedUpdateManyInput>
    /**
     * Filter which Senhas to update
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to update.
     */
    limit?: number
  }

  /**
   * Senha upsert
   */
  export type SenhaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * The filter to search for the Senha to update in case it exists.
     */
    where: SenhaWhereUniqueInput
    /**
     * In case the Senha found by the `where` argument doesn't exist, create a new Senha with this data.
     */
    create: XOR<SenhaCreateInput, SenhaUncheckedCreateInput>
    /**
     * In case the Senha was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SenhaUpdateInput, SenhaUncheckedUpdateInput>
  }

  /**
   * Senha delete
   */
  export type SenhaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
    /**
     * Filter which Senha to delete.
     */
    where: SenhaWhereUniqueInput
  }

  /**
   * Senha deleteMany
   */
  export type SenhaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Senhas to delete
     */
    where?: SenhaWhereInput
    /**
     * Limit how many Senhas to delete.
     */
    limit?: number
  }

  /**
   * Senha without action
   */
  export type SenhaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Senha
     */
    select?: SenhaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Senha
     */
    omit?: SenhaOmit<ExtArgs> | null
  }


  /**
   * Model Guiche
   */

  export type AggregateGuiche = {
    _count: GuicheCountAggregateOutputType | null
    _avg: GuicheAvgAggregateOutputType | null
    _sum: GuicheSumAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  export type GuicheAvgAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type GuicheSumAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type GuicheMinAggregateOutputType = {
    id: number | null
    numero: number | null
    status: $Enums.StatusGuiche | null
    ultimaSenha: string | null
    dataAtualizacao: Date | null
  }

  export type GuicheMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    status: $Enums.StatusGuiche | null
    ultimaSenha: string | null
    dataAtualizacao: Date | null
  }

  export type GuicheCountAggregateOutputType = {
    id: number
    numero: number
    status: number
    ultimaSenha: number
    dataAtualizacao: number
    _all: number
  }


  export type GuicheAvgAggregateInputType = {
    id?: true
    numero?: true
  }

  export type GuicheSumAggregateInputType = {
    id?: true
    numero?: true
  }

  export type GuicheMinAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    ultimaSenha?: true
    dataAtualizacao?: true
  }

  export type GuicheMaxAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    ultimaSenha?: true
    dataAtualizacao?: true
  }

  export type GuicheCountAggregateInputType = {
    id?: true
    numero?: true
    status?: true
    ultimaSenha?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type GuicheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiche to aggregate.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guiches
    **/
    _count?: true | GuicheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuicheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuicheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuicheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuicheMaxAggregateInputType
  }

  export type GetGuicheAggregateType<T extends GuicheAggregateArgs> = {
        [P in keyof T & keyof AggregateGuiche]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuiche[P]>
      : GetScalarType<T[P], AggregateGuiche[P]>
  }




  export type GuicheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuicheWhereInput
    orderBy?: GuicheOrderByWithAggregationInput | GuicheOrderByWithAggregationInput[]
    by: GuicheScalarFieldEnum[] | GuicheScalarFieldEnum
    having?: GuicheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuicheCountAggregateInputType | true
    _avg?: GuicheAvgAggregateInputType
    _sum?: GuicheSumAggregateInputType
    _min?: GuicheMinAggregateInputType
    _max?: GuicheMaxAggregateInputType
  }

  export type GuicheGroupByOutputType = {
    id: number
    numero: number
    status: $Enums.StatusGuiche
    ultimaSenha: string | null
    dataAtualizacao: Date
    _count: GuicheCountAggregateOutputType | null
    _avg: GuicheAvgAggregateOutputType | null
    _sum: GuicheSumAggregateOutputType | null
    _min: GuicheMinAggregateOutputType | null
    _max: GuicheMaxAggregateOutputType | null
  }

  type GetGuicheGroupByPayload<T extends GuicheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuicheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuicheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuicheGroupByOutputType[P]>
            : GetScalarType<T[P], GuicheGroupByOutputType[P]>
        }
      >
    >


  export type GuicheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    ultimaSenha?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    ultimaSenha?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    status?: boolean
    ultimaSenha?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["guiche"]>

  export type GuicheSelectScalar = {
    id?: boolean
    numero?: boolean
    status?: boolean
    ultimaSenha?: boolean
    dataAtualizacao?: boolean
  }

  export type GuicheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "status" | "ultimaSenha" | "dataAtualizacao", ExtArgs["result"]["guiche"]>

  export type $GuichePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guiche"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      status: $Enums.StatusGuiche
      ultimaSenha: string | null
      dataAtualizacao: Date
    }, ExtArgs["result"]["guiche"]>
    composites: {}
  }

  type GuicheGetPayload<S extends boolean | null | undefined | GuicheDefaultArgs> = $Result.GetResult<Prisma.$GuichePayload, S>

  type GuicheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuicheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuicheCountAggregateInputType | true
    }

  export interface GuicheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guiche'], meta: { name: 'Guiche' } }
    /**
     * Find zero or one Guiche that matches the filter.
     * @param {GuicheFindUniqueArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuicheFindUniqueArgs>(args: SelectSubset<T, GuicheFindUniqueArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guiche that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuicheFindUniqueOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuicheFindUniqueOrThrowArgs>(args: SelectSubset<T, GuicheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuicheFindFirstArgs>(args?: SelectSubset<T, GuicheFindFirstArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guiche that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindFirstOrThrowArgs} args - Arguments to find a Guiche
     * @example
     * // Get one Guiche
     * const guiche = await prisma.guiche.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuicheFindFirstOrThrowArgs>(args?: SelectSubset<T, GuicheFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guiches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guiches
     * const guiches = await prisma.guiche.findMany()
     * 
     * // Get first 10 Guiches
     * const guiches = await prisma.guiche.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guicheWithIdOnly = await prisma.guiche.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuicheFindManyArgs>(args?: SelectSubset<T, GuicheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guiche.
     * @param {GuicheCreateArgs} args - Arguments to create a Guiche.
     * @example
     * // Create one Guiche
     * const Guiche = await prisma.guiche.create({
     *   data: {
     *     // ... data to create a Guiche
     *   }
     * })
     * 
     */
    create<T extends GuicheCreateArgs>(args: SelectSubset<T, GuicheCreateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guiches.
     * @param {GuicheCreateManyArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuicheCreateManyArgs>(args?: SelectSubset<T, GuicheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guiches and returns the data saved in the database.
     * @param {GuicheCreateManyAndReturnArgs} args - Arguments to create many Guiches.
     * @example
     * // Create many Guiches
     * const guiche = await prisma.guiche.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuicheCreateManyAndReturnArgs>(args?: SelectSubset<T, GuicheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guiche.
     * @param {GuicheDeleteArgs} args - Arguments to delete one Guiche.
     * @example
     * // Delete one Guiche
     * const Guiche = await prisma.guiche.delete({
     *   where: {
     *     // ... filter to delete one Guiche
     *   }
     * })
     * 
     */
    delete<T extends GuicheDeleteArgs>(args: SelectSubset<T, GuicheDeleteArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guiche.
     * @param {GuicheUpdateArgs} args - Arguments to update one Guiche.
     * @example
     * // Update one Guiche
     * const guiche = await prisma.guiche.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuicheUpdateArgs>(args: SelectSubset<T, GuicheUpdateArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guiches.
     * @param {GuicheDeleteManyArgs} args - Arguments to filter Guiches to delete.
     * @example
     * // Delete a few Guiches
     * const { count } = await prisma.guiche.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuicheDeleteManyArgs>(args?: SelectSubset<T, GuicheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuicheUpdateManyArgs>(args: SelectSubset<T, GuicheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guiches and returns the data updated in the database.
     * @param {GuicheUpdateManyAndReturnArgs} args - Arguments to update many Guiches.
     * @example
     * // Update many Guiches
     * const guiche = await prisma.guiche.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guiches and only return the `id`
     * const guicheWithIdOnly = await prisma.guiche.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuicheUpdateManyAndReturnArgs>(args: SelectSubset<T, GuicheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guiche.
     * @param {GuicheUpsertArgs} args - Arguments to update or create a Guiche.
     * @example
     * // Update or create a Guiche
     * const guiche = await prisma.guiche.upsert({
     *   create: {
     *     // ... data to create a Guiche
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guiche we want to update
     *   }
     * })
     */
    upsert<T extends GuicheUpsertArgs>(args: SelectSubset<T, GuicheUpsertArgs<ExtArgs>>): Prisma__GuicheClient<$Result.GetResult<Prisma.$GuichePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guiches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheCountArgs} args - Arguments to filter Guiches to count.
     * @example
     * // Count the number of Guiches
     * const count = await prisma.guiche.count({
     *   where: {
     *     // ... the filter for the Guiches we want to count
     *   }
     * })
    **/
    count<T extends GuicheCountArgs>(
      args?: Subset<T, GuicheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuicheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuicheAggregateArgs>(args: Subset<T, GuicheAggregateArgs>): Prisma.PrismaPromise<GetGuicheAggregateType<T>>

    /**
     * Group by Guiche.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuicheGroupByArgs} args - Group by arguments.
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
      T extends GuicheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuicheGroupByArgs['orderBy'] }
        : { orderBy?: GuicheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuicheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuicheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guiche model
   */
  readonly fields: GuicheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guiche.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuicheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Guiche model
   */
  interface GuicheFieldRefs {
    readonly id: FieldRef<"Guiche", 'Int'>
    readonly numero: FieldRef<"Guiche", 'Int'>
    readonly status: FieldRef<"Guiche", 'StatusGuiche'>
    readonly ultimaSenha: FieldRef<"Guiche", 'String'>
    readonly dataAtualizacao: FieldRef<"Guiche", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guiche findUnique
   */
  export type GuicheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findUniqueOrThrow
   */
  export type GuicheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche findFirst
   */
  export type GuicheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findFirstOrThrow
   */
  export type GuicheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter, which Guiche to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guiches.
     */
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche findMany
   */
  export type GuicheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter, which Guiches to fetch.
     */
    where?: GuicheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guiches to fetch.
     */
    orderBy?: GuicheOrderByWithRelationInput | GuicheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guiches.
     */
    cursor?: GuicheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guiches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guiches.
     */
    skip?: number
    distinct?: GuicheScalarFieldEnum | GuicheScalarFieldEnum[]
  }

  /**
   * Guiche create
   */
  export type GuicheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data needed to create a Guiche.
     */
    data: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
  }

  /**
   * Guiche createMany
   */
  export type GuicheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guiche createManyAndReturn
   */
  export type GuicheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to create many Guiches.
     */
    data: GuicheCreateManyInput | GuicheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guiche update
   */
  export type GuicheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data needed to update a Guiche.
     */
    data: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
    /**
     * Choose, which Guiche to update.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche updateMany
   */
  export type GuicheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
  }

  /**
   * Guiche updateManyAndReturn
   */
  export type GuicheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The data used to update Guiches.
     */
    data: XOR<GuicheUpdateManyMutationInput, GuicheUncheckedUpdateManyInput>
    /**
     * Filter which Guiches to update
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to update.
     */
    limit?: number
  }

  /**
   * Guiche upsert
   */
  export type GuicheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * The filter to search for the Guiche to update in case it exists.
     */
    where: GuicheWhereUniqueInput
    /**
     * In case the Guiche found by the `where` argument doesn't exist, create a new Guiche with this data.
     */
    create: XOR<GuicheCreateInput, GuicheUncheckedCreateInput>
    /**
     * In case the Guiche was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuicheUpdateInput, GuicheUncheckedUpdateInput>
  }

  /**
   * Guiche delete
   */
  export type GuicheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
    /**
     * Filter which Guiche to delete.
     */
    where: GuicheWhereUniqueInput
  }

  /**
   * Guiche deleteMany
   */
  export type GuicheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guiches to delete
     */
    where?: GuicheWhereInput
    /**
     * Limit how many Guiches to delete.
     */
    limit?: number
  }

  /**
   * Guiche without action
   */
  export type GuicheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guiche
     */
    select?: GuicheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guiche
     */
    omit?: GuicheOmit<ExtArgs> | null
  }


  /**
   * Model Painel
   */

  export type AggregatePainel = {
    _count: PainelCountAggregateOutputType | null
    _avg: PainelAvgAggregateOutputType | null
    _sum: PainelSumAggregateOutputType | null
    _min: PainelMinAggregateOutputType | null
    _max: PainelMaxAggregateOutputType | null
  }

  export type PainelAvgAggregateOutputType = {
    id: number | null
  }

  export type PainelSumAggregateOutputType = {
    id: number | null
  }

  export type PainelMinAggregateOutputType = {
    id: number | null
    ultimasChamadas: string | null
    dataAtualizacao: Date | null
  }

  export type PainelMaxAggregateOutputType = {
    id: number | null
    ultimasChamadas: string | null
    dataAtualizacao: Date | null
  }

  export type PainelCountAggregateOutputType = {
    id: number
    ultimasChamadas: number
    dataAtualizacao: number
    _all: number
  }


  export type PainelAvgAggregateInputType = {
    id?: true
  }

  export type PainelSumAggregateInputType = {
    id?: true
  }

  export type PainelMinAggregateInputType = {
    id?: true
    ultimasChamadas?: true
    dataAtualizacao?: true
  }

  export type PainelMaxAggregateInputType = {
    id?: true
    ultimasChamadas?: true
    dataAtualizacao?: true
  }

  export type PainelCountAggregateInputType = {
    id?: true
    ultimasChamadas?: true
    dataAtualizacao?: true
    _all?: true
  }

  export type PainelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Painel to aggregate.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Painels
    **/
    _count?: true | PainelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PainelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PainelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PainelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PainelMaxAggregateInputType
  }

  export type GetPainelAggregateType<T extends PainelAggregateArgs> = {
        [P in keyof T & keyof AggregatePainel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePainel[P]>
      : GetScalarType<T[P], AggregatePainel[P]>
  }




  export type PainelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PainelWhereInput
    orderBy?: PainelOrderByWithAggregationInput | PainelOrderByWithAggregationInput[]
    by: PainelScalarFieldEnum[] | PainelScalarFieldEnum
    having?: PainelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PainelCountAggregateInputType | true
    _avg?: PainelAvgAggregateInputType
    _sum?: PainelSumAggregateInputType
    _min?: PainelMinAggregateInputType
    _max?: PainelMaxAggregateInputType
  }

  export type PainelGroupByOutputType = {
    id: number
    ultimasChamadas: string
    dataAtualizacao: Date
    _count: PainelCountAggregateOutputType | null
    _avg: PainelAvgAggregateOutputType | null
    _sum: PainelSumAggregateOutputType | null
    _min: PainelMinAggregateOutputType | null
    _max: PainelMaxAggregateOutputType | null
  }

  type GetPainelGroupByPayload<T extends PainelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PainelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PainelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PainelGroupByOutputType[P]>
            : GetScalarType<T[P], PainelGroupByOutputType[P]>
        }
      >
    >


  export type PainelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimasChamadas?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["painel"]>

  export type PainelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimasChamadas?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["painel"]>

  export type PainelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ultimasChamadas?: boolean
    dataAtualizacao?: boolean
  }, ExtArgs["result"]["painel"]>

  export type PainelSelectScalar = {
    id?: boolean
    ultimasChamadas?: boolean
    dataAtualizacao?: boolean
  }

  export type PainelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ultimasChamadas" | "dataAtualizacao", ExtArgs["result"]["painel"]>

  export type $PainelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Painel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ultimasChamadas: string
      dataAtualizacao: Date
    }, ExtArgs["result"]["painel"]>
    composites: {}
  }

  type PainelGetPayload<S extends boolean | null | undefined | PainelDefaultArgs> = $Result.GetResult<Prisma.$PainelPayload, S>

  type PainelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PainelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PainelCountAggregateInputType | true
    }

  export interface PainelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Painel'], meta: { name: 'Painel' } }
    /**
     * Find zero or one Painel that matches the filter.
     * @param {PainelFindUniqueArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PainelFindUniqueArgs>(args: SelectSubset<T, PainelFindUniqueArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Painel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PainelFindUniqueOrThrowArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PainelFindUniqueOrThrowArgs>(args: SelectSubset<T, PainelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Painel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindFirstArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PainelFindFirstArgs>(args?: SelectSubset<T, PainelFindFirstArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Painel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindFirstOrThrowArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PainelFindFirstOrThrowArgs>(args?: SelectSubset<T, PainelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Painels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Painels
     * const painels = await prisma.painel.findMany()
     * 
     * // Get first 10 Painels
     * const painels = await prisma.painel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const painelWithIdOnly = await prisma.painel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PainelFindManyArgs>(args?: SelectSubset<T, PainelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Painel.
     * @param {PainelCreateArgs} args - Arguments to create a Painel.
     * @example
     * // Create one Painel
     * const Painel = await prisma.painel.create({
     *   data: {
     *     // ... data to create a Painel
     *   }
     * })
     * 
     */
    create<T extends PainelCreateArgs>(args: SelectSubset<T, PainelCreateArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Painels.
     * @param {PainelCreateManyArgs} args - Arguments to create many Painels.
     * @example
     * // Create many Painels
     * const painel = await prisma.painel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PainelCreateManyArgs>(args?: SelectSubset<T, PainelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Painels and returns the data saved in the database.
     * @param {PainelCreateManyAndReturnArgs} args - Arguments to create many Painels.
     * @example
     * // Create many Painels
     * const painel = await prisma.painel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Painels and only return the `id`
     * const painelWithIdOnly = await prisma.painel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PainelCreateManyAndReturnArgs>(args?: SelectSubset<T, PainelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Painel.
     * @param {PainelDeleteArgs} args - Arguments to delete one Painel.
     * @example
     * // Delete one Painel
     * const Painel = await prisma.painel.delete({
     *   where: {
     *     // ... filter to delete one Painel
     *   }
     * })
     * 
     */
    delete<T extends PainelDeleteArgs>(args: SelectSubset<T, PainelDeleteArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Painel.
     * @param {PainelUpdateArgs} args - Arguments to update one Painel.
     * @example
     * // Update one Painel
     * const painel = await prisma.painel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PainelUpdateArgs>(args: SelectSubset<T, PainelUpdateArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Painels.
     * @param {PainelDeleteManyArgs} args - Arguments to filter Painels to delete.
     * @example
     * // Delete a few Painels
     * const { count } = await prisma.painel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PainelDeleteManyArgs>(args?: SelectSubset<T, PainelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Painels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Painels
     * const painel = await prisma.painel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PainelUpdateManyArgs>(args: SelectSubset<T, PainelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Painels and returns the data updated in the database.
     * @param {PainelUpdateManyAndReturnArgs} args - Arguments to update many Painels.
     * @example
     * // Update many Painels
     * const painel = await prisma.painel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Painels and only return the `id`
     * const painelWithIdOnly = await prisma.painel.updateManyAndReturn({
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
    updateManyAndReturn<T extends PainelUpdateManyAndReturnArgs>(args: SelectSubset<T, PainelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Painel.
     * @param {PainelUpsertArgs} args - Arguments to update or create a Painel.
     * @example
     * // Update or create a Painel
     * const painel = await prisma.painel.upsert({
     *   create: {
     *     // ... data to create a Painel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Painel we want to update
     *   }
     * })
     */
    upsert<T extends PainelUpsertArgs>(args: SelectSubset<T, PainelUpsertArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Painels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelCountArgs} args - Arguments to filter Painels to count.
     * @example
     * // Count the number of Painels
     * const count = await prisma.painel.count({
     *   where: {
     *     // ... the filter for the Painels we want to count
     *   }
     * })
    **/
    count<T extends PainelCountArgs>(
      args?: Subset<T, PainelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PainelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Painel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PainelAggregateArgs>(args: Subset<T, PainelAggregateArgs>): Prisma.PrismaPromise<GetPainelAggregateType<T>>

    /**
     * Group by Painel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelGroupByArgs} args - Group by arguments.
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
      T extends PainelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PainelGroupByArgs['orderBy'] }
        : { orderBy?: PainelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PainelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPainelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Painel model
   */
  readonly fields: PainelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Painel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PainelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Painel model
   */
  interface PainelFieldRefs {
    readonly id: FieldRef<"Painel", 'Int'>
    readonly ultimasChamadas: FieldRef<"Painel", 'String'>
    readonly dataAtualizacao: FieldRef<"Painel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Painel findUnique
   */
  export type PainelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel findUniqueOrThrow
   */
  export type PainelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel findFirst
   */
  export type PainelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Painels.
     */
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel findFirstOrThrow
   */
  export type PainelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Painels.
     */
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel findMany
   */
  export type PainelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter, which Painels to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel create
   */
  export type PainelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * The data needed to create a Painel.
     */
    data: XOR<PainelCreateInput, PainelUncheckedCreateInput>
  }

  /**
   * Painel createMany
   */
  export type PainelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Painels.
     */
    data: PainelCreateManyInput | PainelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Painel createManyAndReturn
   */
  export type PainelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * The data used to create many Painels.
     */
    data: PainelCreateManyInput | PainelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Painel update
   */
  export type PainelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * The data needed to update a Painel.
     */
    data: XOR<PainelUpdateInput, PainelUncheckedUpdateInput>
    /**
     * Choose, which Painel to update.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel updateMany
   */
  export type PainelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Painels.
     */
    data: XOR<PainelUpdateManyMutationInput, PainelUncheckedUpdateManyInput>
    /**
     * Filter which Painels to update
     */
    where?: PainelWhereInput
    /**
     * Limit how many Painels to update.
     */
    limit?: number
  }

  /**
   * Painel updateManyAndReturn
   */
  export type PainelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * The data used to update Painels.
     */
    data: XOR<PainelUpdateManyMutationInput, PainelUncheckedUpdateManyInput>
    /**
     * Filter which Painels to update
     */
    where?: PainelWhereInput
    /**
     * Limit how many Painels to update.
     */
    limit?: number
  }

  /**
   * Painel upsert
   */
  export type PainelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * The filter to search for the Painel to update in case it exists.
     */
    where: PainelWhereUniqueInput
    /**
     * In case the Painel found by the `where` argument doesn't exist, create a new Painel with this data.
     */
    create: XOR<PainelCreateInput, PainelUncheckedCreateInput>
    /**
     * In case the Painel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PainelUpdateInput, PainelUncheckedUpdateInput>
  }

  /**
   * Painel delete
   */
  export type PainelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
    /**
     * Filter which Painel to delete.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel deleteMany
   */
  export type PainelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Painels to delete
     */
    where?: PainelWhereInput
    /**
     * Limit how many Painels to delete.
     */
    limit?: number
  }

  /**
   * Painel without action
   */
  export type PainelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Painel
     */
    omit?: PainelOmit<ExtArgs> | null
  }


  /**
   * Model Estatistica
   */

  export type AggregateEstatistica = {
    _count: EstatisticaCountAggregateOutputType | null
    _avg: EstatisticaAvgAggregateOutputType | null
    _sum: EstatisticaSumAggregateOutputType | null
    _min: EstatisticaMinAggregateOutputType | null
    _max: EstatisticaMaxAggregateOutputType | null
  }

  export type EstatisticaAvgAggregateOutputType = {
    id: number | null
    totalSenhas: number | null
    senhasAtendidas: number | null
    senhasSP: number | null
    senhasSG: number | null
    senhasSE: number | null
    tempoMedioSP: number | null
    tempoMedioSG: number | null
    tempoMedioSE: number | null
  }

  export type EstatisticaSumAggregateOutputType = {
    id: number | null
    totalSenhas: number | null
    senhasAtendidas: number | null
    senhasSP: number | null
    senhasSG: number | null
    senhasSE: number | null
    tempoMedioSP: number | null
    tempoMedioSG: number | null
    tempoMedioSE: number | null
  }

  export type EstatisticaMinAggregateOutputType = {
    id: number | null
    data: Date | null
    totalSenhas: number | null
    senhasAtendidas: number | null
    senhasSP: number | null
    senhasSG: number | null
    senhasSE: number | null
    tempoMedioSP: number | null
    tempoMedioSG: number | null
    tempoMedioSE: number | null
  }

  export type EstatisticaMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    totalSenhas: number | null
    senhasAtendidas: number | null
    senhasSP: number | null
    senhasSG: number | null
    senhasSE: number | null
    tempoMedioSP: number | null
    tempoMedioSG: number | null
    tempoMedioSE: number | null
  }

  export type EstatisticaCountAggregateOutputType = {
    id: number
    data: number
    totalSenhas: number
    senhasAtendidas: number
    senhasSP: number
    senhasSG: number
    senhasSE: number
    tempoMedioSP: number
    tempoMedioSG: number
    tempoMedioSE: number
    _all: number
  }


  export type EstatisticaAvgAggregateInputType = {
    id?: true
    totalSenhas?: true
    senhasAtendidas?: true
    senhasSP?: true
    senhasSG?: true
    senhasSE?: true
    tempoMedioSP?: true
    tempoMedioSG?: true
    tempoMedioSE?: true
  }

  export type EstatisticaSumAggregateInputType = {
    id?: true
    totalSenhas?: true
    senhasAtendidas?: true
    senhasSP?: true
    senhasSG?: true
    senhasSE?: true
    tempoMedioSP?: true
    tempoMedioSG?: true
    tempoMedioSE?: true
  }

  export type EstatisticaMinAggregateInputType = {
    id?: true
    data?: true
    totalSenhas?: true
    senhasAtendidas?: true
    senhasSP?: true
    senhasSG?: true
    senhasSE?: true
    tempoMedioSP?: true
    tempoMedioSG?: true
    tempoMedioSE?: true
  }

  export type EstatisticaMaxAggregateInputType = {
    id?: true
    data?: true
    totalSenhas?: true
    senhasAtendidas?: true
    senhasSP?: true
    senhasSG?: true
    senhasSE?: true
    tempoMedioSP?: true
    tempoMedioSG?: true
    tempoMedioSE?: true
  }

  export type EstatisticaCountAggregateInputType = {
    id?: true
    data?: true
    totalSenhas?: true
    senhasAtendidas?: true
    senhasSP?: true
    senhasSG?: true
    senhasSE?: true
    tempoMedioSP?: true
    tempoMedioSG?: true
    tempoMedioSE?: true
    _all?: true
  }

  export type EstatisticaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estatistica to aggregate.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estatisticas
    **/
    _count?: true | EstatisticaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstatisticaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstatisticaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstatisticaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstatisticaMaxAggregateInputType
  }

  export type GetEstatisticaAggregateType<T extends EstatisticaAggregateArgs> = {
        [P in keyof T & keyof AggregateEstatistica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstatistica[P]>
      : GetScalarType<T[P], AggregateEstatistica[P]>
  }




  export type EstatisticaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstatisticaWhereInput
    orderBy?: EstatisticaOrderByWithAggregationInput | EstatisticaOrderByWithAggregationInput[]
    by: EstatisticaScalarFieldEnum[] | EstatisticaScalarFieldEnum
    having?: EstatisticaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstatisticaCountAggregateInputType | true
    _avg?: EstatisticaAvgAggregateInputType
    _sum?: EstatisticaSumAggregateInputType
    _min?: EstatisticaMinAggregateInputType
    _max?: EstatisticaMaxAggregateInputType
  }

  export type EstatisticaGroupByOutputType = {
    id: number
    data: Date
    totalSenhas: number
    senhasAtendidas: number
    senhasSP: number
    senhasSG: number
    senhasSE: number
    tempoMedioSP: number
    tempoMedioSG: number
    tempoMedioSE: number
    _count: EstatisticaCountAggregateOutputType | null
    _avg: EstatisticaAvgAggregateOutputType | null
    _sum: EstatisticaSumAggregateOutputType | null
    _min: EstatisticaMinAggregateOutputType | null
    _max: EstatisticaMaxAggregateOutputType | null
  }

  type GetEstatisticaGroupByPayload<T extends EstatisticaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstatisticaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstatisticaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstatisticaGroupByOutputType[P]>
            : GetScalarType<T[P], EstatisticaGroupByOutputType[P]>
        }
      >
    >


  export type EstatisticaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalSenhas?: boolean
    senhasAtendidas?: boolean
    senhasSP?: boolean
    senhasSG?: boolean
    senhasSE?: boolean
    tempoMedioSP?: boolean
    tempoMedioSG?: boolean
    tempoMedioSE?: boolean
  }, ExtArgs["result"]["estatistica"]>

  export type EstatisticaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalSenhas?: boolean
    senhasAtendidas?: boolean
    senhasSP?: boolean
    senhasSG?: boolean
    senhasSE?: boolean
    tempoMedioSP?: boolean
    tempoMedioSG?: boolean
    tempoMedioSE?: boolean
  }, ExtArgs["result"]["estatistica"]>

  export type EstatisticaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    totalSenhas?: boolean
    senhasAtendidas?: boolean
    senhasSP?: boolean
    senhasSG?: boolean
    senhasSE?: boolean
    tempoMedioSP?: boolean
    tempoMedioSG?: boolean
    tempoMedioSE?: boolean
  }, ExtArgs["result"]["estatistica"]>

  export type EstatisticaSelectScalar = {
    id?: boolean
    data?: boolean
    totalSenhas?: boolean
    senhasAtendidas?: boolean
    senhasSP?: boolean
    senhasSG?: boolean
    senhasSE?: boolean
    tempoMedioSP?: boolean
    tempoMedioSG?: boolean
    tempoMedioSE?: boolean
  }

  export type EstatisticaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "totalSenhas" | "senhasAtendidas" | "senhasSP" | "senhasSG" | "senhasSE" | "tempoMedioSP" | "tempoMedioSG" | "tempoMedioSE", ExtArgs["result"]["estatistica"]>

  export type $EstatisticaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estatistica"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      totalSenhas: number
      senhasAtendidas: number
      senhasSP: number
      senhasSG: number
      senhasSE: number
      tempoMedioSP: number
      tempoMedioSG: number
      tempoMedioSE: number
    }, ExtArgs["result"]["estatistica"]>
    composites: {}
  }

  type EstatisticaGetPayload<S extends boolean | null | undefined | EstatisticaDefaultArgs> = $Result.GetResult<Prisma.$EstatisticaPayload, S>

  type EstatisticaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstatisticaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstatisticaCountAggregateInputType | true
    }

  export interface EstatisticaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estatistica'], meta: { name: 'Estatistica' } }
    /**
     * Find zero or one Estatistica that matches the filter.
     * @param {EstatisticaFindUniqueArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstatisticaFindUniqueArgs>(args: SelectSubset<T, EstatisticaFindUniqueArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estatistica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstatisticaFindUniqueOrThrowArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstatisticaFindUniqueOrThrowArgs>(args: SelectSubset<T, EstatisticaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estatistica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindFirstArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstatisticaFindFirstArgs>(args?: SelectSubset<T, EstatisticaFindFirstArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estatistica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindFirstOrThrowArgs} args - Arguments to find a Estatistica
     * @example
     * // Get one Estatistica
     * const estatistica = await prisma.estatistica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstatisticaFindFirstOrThrowArgs>(args?: SelectSubset<T, EstatisticaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estatisticas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estatisticas
     * const estatisticas = await prisma.estatistica.findMany()
     * 
     * // Get first 10 Estatisticas
     * const estatisticas = await prisma.estatistica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estatisticaWithIdOnly = await prisma.estatistica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstatisticaFindManyArgs>(args?: SelectSubset<T, EstatisticaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estatistica.
     * @param {EstatisticaCreateArgs} args - Arguments to create a Estatistica.
     * @example
     * // Create one Estatistica
     * const Estatistica = await prisma.estatistica.create({
     *   data: {
     *     // ... data to create a Estatistica
     *   }
     * })
     * 
     */
    create<T extends EstatisticaCreateArgs>(args: SelectSubset<T, EstatisticaCreateArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estatisticas.
     * @param {EstatisticaCreateManyArgs} args - Arguments to create many Estatisticas.
     * @example
     * // Create many Estatisticas
     * const estatistica = await prisma.estatistica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstatisticaCreateManyArgs>(args?: SelectSubset<T, EstatisticaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estatisticas and returns the data saved in the database.
     * @param {EstatisticaCreateManyAndReturnArgs} args - Arguments to create many Estatisticas.
     * @example
     * // Create many Estatisticas
     * const estatistica = await prisma.estatistica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estatisticas and only return the `id`
     * const estatisticaWithIdOnly = await prisma.estatistica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstatisticaCreateManyAndReturnArgs>(args?: SelectSubset<T, EstatisticaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estatistica.
     * @param {EstatisticaDeleteArgs} args - Arguments to delete one Estatistica.
     * @example
     * // Delete one Estatistica
     * const Estatistica = await prisma.estatistica.delete({
     *   where: {
     *     // ... filter to delete one Estatistica
     *   }
     * })
     * 
     */
    delete<T extends EstatisticaDeleteArgs>(args: SelectSubset<T, EstatisticaDeleteArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estatistica.
     * @param {EstatisticaUpdateArgs} args - Arguments to update one Estatistica.
     * @example
     * // Update one Estatistica
     * const estatistica = await prisma.estatistica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstatisticaUpdateArgs>(args: SelectSubset<T, EstatisticaUpdateArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estatisticas.
     * @param {EstatisticaDeleteManyArgs} args - Arguments to filter Estatisticas to delete.
     * @example
     * // Delete a few Estatisticas
     * const { count } = await prisma.estatistica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstatisticaDeleteManyArgs>(args?: SelectSubset<T, EstatisticaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estatisticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estatisticas
     * const estatistica = await prisma.estatistica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstatisticaUpdateManyArgs>(args: SelectSubset<T, EstatisticaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estatisticas and returns the data updated in the database.
     * @param {EstatisticaUpdateManyAndReturnArgs} args - Arguments to update many Estatisticas.
     * @example
     * // Update many Estatisticas
     * const estatistica = await prisma.estatistica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estatisticas and only return the `id`
     * const estatisticaWithIdOnly = await prisma.estatistica.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstatisticaUpdateManyAndReturnArgs>(args: SelectSubset<T, EstatisticaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estatistica.
     * @param {EstatisticaUpsertArgs} args - Arguments to update or create a Estatistica.
     * @example
     * // Update or create a Estatistica
     * const estatistica = await prisma.estatistica.upsert({
     *   create: {
     *     // ... data to create a Estatistica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estatistica we want to update
     *   }
     * })
     */
    upsert<T extends EstatisticaUpsertArgs>(args: SelectSubset<T, EstatisticaUpsertArgs<ExtArgs>>): Prisma__EstatisticaClient<$Result.GetResult<Prisma.$EstatisticaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estatisticas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaCountArgs} args - Arguments to filter Estatisticas to count.
     * @example
     * // Count the number of Estatisticas
     * const count = await prisma.estatistica.count({
     *   where: {
     *     // ... the filter for the Estatisticas we want to count
     *   }
     * })
    **/
    count<T extends EstatisticaCountArgs>(
      args?: Subset<T, EstatisticaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstatisticaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estatistica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstatisticaAggregateArgs>(args: Subset<T, EstatisticaAggregateArgs>): Prisma.PrismaPromise<GetEstatisticaAggregateType<T>>

    /**
     * Group by Estatistica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstatisticaGroupByArgs} args - Group by arguments.
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
      T extends EstatisticaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstatisticaGroupByArgs['orderBy'] }
        : { orderBy?: EstatisticaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstatisticaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstatisticaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estatistica model
   */
  readonly fields: EstatisticaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estatistica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstatisticaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Estatistica model
   */
  interface EstatisticaFieldRefs {
    readonly id: FieldRef<"Estatistica", 'Int'>
    readonly data: FieldRef<"Estatistica", 'DateTime'>
    readonly totalSenhas: FieldRef<"Estatistica", 'Int'>
    readonly senhasAtendidas: FieldRef<"Estatistica", 'Int'>
    readonly senhasSP: FieldRef<"Estatistica", 'Int'>
    readonly senhasSG: FieldRef<"Estatistica", 'Int'>
    readonly senhasSE: FieldRef<"Estatistica", 'Int'>
    readonly tempoMedioSP: FieldRef<"Estatistica", 'Float'>
    readonly tempoMedioSG: FieldRef<"Estatistica", 'Float'>
    readonly tempoMedioSE: FieldRef<"Estatistica", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Estatistica findUnique
   */
  export type EstatisticaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where: EstatisticaWhereUniqueInput
  }

  /**
   * Estatistica findUniqueOrThrow
   */
  export type EstatisticaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where: EstatisticaWhereUniqueInput
  }

  /**
   * Estatistica findFirst
   */
  export type EstatisticaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estatisticas.
     */
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }

  /**
   * Estatistica findFirstOrThrow
   */
  export type EstatisticaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter, which Estatistica to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estatisticas.
     */
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }

  /**
   * Estatistica findMany
   */
  export type EstatisticaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter, which Estatisticas to fetch.
     */
    where?: EstatisticaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estatisticas to fetch.
     */
    orderBy?: EstatisticaOrderByWithRelationInput | EstatisticaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estatisticas.
     */
    cursor?: EstatisticaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estatisticas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estatisticas.
     */
    skip?: number
    distinct?: EstatisticaScalarFieldEnum | EstatisticaScalarFieldEnum[]
  }

  /**
   * Estatistica create
   */
  export type EstatisticaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * The data needed to create a Estatistica.
     */
    data: XOR<EstatisticaCreateInput, EstatisticaUncheckedCreateInput>
  }

  /**
   * Estatistica createMany
   */
  export type EstatisticaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estatisticas.
     */
    data: EstatisticaCreateManyInput | EstatisticaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estatistica createManyAndReturn
   */
  export type EstatisticaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * The data used to create many Estatisticas.
     */
    data: EstatisticaCreateManyInput | EstatisticaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estatistica update
   */
  export type EstatisticaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * The data needed to update a Estatistica.
     */
    data: XOR<EstatisticaUpdateInput, EstatisticaUncheckedUpdateInput>
    /**
     * Choose, which Estatistica to update.
     */
    where: EstatisticaWhereUniqueInput
  }

  /**
   * Estatistica updateMany
   */
  export type EstatisticaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estatisticas.
     */
    data: XOR<EstatisticaUpdateManyMutationInput, EstatisticaUncheckedUpdateManyInput>
    /**
     * Filter which Estatisticas to update
     */
    where?: EstatisticaWhereInput
    /**
     * Limit how many Estatisticas to update.
     */
    limit?: number
  }

  /**
   * Estatistica updateManyAndReturn
   */
  export type EstatisticaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * The data used to update Estatisticas.
     */
    data: XOR<EstatisticaUpdateManyMutationInput, EstatisticaUncheckedUpdateManyInput>
    /**
     * Filter which Estatisticas to update
     */
    where?: EstatisticaWhereInput
    /**
     * Limit how many Estatisticas to update.
     */
    limit?: number
  }

  /**
   * Estatistica upsert
   */
  export type EstatisticaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * The filter to search for the Estatistica to update in case it exists.
     */
    where: EstatisticaWhereUniqueInput
    /**
     * In case the Estatistica found by the `where` argument doesn't exist, create a new Estatistica with this data.
     */
    create: XOR<EstatisticaCreateInput, EstatisticaUncheckedCreateInput>
    /**
     * In case the Estatistica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstatisticaUpdateInput, EstatisticaUncheckedUpdateInput>
  }

  /**
   * Estatistica delete
   */
  export type EstatisticaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
    /**
     * Filter which Estatistica to delete.
     */
    where: EstatisticaWhereUniqueInput
  }

  /**
   * Estatistica deleteMany
   */
  export type EstatisticaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estatisticas to delete
     */
    where?: EstatisticaWhereInput
    /**
     * Limit how many Estatisticas to delete.
     */
    limit?: number
  }

  /**
   * Estatistica without action
   */
  export type EstatisticaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estatistica
     */
    select?: EstatisticaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estatistica
     */
    omit?: EstatisticaOmit<ExtArgs> | null
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


  export const SenhaScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    tipo: 'tipo',
    dataCriacao: 'dataCriacao',
    dataChamada: 'dataChamada',
    guiche: 'guiche',
    tempoAtendimento: 'tempoAtendimento',
    status: 'status'
  };

  export type SenhaScalarFieldEnum = (typeof SenhaScalarFieldEnum)[keyof typeof SenhaScalarFieldEnum]


  export const GuicheScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    status: 'status',
    ultimaSenha: 'ultimaSenha',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type GuicheScalarFieldEnum = (typeof GuicheScalarFieldEnum)[keyof typeof GuicheScalarFieldEnum]


  export const PainelScalarFieldEnum: {
    id: 'id',
    ultimasChamadas: 'ultimasChamadas',
    dataAtualizacao: 'dataAtualizacao'
  };

  export type PainelScalarFieldEnum = (typeof PainelScalarFieldEnum)[keyof typeof PainelScalarFieldEnum]


  export const EstatisticaScalarFieldEnum: {
    id: 'id',
    data: 'data',
    totalSenhas: 'totalSenhas',
    senhasAtendidas: 'senhasAtendidas',
    senhasSP: 'senhasSP',
    senhasSG: 'senhasSG',
    senhasSE: 'senhasSE',
    tempoMedioSP: 'tempoMedioSP',
    tempoMedioSG: 'tempoMedioSG',
    tempoMedioSE: 'tempoMedioSE'
  };

  export type EstatisticaScalarFieldEnum = (typeof EstatisticaScalarFieldEnum)[keyof typeof EstatisticaScalarFieldEnum]


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
   * Reference to a field of type 'TipoSenha'
   */
  export type EnumTipoSenhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSenha'>
    


  /**
   * Reference to a field of type 'TipoSenha[]'
   */
  export type ListEnumTipoSenhaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSenha[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusAtendimento'
   */
  export type EnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento'>
    


  /**
   * Reference to a field of type 'StatusAtendimento[]'
   */
  export type ListEnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento[]'>
    


  /**
   * Reference to a field of type 'StatusGuiche'
   */
  export type EnumStatusGuicheFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusGuiche'>
    


  /**
   * Reference to a field of type 'StatusGuiche[]'
   */
  export type ListEnumStatusGuicheFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusGuiche[]'>
    


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


  export type SenhaWhereInput = {
    AND?: SenhaWhereInput | SenhaWhereInput[]
    OR?: SenhaWhereInput[]
    NOT?: SenhaWhereInput | SenhaWhereInput[]
    id?: IntFilter<"Senha"> | number
    codigo?: StringFilter<"Senha"> | string
    tipo?: EnumTipoSenhaFilter<"Senha"> | $Enums.TipoSenha
    dataCriacao?: DateTimeFilter<"Senha"> | Date | string
    dataChamada?: DateTimeNullableFilter<"Senha"> | Date | string | null
    guiche?: StringNullableFilter<"Senha"> | string | null
    tempoAtendimento?: IntNullableFilter<"Senha"> | number | null
    status?: EnumStatusAtendimentoFilter<"Senha"> | $Enums.StatusAtendimento
  }

  export type SenhaOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    dataChamada?: SortOrderInput | SortOrder
    guiche?: SortOrderInput | SortOrder
    tempoAtendimento?: SortOrderInput | SortOrder
    status?: SortOrder
  }

  export type SenhaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: SenhaWhereInput | SenhaWhereInput[]
    OR?: SenhaWhereInput[]
    NOT?: SenhaWhereInput | SenhaWhereInput[]
    tipo?: EnumTipoSenhaFilter<"Senha"> | $Enums.TipoSenha
    dataCriacao?: DateTimeFilter<"Senha"> | Date | string
    dataChamada?: DateTimeNullableFilter<"Senha"> | Date | string | null
    guiche?: StringNullableFilter<"Senha"> | string | null
    tempoAtendimento?: IntNullableFilter<"Senha"> | number | null
    status?: EnumStatusAtendimentoFilter<"Senha"> | $Enums.StatusAtendimento
  }, "id" | "codigo">

  export type SenhaOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    dataChamada?: SortOrderInput | SortOrder
    guiche?: SortOrderInput | SortOrder
    tempoAtendimento?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: SenhaCountOrderByAggregateInput
    _avg?: SenhaAvgOrderByAggregateInput
    _max?: SenhaMaxOrderByAggregateInput
    _min?: SenhaMinOrderByAggregateInput
    _sum?: SenhaSumOrderByAggregateInput
  }

  export type SenhaScalarWhereWithAggregatesInput = {
    AND?: SenhaScalarWhereWithAggregatesInput | SenhaScalarWhereWithAggregatesInput[]
    OR?: SenhaScalarWhereWithAggregatesInput[]
    NOT?: SenhaScalarWhereWithAggregatesInput | SenhaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Senha"> | number
    codigo?: StringWithAggregatesFilter<"Senha"> | string
    tipo?: EnumTipoSenhaWithAggregatesFilter<"Senha"> | $Enums.TipoSenha
    dataCriacao?: DateTimeWithAggregatesFilter<"Senha"> | Date | string
    dataChamada?: DateTimeNullableWithAggregatesFilter<"Senha"> | Date | string | null
    guiche?: StringNullableWithAggregatesFilter<"Senha"> | string | null
    tempoAtendimento?: IntNullableWithAggregatesFilter<"Senha"> | number | null
    status?: EnumStatusAtendimentoWithAggregatesFilter<"Senha"> | $Enums.StatusAtendimento
  }

  export type GuicheWhereInput = {
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    id?: IntFilter<"Guiche"> | number
    numero?: IntFilter<"Guiche"> | number
    status?: EnumStatusGuicheFilter<"Guiche"> | $Enums.StatusGuiche
    ultimaSenha?: StringNullableFilter<"Guiche"> | string | null
    dataAtualizacao?: DateTimeFilter<"Guiche"> | Date | string
  }

  export type GuicheOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    ultimaSenha?: SortOrderInput | SortOrder
    dataAtualizacao?: SortOrder
  }

  export type GuicheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: number
    AND?: GuicheWhereInput | GuicheWhereInput[]
    OR?: GuicheWhereInput[]
    NOT?: GuicheWhereInput | GuicheWhereInput[]
    status?: EnumStatusGuicheFilter<"Guiche"> | $Enums.StatusGuiche
    ultimaSenha?: StringNullableFilter<"Guiche"> | string | null
    dataAtualizacao?: DateTimeFilter<"Guiche"> | Date | string
  }, "id" | "numero">

  export type GuicheOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    ultimaSenha?: SortOrderInput | SortOrder
    dataAtualizacao?: SortOrder
    _count?: GuicheCountOrderByAggregateInput
    _avg?: GuicheAvgOrderByAggregateInput
    _max?: GuicheMaxOrderByAggregateInput
    _min?: GuicheMinOrderByAggregateInput
    _sum?: GuicheSumOrderByAggregateInput
  }

  export type GuicheScalarWhereWithAggregatesInput = {
    AND?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    OR?: GuicheScalarWhereWithAggregatesInput[]
    NOT?: GuicheScalarWhereWithAggregatesInput | GuicheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guiche"> | number
    numero?: IntWithAggregatesFilter<"Guiche"> | number
    status?: EnumStatusGuicheWithAggregatesFilter<"Guiche"> | $Enums.StatusGuiche
    ultimaSenha?: StringNullableWithAggregatesFilter<"Guiche"> | string | null
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Guiche"> | Date | string
  }

  export type PainelWhereInput = {
    AND?: PainelWhereInput | PainelWhereInput[]
    OR?: PainelWhereInput[]
    NOT?: PainelWhereInput | PainelWhereInput[]
    id?: IntFilter<"Painel"> | number
    ultimasChamadas?: StringFilter<"Painel"> | string
    dataAtualizacao?: DateTimeFilter<"Painel"> | Date | string
  }

  export type PainelOrderByWithRelationInput = {
    id?: SortOrder
    ultimasChamadas?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PainelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PainelWhereInput | PainelWhereInput[]
    OR?: PainelWhereInput[]
    NOT?: PainelWhereInput | PainelWhereInput[]
    ultimasChamadas?: StringFilter<"Painel"> | string
    dataAtualizacao?: DateTimeFilter<"Painel"> | Date | string
  }, "id">

  export type PainelOrderByWithAggregationInput = {
    id?: SortOrder
    ultimasChamadas?: SortOrder
    dataAtualizacao?: SortOrder
    _count?: PainelCountOrderByAggregateInput
    _avg?: PainelAvgOrderByAggregateInput
    _max?: PainelMaxOrderByAggregateInput
    _min?: PainelMinOrderByAggregateInput
    _sum?: PainelSumOrderByAggregateInput
  }

  export type PainelScalarWhereWithAggregatesInput = {
    AND?: PainelScalarWhereWithAggregatesInput | PainelScalarWhereWithAggregatesInput[]
    OR?: PainelScalarWhereWithAggregatesInput[]
    NOT?: PainelScalarWhereWithAggregatesInput | PainelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Painel"> | number
    ultimasChamadas?: StringWithAggregatesFilter<"Painel"> | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Painel"> | Date | string
  }

  export type EstatisticaWhereInput = {
    AND?: EstatisticaWhereInput | EstatisticaWhereInput[]
    OR?: EstatisticaWhereInput[]
    NOT?: EstatisticaWhereInput | EstatisticaWhereInput[]
    id?: IntFilter<"Estatistica"> | number
    data?: DateTimeFilter<"Estatistica"> | Date | string
    totalSenhas?: IntFilter<"Estatistica"> | number
    senhasAtendidas?: IntFilter<"Estatistica"> | number
    senhasSP?: IntFilter<"Estatistica"> | number
    senhasSG?: IntFilter<"Estatistica"> | number
    senhasSE?: IntFilter<"Estatistica"> | number
    tempoMedioSP?: FloatFilter<"Estatistica"> | number
    tempoMedioSG?: FloatFilter<"Estatistica"> | number
    tempoMedioSE?: FloatFilter<"Estatistica"> | number
  }

  export type EstatisticaOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type EstatisticaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    data?: Date | string
    AND?: EstatisticaWhereInput | EstatisticaWhereInput[]
    OR?: EstatisticaWhereInput[]
    NOT?: EstatisticaWhereInput | EstatisticaWhereInput[]
    totalSenhas?: IntFilter<"Estatistica"> | number
    senhasAtendidas?: IntFilter<"Estatistica"> | number
    senhasSP?: IntFilter<"Estatistica"> | number
    senhasSG?: IntFilter<"Estatistica"> | number
    senhasSE?: IntFilter<"Estatistica"> | number
    tempoMedioSP?: FloatFilter<"Estatistica"> | number
    tempoMedioSG?: FloatFilter<"Estatistica"> | number
    tempoMedioSE?: FloatFilter<"Estatistica"> | number
  }, "id" | "data">

  export type EstatisticaOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
    _count?: EstatisticaCountOrderByAggregateInput
    _avg?: EstatisticaAvgOrderByAggregateInput
    _max?: EstatisticaMaxOrderByAggregateInput
    _min?: EstatisticaMinOrderByAggregateInput
    _sum?: EstatisticaSumOrderByAggregateInput
  }

  export type EstatisticaScalarWhereWithAggregatesInput = {
    AND?: EstatisticaScalarWhereWithAggregatesInput | EstatisticaScalarWhereWithAggregatesInput[]
    OR?: EstatisticaScalarWhereWithAggregatesInput[]
    NOT?: EstatisticaScalarWhereWithAggregatesInput | EstatisticaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estatistica"> | number
    data?: DateTimeWithAggregatesFilter<"Estatistica"> | Date | string
    totalSenhas?: IntWithAggregatesFilter<"Estatistica"> | number
    senhasAtendidas?: IntWithAggregatesFilter<"Estatistica"> | number
    senhasSP?: IntWithAggregatesFilter<"Estatistica"> | number
    senhasSG?: IntWithAggregatesFilter<"Estatistica"> | number
    senhasSE?: IntWithAggregatesFilter<"Estatistica"> | number
    tempoMedioSP?: FloatWithAggregatesFilter<"Estatistica"> | number
    tempoMedioSG?: FloatWithAggregatesFilter<"Estatistica"> | number
    tempoMedioSE?: FloatWithAggregatesFilter<"Estatistica"> | number
  }

  export type SenhaCreateInput = {
    codigo: string
    tipo: $Enums.TipoSenha
    dataCriacao?: Date | string
    dataChamada?: Date | string | null
    guiche?: string | null
    tempoAtendimento?: number | null
    status?: $Enums.StatusAtendimento
  }

  export type SenhaUncheckedCreateInput = {
    id?: number
    codigo: string
    tipo: $Enums.TipoSenha
    dataCriacao?: Date | string
    dataChamada?: Date | string | null
    guiche?: string | null
    tempoAtendimento?: number | null
    status?: $Enums.StatusAtendimento
  }

  export type SenhaUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoSenhaFieldUpdateOperationsInput | $Enums.TipoSenha
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataChamada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guiche?: NullableStringFieldUpdateOperationsInput | string | null
    tempoAtendimento?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
  }

  export type SenhaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoSenhaFieldUpdateOperationsInput | $Enums.TipoSenha
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataChamada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guiche?: NullableStringFieldUpdateOperationsInput | string | null
    tempoAtendimento?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
  }

  export type SenhaCreateManyInput = {
    id?: number
    codigo: string
    tipo: $Enums.TipoSenha
    dataCriacao?: Date | string
    dataChamada?: Date | string | null
    guiche?: string | null
    tempoAtendimento?: number | null
    status?: $Enums.StatusAtendimento
  }

  export type SenhaUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoSenhaFieldUpdateOperationsInput | $Enums.TipoSenha
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataChamada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guiche?: NullableStringFieldUpdateOperationsInput | string | null
    tempoAtendimento?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
  }

  export type SenhaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoSenhaFieldUpdateOperationsInput | $Enums.TipoSenha
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataChamada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    guiche?: NullableStringFieldUpdateOperationsInput | string | null
    tempoAtendimento?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
  }

  export type GuicheCreateInput = {
    numero: number
    status?: $Enums.StatusGuiche
    ultimaSenha?: string | null
    dataAtualizacao?: Date | string
  }

  export type GuicheUncheckedCreateInput = {
    id?: number
    numero: number
    status?: $Enums.StatusGuiche
    ultimaSenha?: string | null
    dataAtualizacao?: Date | string
  }

  export type GuicheUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusGuicheFieldUpdateOperationsInput | $Enums.StatusGuiche
    ultimaSenha?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusGuicheFieldUpdateOperationsInput | $Enums.StatusGuiche
    ultimaSenha?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheCreateManyInput = {
    id?: number
    numero: number
    status?: $Enums.StatusGuiche
    ultimaSenha?: string | null
    dataAtualizacao?: Date | string
  }

  export type GuicheUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusGuicheFieldUpdateOperationsInput | $Enums.StatusGuiche
    ultimaSenha?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuicheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusGuicheFieldUpdateOperationsInput | $Enums.StatusGuiche
    ultimaSenha?: NullableStringFieldUpdateOperationsInput | string | null
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainelCreateInput = {
    ultimasChamadas: string
    dataAtualizacao?: Date | string
  }

  export type PainelUncheckedCreateInput = {
    id?: number
    ultimasChamadas: string
    dataAtualizacao?: Date | string
  }

  export type PainelUpdateInput = {
    ultimasChamadas?: StringFieldUpdateOperationsInput | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ultimasChamadas?: StringFieldUpdateOperationsInput | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainelCreateManyInput = {
    id?: number
    ultimasChamadas: string
    dataAtualizacao?: Date | string
  }

  export type PainelUpdateManyMutationInput = {
    ultimasChamadas?: StringFieldUpdateOperationsInput | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PainelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ultimasChamadas?: StringFieldUpdateOperationsInput | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstatisticaCreateInput = {
    data: Date | string
    totalSenhas: number
    senhasAtendidas: number
    senhasSP: number
    senhasSG: number
    senhasSE: number
    tempoMedioSP: number
    tempoMedioSG: number
    tempoMedioSE: number
  }

  export type EstatisticaUncheckedCreateInput = {
    id?: number
    data: Date | string
    totalSenhas: number
    senhasAtendidas: number
    senhasSP: number
    senhasSG: number
    senhasSE: number
    tempoMedioSP: number
    tempoMedioSG: number
    tempoMedioSE: number
  }

  export type EstatisticaUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSenhas?: IntFieldUpdateOperationsInput | number
    senhasAtendidas?: IntFieldUpdateOperationsInput | number
    senhasSP?: IntFieldUpdateOperationsInput | number
    senhasSG?: IntFieldUpdateOperationsInput | number
    senhasSE?: IntFieldUpdateOperationsInput | number
    tempoMedioSP?: FloatFieldUpdateOperationsInput | number
    tempoMedioSG?: FloatFieldUpdateOperationsInput | number
    tempoMedioSE?: FloatFieldUpdateOperationsInput | number
  }

  export type EstatisticaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSenhas?: IntFieldUpdateOperationsInput | number
    senhasAtendidas?: IntFieldUpdateOperationsInput | number
    senhasSP?: IntFieldUpdateOperationsInput | number
    senhasSG?: IntFieldUpdateOperationsInput | number
    senhasSE?: IntFieldUpdateOperationsInput | number
    tempoMedioSP?: FloatFieldUpdateOperationsInput | number
    tempoMedioSG?: FloatFieldUpdateOperationsInput | number
    tempoMedioSE?: FloatFieldUpdateOperationsInput | number
  }

  export type EstatisticaCreateManyInput = {
    id?: number
    data: Date | string
    totalSenhas: number
    senhasAtendidas: number
    senhasSP: number
    senhasSG: number
    senhasSE: number
    tempoMedioSP: number
    tempoMedioSG: number
    tempoMedioSE: number
  }

  export type EstatisticaUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSenhas?: IntFieldUpdateOperationsInput | number
    senhasAtendidas?: IntFieldUpdateOperationsInput | number
    senhasSP?: IntFieldUpdateOperationsInput | number
    senhasSG?: IntFieldUpdateOperationsInput | number
    senhasSE?: IntFieldUpdateOperationsInput | number
    tempoMedioSP?: FloatFieldUpdateOperationsInput | number
    tempoMedioSG?: FloatFieldUpdateOperationsInput | number
    tempoMedioSE?: FloatFieldUpdateOperationsInput | number
  }

  export type EstatisticaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSenhas?: IntFieldUpdateOperationsInput | number
    senhasAtendidas?: IntFieldUpdateOperationsInput | number
    senhasSP?: IntFieldUpdateOperationsInput | number
    senhasSG?: IntFieldUpdateOperationsInput | number
    senhasSE?: IntFieldUpdateOperationsInput | number
    tempoMedioSP?: FloatFieldUpdateOperationsInput | number
    tempoMedioSG?: FloatFieldUpdateOperationsInput | number
    tempoMedioSE?: FloatFieldUpdateOperationsInput | number
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

  export type EnumTipoSenhaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSenha | EnumTipoSenhaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSenhaFilter<$PrismaModel> | $Enums.TipoSenha
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SenhaCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    dataChamada?: SortOrder
    guiche?: SortOrder
    tempoAtendimento?: SortOrder
    status?: SortOrder
  }

  export type SenhaAvgOrderByAggregateInput = {
    id?: SortOrder
    tempoAtendimento?: SortOrder
  }

  export type SenhaMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    dataChamada?: SortOrder
    guiche?: SortOrder
    tempoAtendimento?: SortOrder
    status?: SortOrder
  }

  export type SenhaMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    dataCriacao?: SortOrder
    dataChamada?: SortOrder
    guiche?: SortOrder
    tempoAtendimento?: SortOrder
    status?: SortOrder
  }

  export type SenhaSumOrderByAggregateInput = {
    id?: SortOrder
    tempoAtendimento?: SortOrder
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

  export type EnumTipoSenhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSenha | EnumTipoSenhaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSenhaWithAggregatesFilter<$PrismaModel> | $Enums.TipoSenha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoSenhaFilter<$PrismaModel>
    _max?: NestedEnumTipoSenhaFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type EnumStatusGuicheFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGuiche | EnumStatusGuicheFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGuicheFilter<$PrismaModel> | $Enums.StatusGuiche
  }

  export type GuicheCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    ultimaSenha?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type GuicheAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type GuicheMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    ultimaSenha?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type GuicheMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    status?: SortOrder
    ultimaSenha?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type GuicheSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type EnumStatusGuicheWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGuiche | EnumStatusGuicheFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGuicheWithAggregatesFilter<$PrismaModel> | $Enums.StatusGuiche
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusGuicheFilter<$PrismaModel>
    _max?: NestedEnumStatusGuicheFilter<$PrismaModel>
  }

  export type PainelCountOrderByAggregateInput = {
    id?: SortOrder
    ultimasChamadas?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PainelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PainelMaxOrderByAggregateInput = {
    id?: SortOrder
    ultimasChamadas?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PainelMinOrderByAggregateInput = {
    id?: SortOrder
    ultimasChamadas?: SortOrder
    dataAtualizacao?: SortOrder
  }

  export type PainelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EstatisticaCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type EstatisticaAvgOrderByAggregateInput = {
    id?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type EstatisticaMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type EstatisticaMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type EstatisticaSumOrderByAggregateInput = {
    id?: SortOrder
    totalSenhas?: SortOrder
    senhasAtendidas?: SortOrder
    senhasSP?: SortOrder
    senhasSG?: SortOrder
    senhasSE?: SortOrder
    tempoMedioSP?: SortOrder
    tempoMedioSG?: SortOrder
    tempoMedioSE?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTipoSenhaFieldUpdateOperationsInput = {
    set?: $Enums.TipoSenha
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusAtendimentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusAtendimento
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusGuicheFieldUpdateOperationsInput = {
    set?: $Enums.StatusGuiche
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumTipoSenhaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSenha | EnumTipoSenhaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSenhaFilter<$PrismaModel> | $Enums.TipoSenha
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
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

  export type NestedEnumTipoSenhaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSenha | EnumTipoSenhaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoSenha[] | ListEnumTipoSenhaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoSenhaWithAggregatesFilter<$PrismaModel> | $Enums.TipoSenha
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoSenhaFilter<$PrismaModel>
    _max?: NestedEnumTipoSenhaFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusGuicheFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGuiche | EnumStatusGuicheFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGuicheFilter<$PrismaModel> | $Enums.StatusGuiche
  }

  export type NestedEnumStatusGuicheWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusGuiche | EnumStatusGuicheFieldRefInput<$PrismaModel>
    in?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusGuiche[] | ListEnumStatusGuicheFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusGuicheWithAggregatesFilter<$PrismaModel> | $Enums.StatusGuiche
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusGuicheFilter<$PrismaModel>
    _max?: NestedEnumStatusGuicheFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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