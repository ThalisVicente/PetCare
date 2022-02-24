# PetCare

******************** Initialize Project *****************************************************
npm init
tsc --init


******************** Checks on tsconfig.json ************************************************
"module": "commonjs",                                /* Specify what module code is generated. */
"rootDir": "./src",                                  /* Specify the root folder within your source files. */
"moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
"target": "es6",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
"outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
"esModuleInterop": true,    /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
"forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
"strict": true,                                      /* Enable all strict type-checking options. */
"skipLibCheck": true                                 /* Skip type checking all .d.ts files. */


****************** Dependencies *************************************************************
`npm install express mustache-express dotenv`
`npm install --save-dev @types/express @types/mustache-express @types/node`
`npm install -g nodemon typescript ts-node`