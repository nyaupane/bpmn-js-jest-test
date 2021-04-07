module.exports = {
    preset: "jest-preset-angular",
    moduleNameMapper: {
        "@app/(.*)": "<rootDir>/src/app/$1",
        "@assets/(.*)": "<rootDir>/src/assets/$1",
        "@core/(.*)": "<rootDir>/src/app/core/$1",
        "@env": "<rootDir>/src/environments/environment",
        "@src/(.*)": "<rootDir>/src/src/$1",
        "@state/(.*)": "<rootDir>/src/app/state/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|cto|md|bpmn|txt)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
        "BaseRenderer.js": "<rootDir>/__mocks__/BaseRenderer.js",
        "svg.js": "<rootDir>/__mocks__/setupJestMock.js",
        "svg.panzoom.js": "<rootDir>/__mocks__/setupJestMock.js"
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
    setupFiles: ["jest-canvas-mock"]
};