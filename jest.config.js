module.exports = {
    preset: "jest-preset-angular",
    moduleNameMapper: {
        "@app/(.*)": "<rootDir>/src/app/$1",
        "@assets/(.*)": "<rootDir>/src/assets/$1",
        "@core/(.*)": "<rootDir>/src/app/core/$1",
        "@env": "<rootDir>/src/environments/environment",
        "@src/(.*)": "<rootDir>/src/src/$1",
        "@state/(.*)": "<rootDir>/src/app/state/$1",
        // "bpmn-modeler.production.min.js": "<rootDir>/__mocks__/bpmn-modeler.production.min.js",
    },
    testPathIgnorePatterns: [
        "<rootDir>/src/test.ts",
    ],
    globals: {
        "ts-jest": {
            allowSyntheticDefaultImports: true,
            tsConfig: "<rootDir>/tsconfig.spec.json",
            stringifyContentPathRegex: "\\.html$",
            astTransformers: [
                "jest-preset-angular/build/InlineFilesTransformer",
                "jest-preset-angular/build/StripStylesTransformer"
            ],
        }
    },
    transform: {
        "^.+\\.(ts|js|html)$": "ts-jest",
    },
};