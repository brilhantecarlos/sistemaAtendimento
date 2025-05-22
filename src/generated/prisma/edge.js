
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SenhaScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  tipo: 'tipo',
  dataCriacao: 'dataCriacao',
  dataChamada: 'dataChamada',
  guiche: 'guiche',
  tempoAtendimento: 'tempoAtendimento',
  status: 'status'
};

exports.Prisma.GuicheScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  status: 'status',
  ultimaSenha: 'ultimaSenha',
  dataAtualizacao: 'dataAtualizacao'
};

exports.Prisma.PainelScalarFieldEnum = {
  id: 'id',
  ultimasChamadas: 'ultimasChamadas',
  dataAtualizacao: 'dataAtualizacao'
};

exports.Prisma.EstatisticaScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoSenha = exports.$Enums.TipoSenha = {
  SP: 'SP',
  SG: 'SG',
  SE: 'SE'
};

exports.StatusAtendimento = exports.$Enums.StatusAtendimento = {
  NAO_ATENDIDA: 'NAO_ATENDIDA',
  EM_ATENDIMENTO: 'EM_ATENDIMENTO',
  ATENDIDA: 'ATENDIDA',
  DESISTENCIA: 'DESISTENCIA'
};

exports.StatusGuiche = exports.$Enums.StatusGuiche = {
  DISPONIVEL: 'DISPONIVEL',
  OCUPADO: 'OCUPADO',
  FECHADO: 'FECHADO'
};

exports.Prisma.ModelName = {
  Senha: 'Senha',
  Guiche: 'Guiche',
  Painel: 'Painel',
  Estatistica: 'Estatistica'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Renan Oliveira\\Desktop\\Trabalho_Nassau\\sistema-ticket\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Renan Oliveira\\Desktop\\Trabalho_Nassau\\sistema-ticket\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgresql://postgres:1234@localhost:5432/tickets?schema=public"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Senha {\n  id               Int               @id @default(autoincrement())\n  codigo           String            @unique\n  tipo             TipoSenha\n  dataCriacao      DateTime          @default(now()) @map(\"data_criacao\")\n  dataChamada      DateTime?         @map(\"data_chamada\")\n  guiche           String?\n  tempoAtendimento Int?              @map(\"tempo_atendimento\")\n  status           StatusAtendimento @default(NAO_ATENDIDA)\n\n  @@map(\"senhas\")\n}\n\nmodel Guiche {\n  id              Int          @id @default(autoincrement())\n  numero          Int          @unique\n  status          StatusGuiche @default(DISPONIVEL)\n  ultimaSenha     String?      @map(\"ultima_senha\")\n  dataAtualizacao DateTime     @updatedAt @map(\"data_atualizacao\")\n\n  @@map(\"guiches\")\n}\n\nmodel Painel {\n  id              Int      @id @default(autoincrement())\n  ultimasChamadas String   @map(\"ultimas_chamadas\")\n  dataAtualizacao DateTime @updatedAt @map(\"data_atualizacao\")\n\n  @@map(\"painel\")\n}\n\nmodel Estatistica {\n  id              Int      @id @default(autoincrement())\n  data            DateTime @unique\n  totalSenhas     Int      @map(\"total_senhas\")\n  senhasAtendidas Int      @map(\"senhas_atendidas\")\n  senhasSP        Int      @map(\"senhas_sp\")\n  senhasSG        Int      @map(\"senhas_sg\")\n  senhasSE        Int      @map(\"senhas_se\")\n  tempoMedioSP    Float    @map(\"tempo_medio_sp\")\n  tempoMedioSG    Float    @map(\"tempo_medio_sg\")\n  tempoMedioSE    Float    @map(\"tempo_medio_se\")\n\n  @@map(\"estatisticas\")\n}\n\nenum TipoSenha {\n  SP\n  SG\n  SE\n}\n\nenum StatusAtendimento {\n  NAO_ATENDIDA\n  EM_ATENDIMENTO\n  ATENDIDA\n  DESISTENCIA\n}\n\nenum StatusGuiche {\n  DISPONIVEL\n  OCUPADO\n  FECHADO\n}\n",
  "inlineSchemaHash": "95fb5154279296e99127d52db6f70c1f7d2a0b6909efcaa2f0a8dcd9fa9cb65a",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Senha\":{\"dbName\":\"senhas\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoSenha\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataCriacao\",\"dbName\":\"data_criacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataChamada\",\"dbName\":\"data_chamada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"guiche\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempoAtendimento\",\"dbName\":\"tempo_atendimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusAtendimento\",\"nativeType\":null,\"default\":\"NAO_ATENDIDA\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Guiche\":{\"dbName\":\"guiches\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"StatusGuiche\",\"nativeType\":null,\"default\":\"DISPONIVEL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimaSenha\",\"dbName\":\"ultima_senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Painel\":{\"dbName\":\"painel\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimasChamadas\",\"dbName\":\"ultimas_chamadas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataAtualizacao\",\"dbName\":\"data_atualizacao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Estatistica\":{\"dbName\":\"estatisticas\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalSenhas\",\"dbName\":\"total_senhas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senhasAtendidas\",\"dbName\":\"senhas_atendidas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senhasSP\",\"dbName\":\"senhas_sp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senhasSG\",\"dbName\":\"senhas_sg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senhasSE\",\"dbName\":\"senhas_se\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempoMedioSP\",\"dbName\":\"tempo_medio_sp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempoMedioSG\",\"dbName\":\"tempo_medio_sg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tempoMedioSE\",\"dbName\":\"tempo_medio_se\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"TipoSenha\":{\"values\":[{\"name\":\"SP\",\"dbName\":null},{\"name\":\"SG\",\"dbName\":null},{\"name\":\"SE\",\"dbName\":null}],\"dbName\":null},\"StatusAtendimento\":{\"values\":[{\"name\":\"NAO_ATENDIDA\",\"dbName\":null},{\"name\":\"EM_ATENDIMENTO\",\"dbName\":null},{\"name\":\"ATENDIDA\",\"dbName\":null},{\"name\":\"DESISTENCIA\",\"dbName\":null}],\"dbName\":null},\"StatusGuiche\":{\"values\":[{\"name\":\"DISPONIVEL\",\"dbName\":null},{\"name\":\"OCUPADO\",\"dbName\":null},{\"name\":\"FECHADO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

